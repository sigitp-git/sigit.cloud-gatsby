---
title: "Mininet Overview"
date: "2013-12-23"
---

> Mininet:
> 
> - Provides a simple and inexpensive **network testbed** for developing OpenFlow applications
> - Enables **multiple concurrent developers** to work independently on the same topology
> - Supports **system-level regression tests**, which are repeatable and easily packaged
> - Enables **complex topology testing**, without the need to wire up a physical network
> - Includes a **CLI** that is topology-aware and OpenFlow-aware, for debugging or running network-wide tests
> - Supports **arbitrary custom topologies**, and includes a basic set of **parametrized topologies**
> - also Provides a straightforward and extensible **Python API** for network creation and experimentation
> 
> [mininet.org/overview](http://mininet.org/overview)

Once Mininet VM installed (see previous post), you can start to play around with it. Access the VM with root access (_**sudo su**_). _**mn**_ command can be used to activate basic topology of Mininet. The basic topology is: **h1-s1-h2** with one OpenFlow controller **c0**. We can create custom topology by building certain Python script (will be discussed later). See below log.

1\. Start the Mininet with basic topology

root@mininet-vm:/home/mininet# mn
\*\*\* Creating network
\*\*\* Adding controller
\*\*\* Adding hosts:
h1 h2
\*\*\* Adding switches:
s1
\*\*\* Adding links:
(h1, s1) (h2, s1)
\*\*\* Configuring hosts
h1 h2
\*\*\* Starting controller
\*\*\* Starting 1 switches
s1

2\. Check the topology

mininet> nodes
available nodes are:
c0 h1 h2 s1
mininet> net
h1 h1-eth0:s1-eth1
h2 h2-eth0:s1-eth2
s1 lo:  s1-eth1:h1-eth0 s1-eth2:h2-eth0
c0
mininet> dump
<Host h1: h1-eth0:10.0.0.1 pid=3229>
<Host h2: h2-eth0:10.0.0.2 pid=3230>
<OVSSwitch s1: lo:127.0.0.1,s1-eth1:None,s1-eth2:None pid=3233>
<OVSController c0: 127.0.0.1:6633 pid=3221>

3\. Other mininet commands

mininet> ?
Documented commands (type help <topic>):
========================================
EOF    exit   intfs     link   noecho       pingpair      py    source  xterm
dpctl  gterm  iperf     net    pingall      pingpairfull  quit  time
dump   help   iperfudp  nodes  pingallfull  px            sh    x
You may also send a command to a node using:
<node> command {args}
For example:
mininet> h1 ifconfig
The interpreter automatically substitutes IP addresses
for node names when a node is the first arg, so commands
like
mininet> h2 ping h3
should work.
Some character-oriented interactive commands require
noecho:
mininet> noecho h2 vi foo.py
However, starting up an xterm/gterm is generally better:
mininet> xterm h2

3\. Check IP addressing

mininet> h1 ifconfig -a
h1-eth0   Link encap:Ethernet  HWaddr aa:4f:15:e2:10:99
inet addr:10.0.0.1  Bcast:10.255.255.255  Mask:255.0.0.0
inet6 addr: fe80::a84f:15ff:fee2:1099/64 Scope:Link
UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
RX packets:5 errors:0 dropped:0 overruns:0 frame:0
TX packets:6 errors:0 dropped:0 overruns:0 carrier:0
collisions:0 txqueuelen:1000
RX bytes:378 (378.0 B)  TX bytes:468 (468.0 B)
lo        Link encap:Local Loopback
inet addr:127.0.0.1  Mask:255.0.0.0
inet6 addr: ::1/128 Scope:Host
UP LOOPBACK RUNNING  MTU:65536  Metric:1
RX packets:0 errors:0 dropped:0 overruns:0 frame:0
TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
collisions:0 txqueuelen:0
RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

4\. Ping Test

mininet> h1 ping h2
PING 10.0.0.2 (10.0.0.2) 56(84) bytes of data.
64 bytes from 10.0.0.2: icmp\_req=1 ttl=64 time=**2.37 ms**
64 bytes from 10.0.0.2: icmp\_req=2 ttl=64 time=**0.077 ms**
64 bytes from 10.0.0.2: icmp\_req=3 ttl=64 time=**0.057 ms**
64 bytes from 10.0.0.2: icmp\_req=4 ttl=64 time=0.071 ms
64 bytes from 10.0.0.2: icmp\_req=5 ttl=64 time=0.096 ms
64 bytes from 10.0.0.2: icmp\_req=6 ttl=64 time=0.159 ms
64 bytes from 10.0.0.2: icmp\_req=7 ttl=64 time=0.071 ms
ç64 bytes from 10.0.0.2: icmp\_req=8 ttl=64 time=0.066 ms
64 bytes from 10.0.0.2: icmp\_req=9 ttl=64 time=0.069 ms
^C
--- 10.0.0.2 ping statistics ---
9 packets transmitted, 9 received, 0% packet loss, time 8000ms
rtt min/avg/max/mdev = 0.057/0.338/2.378/0.721 ms
mininet>

Note that first ping packet took **2.37 ms**, but the next packets took significantly less time. Initially switch **s1** has no flow table at all, that is why the switch **s1** has to communicate with controller **c0** to get the flow table populated (reactive mode). The ping packet forwarded by **s1** to **c0** (_Packet In_) since **s1** don't know where to forward it (no flow table), **c0** then broadcast ARP request to find out which MAC address the destination IP is (_Packet Out_). **h2** responds ARP request with broadcast message, then **c0** push this information (_Flow Mod_) into **s1** flow table (h1 has IP1 and MAC1, h2 has IP2 and MAC2). The next ping packet will be forwarded at line rate since the flow table is installed already for that flow in **s1**, that is why next ping packets travel faster. Note **c0** always has Echo Request/Reply messages with **s1** as keep-alive kind of messages. See below wireshark trace from **c0** side for more details.

5\. Pair ping test

This test execute ping from **h1 to h2 and h2 to h1**.

root@mininet-vm:/home/mininet# mn --test pingpair
\*\*\* Creating network
\*\*\* Adding controller
\*\*\* Adding hosts:
h1 h2 
\*\*\* Adding switches:
s1 
\*\*\* Adding links:
(h1, s1) (h2, s1) 
\*\*\* Configuring hosts
h1 h2 
\*\*\* Starting controller
\*\*\* Starting 1 switches
s1 
**h1 -> h2** 
**h2 -> h1** 
**\*\*\* Results: 0% dropped (2/2 received)**
\*\*\* Stopping 1 switches
s1 ..
\*\*\* Stopping 2 hosts
h1 h2 
\*\*\* Stopping 1 controllers
c0 
\*\*\* Done
completed in 0.357 seconds

6\. Iperf test

This test execute iperf test to check TCP bandwidth between **h1 and h2**, one of the host will act as iperf server while the other act as iperf client.

root@mininet-vm:/home/mininet# mn --test iperf
\*\*\* Creating network
\*\*\* Adding controller
\*\*\* Adding hosts:
h1 h2 
\*\*\* Adding switches:
s1 
\*\*\* Adding links:
(h1, s1) (h2, s1) 
\*\*\* Configuring hosts
h1 h2 
\*\*\* Starting controller
\*\*\* Starting 1 switches
s1 
**\*\*\* Iperf: testing TCP bandwidth between h1 and h2**
**waiting for iperf to start up...\*\*\* Results: \['1.52 Gbits/sec', '1.53 Gbits/sec'\]**
\*\*\* Stopping 1 switches
s1 ..
\*\*\* Stopping 2 hosts
h1 h2 
\*\*\* Stopping 1 controllers
c0 
\*\*\* Done
completed in 5.963 seconds
root@mininet-vm:/home/mininet#

Reading materials:

1. [mininet.org](http://mininet.org)
2. [opennetworking.org](http://opennetworking.org)
3. [SDN with OpenFlow](https://play.google.com/store/books/details?id=GSC8AQAAQBAJ&source=productsearch&utm_source=HA_Desktop_US&utm_medium=SEM&utm_campaign=PLA&pcampaignid=MKTAD0930BO1)
