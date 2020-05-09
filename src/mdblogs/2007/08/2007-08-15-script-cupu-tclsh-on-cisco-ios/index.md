---
title: "Script Cupu Tclsh on Cisco IOS"
date: "2007-08-15"
---

To test your lab scenarios using tclsh feature on Cisco IOS, use this (cupu) script.

tclsh foreach ip\_address { 10.1.1.1 10.1.2.1 10.1.3.1 10.1.4.1 10.100.12.1 10.2.1.1 10.2.2.1 10.2.3.1 10.2.4.1 10.200.12.2 }{ ping $ip\_address } tclquit
