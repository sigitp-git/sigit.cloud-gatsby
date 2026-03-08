---
title: "Fine-Tuning 14B SLMs for 3GPP Root Cause Analysis on Amazon SageMaker"
date: "2026-03-08"
---

Can fine-tuned small language models (SLMs) match frontier foundation models on automated root cause analysis of 5G core network logs? I built a benchmark to find out, using <a href="https://aws.amazon.com/sagemaker/train/" target="_blank" rel="noopener noreferrer">Amazon SageMaker Training Jobs</a> as the primary compute.

The project: <a href="https://github.com/sigitp-git/sagemaker-finetuning-telco-slm" target="_blank" rel="noopener noreferrer">sagemaker-finetuning-telco-slm</a>

## The Problem

When something goes wrong in a 5G SA core network, NOC engineers sift through 3GPP protocol logs (NAS, NGAP, RRC) to identify the root cause. These logs are noisy — a single UPF degradation can trigger cascading heartbeat timeouts, keepalive failures, and secondary alarms. Separating the actual root cause from sympathetic noise is time-consuming and error-prone.

The question: can we automate this with language models?

## The Approach

I benchmarked three fine-tuned 14B-class SLMs against two frontier models (Claude and <a href="https://aws.amazon.com/ai/generative-ai/nova/" target="_blank" rel="noopener noreferrer">Amazon Nova Pro</a>) across 1,000 synthetic 3GPP failure scenarios covering 8 failure types: core network failure, authentication failure, handover failure, congestion, QoS violation, transport jitter, radio failure, and normal (no fault).

### Fine-Tuned SLMs
- **Mistral-Nemo-Base-2407** (12B) — QLoRA 4-bit on 1× A10G (`ml.g5.2xlarge`)
- **Qwen3-14B** — QLoRA 4-bit on 4× A10G (`ml.g5.12xlarge`)
- **Gemma 3 12B** — QLoRA 4-bit on 1× A10G (`ml.g5.2xlarge`)

### Frontier Models (via <a href="https://aws.amazon.com/bedrock/" target="_blank" rel="noopener noreferrer">Amazon Bedrock</a>)
- **Claude 4.6 Opus** — zero-shot, 5-shot, and 5-shot + Chain-of-Thought
- **Amazon Nova Pro** — same three prompting strategies

## Training on SageMaker

All fine-tuning used <a href="https://aws.amazon.com/sagemaker/train/" target="_blank" rel="noopener noreferrer">Amazon SageMaker Training Jobs</a> — no instance provisioning, no SSH, no manual teardown. You provide a training script and an <a href="https://aws.amazon.com/s3/" target="_blank" rel="noopener noreferrer">S3</a> dataset path, specify the instance type, and SageMaker handles the rest.

The training data: 1,300 synthetic 3GPP signaling logs generated via <a href="https://aws.amazon.com/bedrock/" target="_blank" rel="noopener noreferrer">Amazon Bedrock</a>, each labeled with ground-truth root cause error codes across the 8 failure types.

### Why QLoRA 4-bit for all three models?

All three 12B–14B models exceed the 24GB A10G VRAM limit when loaded in BF16 with training overhead. For example, Mistral-Nemo at BF16 is ~24GB for weights alone — zero headroom for activations, gradients, or optimizer states. QLoRA compresses weights to 4-bit (~6GB), leaving ~18GB for training.

Qwen3-14B additionally needs 4× GPUs because its larger architecture generates heavier activations and optimizer states during training, pushing peak memory to 60–80GB.

### Training Results

| Model | Instance | Time | Final Loss | Avg Loss |
|-------|----------|------|------------|----------|
| Mistral-Nemo | ml.g5.2xlarge (1× A10G) | ~41 min | 1.035 | 1.359 |
| Qwen3-14B | ml.g5.12xlarge (4× A10G) | ~93 min | 0.605 | 0.582 |
| Gemma 3 12B | ml.g5.2xlarge (1× A10G) | ~87 min | 5.144 | 4.920 |

All three completed 325 steps (2 epochs over 1,300 examples). Training cost ranged from ~$1.31 (Mistral-Nemo) to ~$11.78 (Qwen3-14B on the larger instance).

Note: loss scales are not directly comparable across models due to different tokenizers and vocabulary sizes. The real comparison comes from the evaluation metrics (F1, precision, recall).

## Key Takeaways

1. **<a href="https://aws.amazon.com/sagemaker/train/" target="_blank" rel="noopener noreferrer">SageMaker Training Jobs</a> simplify GPU fine-tuning** — no instance management, automatic artifact upload to <a href="https://aws.amazon.com/s3/" target="_blank" rel="noopener noreferrer">S3</a>, and you only pay for the training time.

2. **QLoRA 4-bit is essential for 12B–14B models on A10G GPUs** — even models that "technically fit" in BF16 will OOM during training due to activation and optimizer overhead.

3. **Synthetic data works for bootstrapping** — <a href="https://aws.amazon.com/bedrock/" target="_blank" rel="noopener noreferrer">Bedrock</a>-generated 3GPP logs provide a viable starting point. Real operator data would be the next step for production validation.

4. **A deterministic post-processing filter is critical** — stripping sympathetic noise (heartbeat timeouts, keepalives) from model outputs before scoring ensures fair comparison across all models.

## Architecture

The full pipeline runs on AWS managed services:
- <a href="https://aws.amazon.com/bedrock/" target="_blank" rel="noopener noreferrer">Amazon Bedrock</a> — synthetic data generation + frontier model evaluation
- <a href="https://aws.amazon.com/sagemaker/train/" target="_blank" rel="noopener noreferrer">Amazon SageMaker Training Jobs</a> — QLoRA fine-tuning of all three SLMs
- <a href="https://aws.amazon.com/s3/" target="_blank" rel="noopener noreferrer">Amazon S3</a> — dataset storage, adapter weights, evaluation results
- <a href="https://aws.amazon.com/ec2/" target="_blank" rel="noopener noreferrer">Amazon EC2</a> (alternative) — for interactive development and debugging

For production deployment, the fine-tuned SLMs can run on <a href="https://aws.amazon.com/sagemaker/endpoints/" target="_blank" rel="noopener noreferrer">SageMaker Real-Time Endpoints</a>, self-hosted <a href="https://aws.amazon.com/ec2/" target="_blank" rel="noopener noreferrer">EC2</a>, or even <a href="https://aws.amazon.com/outposts/" target="_blank" rel="noopener noreferrer">AWS Outposts</a> for on-premise telco edge deployments where data residency is required.

## Try It

The full step-by-step guide, training scripts, and evaluation code are on GitHub:

👉 <a href="https://github.com/sigitp-git/sagemaker-finetuning-telco-slm" target="_blank" rel="noopener noreferrer">github.com/sigitp-git/sagemaker-finetuning-telco-slm</a>

**Disclaimer**
<a href="https://sigit.cloud/disclaimer/" target="_blank" rel="noopener noreferrer">https://sigit.cloud/disclaimer/</a>
