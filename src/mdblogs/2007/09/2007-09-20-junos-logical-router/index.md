---
title: "JUNOS logical-router"
date: "2007-09-20"
---

Hmm... interesting:

* * *

esigpri@SRLAB1# help topic logical-routers overview OverviewLogical routers perform a subset of the actions of a physical router and have their own unique routing tables, interfaces, policies, and routing instances. A set of logical routers within a single router can handle the functions previously performed by several small routers.The following are supported on logical routers: \* Open Shortest Path First (OSPF), Intermediate System-to-Intermediate System (IS-IS), Routing Information Protocol (RIP), RIP next generation (RIPng), Border Gateway Protocol (BGP), Resource Reservation Protocol (RSVP), Label Distribution Protocol (LDP), static routes, various multicast protocols, and Internet Protocol version 4 (IPv4) and version 6 (IPv6) are supported at the \[edit logical-routers protocols\] hierarchy level.

\* Basic Multiprotocol Label Switching (MPLS) for core provider router functionality is supported at the \[edit logical-routers protocols mpls\] hierarchy level.

\* All policy-related statements available at the \[edit policy-options\] hierarchy level are supported at the \[edit logical-routers policy-options\] hierarchy level.

\* Most routing options statements available at the \[edit routing-options\] hierarchy level are supported at the \[edit logical-routers routing-options\] hierarchy level. Only the route-record statement is not supported at the \[edit logical-routers routing-options\] hierarchy level.

\* You can assign most interface types to a logical router, including SONET interfaces, Ethernet interfaces, Asynchronous Transfer Mode (ATM) interfaces, ATM2 interfaces, Channelized Q Performance Processor (QPP) interfaces, aggregated interfaces, link services interfaces, and multilink services interfaces.

\* Source class usage, destination class usage, unicast reverse path forwarding, class of service, firewall filters, class-based forwarding, and policy-based accounting work with logical routers when you configure these features on the physical router.

\* Multicast protocols, such as Protocol Independent Multicast (PIM) and Distance Vector Multicast Routing Protocol (DVMRP) are supported at the \[edit logical-routers logical-router-name protocols\] hierarchy level.

The following restrictions apply to logical routers: \* You can configure a maximum of 15 logical routers on one physical router.

\* The router has only one configuration file, which contains configuration information for the physical router and all associated logical routers. Master users can access the full configuration. However, logical router users can access only the portion of the configuration related to their particular logical router.

\* All configuration commits performed by a logical router user are treated as commit private. For more information on the commit private command, see the JUNOS System Basics Configuration Guide.

\* If a logical router experiences an interruption of its routing protocol process (rpd), the core dump output is saved in a file in the following location: /var/tmp/rpd\_logical-router-name.core-tarball.number.tgz. Likewise, if you issue the restart routing command in a logical router, only the routing protocol process (rpd) for the logical router is restarted.

\* If you configure trace options for a logical router, the output log file is stored in the following location: /var/tmp/logical-router-name.

\* The following Physical Interface Cards (PICs) are not supported with logical routers: Adaptive Services PIC, ES PIC, Monitoring Services PIC, and Monitoring Services II PIC.

\* Graceful Routing Engine switchover, sampling, port mirroring, IP Security (IPSec), and Generalized MPLS (GMPLS) are not supported.

\* Rendezvous point functionality for multicast protocols within a logical router is not supported.

\* Label-switched path (LSP) ping and traceroute for autonomous system (AS) number lookup are not supported.

Logical Routers and Virtual Routers

A virtual router is not the same as a logical router. A virtual router is a type of simplified routing instance that has a single routing table. A logical router is a partition of a physical router and can contain multiple routing instances and routing tables. For example, a logical router can contain multiple virtual router routing instances.

\[edit\] esigpri@SRLAB1#

* * *

esigpri@SRLAB1# help reference logical-routers logical-routers logical-routersSyntax

logical-routers logical-router-name;

Hierarchy Level

\[edit\]

Release Information

Statement introduced before JUNOS Release 7.4.

Description

Configure a logical router.

Options

logical-router-name--Name of the logical router.

Usage Guidelines

See "Logical Router Configuration Guidelines".

Required Privilege Level

routing--To view this statement in the configuration. routing-control--To add this statement to the configuration.

\[edit\] esigpri@SRLAB1#

* * *
