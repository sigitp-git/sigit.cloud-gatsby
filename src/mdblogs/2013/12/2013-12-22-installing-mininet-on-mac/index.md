---
title: "Installing Mininet on Mac"
date: "2013-12-22"
---

> Mininet creates a **realistic virtual network**, running **real kernel, switch and application code**, on a single machine (VM, cloud or native), in seconds, with a single command.  - [mininet.org](http://mininetorg)

My main goal by installing Mininet on my Mac is to use it as a machine to play around with [OpenFlow](http://openflow.org) based SDN (Software-Defined Networking). The easiest way is to use the prepackaged Virtual Machine (VM) provided by Mininet.

Here are the steps:

1\. Install virtualization system on your Mac. I have tried the free Virtualbox but doesn't work with latest Mininet VM, just use [VMWare Fusion 6](http://www.vmware.com/products/fusion/features.html) instead (they provide 30 days trial version). Planning to buy the license later ;)

2\. Download the Mininet VM here: [https://bitbucket.org/mininet/mininet-vm-images/downloads](https://bitbucket.org/mininet/mininet-vm-images/downloads) 

3\. Unzip the VM, run the VM by opening the .ovf file. Here's snapshot of running Mininet VM

4\. We will need to run pre-installed Wireshark program inside the Mininet VM, therefore we will need X11 environment to display the GUI. I have problem forwarding X11 from the VM to my Mac.

My solution is to install the X11 inside the VM itself. Do this by using this command: _**apt-get install xinit**_, then _**apt-get install xinit --fix-missing**_. Once done, start the X server by using _**startx**_ command, then try to open Wireshark using the _**sudo wireshark &**_ command.

If those steps are done, we are good to go. I will write more about Mininet and [OpenFlow](http://openflow.org) based SDN (Software-Defined Networking) in the future.

Stay tuned!

PS: I am using Macbook Air 11", Mid 2011 (1.5 GHz Intel Core i5, 4GB RAM)
