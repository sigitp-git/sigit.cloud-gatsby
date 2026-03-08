---
inclusion: always
---

# Git Policy

This repository is connected to AWS Amplify. Any push to the `master` branch automatically triggers a production build and deployment.

## Rules

- NEVER run `git add`, `git commit`, `git push`, or any other git command unless the user explicitly asks for it.
- Always test locally first (`npm test`, `gatsby build`, `gatsby serve`) before any git action.
- When the user asks to commit or push, confirm the scope of changes before proceeding.
