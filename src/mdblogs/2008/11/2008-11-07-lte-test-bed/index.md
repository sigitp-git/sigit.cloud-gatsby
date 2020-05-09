---
title: "LTE Test Bed"
date: "2008-11-07"
---

**The Third Generation Partnership Project (3GPP) is specifying the long-term evolution of third-generation cellular systems to meet demands for higher user bit rates. Ericsson has thus developed a test bed to evaluate new access technologies and to investigate the suitability of new implementation technologies for future radio-access products.**

**The authors explain the access concept and anticipated requirements for LTE and describe the test-bed system, architecture, subsystems, and technology.**

**Background** In September 2006, 3GPP finalized a study item called Evolved UTRA and UTRAN. The purpose of the study was to define the long-term evolution (LTE) of 3GPP access technology in order to keep it competitive even in the distant future. A corresponding work item is scheduled for completion in the second half of 2007. The 3GPP also conducted a parallel study, called System Architecture Evolution (SAE), to outline the evolution of the core network.

**Introduction to LTE** The 3GPP study item began by setting requirements and defining the scope of LTE. Examples of these requirements are

- improved instantaneous peak data rates - 100Mbps in the downlink and 50Mbps in the uplink;
    
- reduced latency - less than 100ms transition from camped state to active state, less than 50ms transition from dormant state to active state, and less than 5ms IP packet latency in the user plane in an unloaded system;
    
- improved system performance - two- to four-fold increase in downlink bit rates compared with a basic release 6 system (HSDPA), and two- to three-fold increase in uplink bit rates compared with a basic release 6 system (E-DCH); and
    
- improved spectrum flexibility - ability to deploy the system in many different frequency bands, in paired and unpaired spectrum, and with different spectrum allocations (for example, 1.25, 2.5, 5.0, 10.0, 15.0 and 20MHz).
    

The requirements were also used as input for determining the choice of air interface. To fulfill the requirements put on spectrum flexibility and peak data rates, the study item concluded that the air interface in the downlink should be based on orthogonal frequency-division multiplexing (OFDM). This approach yields a frequency structure that splits data over a large number of individual subcarriers with a spacing of 15kHz. The smallest addressable unit, called a resource block, is defined as 12 consecutive subcarriers in frequency and 14 consecutive symbols in time. The resource block is thus 180kz in the frequency domain and equal to 1ms (or one subframe) in the time domain. A subframe is also the minimum transmission time interval (TTI). Short TTIs favor the requirements put on latency in the user plane. The main method of fulfilling the requirements for peak data rates calls for the transmission of parallel streams of data to a single terminal using multiple-input multiple-output (MIMO) techniques.

For the uplink, the study item recommended a single-carrier-based frequency-division multiple access (FDMA) solution with dynamic bandwidth. This approach allows for a power-efficient implementation of the user terminal. The basic parameters, such as subframe and TTI, match those of the downlink.

Ericsson's LTE test bed thus uses cyclic-prefix OFDM (CP-OFDM) technology in the downlink and localized or interleaved FDMA technology in the uplink. At present, in a single-stream configuration from a single mobile user to the radio base station (RBS), it supports transmission rates of up to nearly 80Mbps in the downlink and 25Mbps in the uplink. The addition of three more streams in the downlink will give the test bed a peak data rate of nearly 300Mbps.

The LTE test bed is currently limited to a single cell configuration without support for radio resource management, admission control, or handover between cells or sectors. Apart from basic radio and baseband (BB) capabilities, it implements medium access control (MAC), radio link control (RLC), and a simple interface to applications and services. It has also been prepared to work with advanced antenna solutions. Therefore, the LTE access network can optimize transmission according to a user's location and needs - that is, it can combine several streams, form beams (beamforming) for longer range, or employ other combinations of transmission.

[http://www.ericsson.com/ericsson/corpinfo/publications/review/2007\_01/02.shtml](http://www.ericsson.com/ericsson/corpinfo/publications/review/2007_01/02.shtml)
