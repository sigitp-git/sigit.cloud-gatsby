---
title: "MPLS Traffic Engineering using Cisco IOS"
date: "2008-07-04"
---

Lab physical topology:

[![](http://sigitp.files.wordpress.com/2008/07/blog.jpg?w=300)](http://sigitp.files.wordpress.com/2008/07/blog.jpg)

Configuration:

PE1-AS1#sh run

Building configuration...

Current configuration : 2376 bytes

!

version 12.3

service timestamps debug datetime msec

service timestamps log datetime msec

no service password-encryption

!

hostname PE1-AS1

!

boot-start-marker

boot-end-marker

!

enable secret 5 $1$7fpS$wBzf9E5P9JnTRYGjxG7Sm1

!

no aaa new-model

ip subnet-zero

!

!

no ip domain lookup

!

ip cef

mpls label protocol ldp

mpls traffic-eng tunnels

tag-switching tdp router-id Loopback0

!

!

!

!

!

!

!

!

!

!

!

!

!

!

!

interface Loopback0

ip address 10.10.10.101 255.255.255.255

!

interface Tunnel0

description Predefined Static LSP Tunnel - LSP2

ip unnumbered Loopback0

tunnel destination 10.10.10.103

tunnel mode mpls traffic-eng

tunnel mpls traffic-eng autoroute announce

tunnel mpls traffic-eng priority 1 1

tunnel mpls traffic-eng bandwidth 100

tunnel mpls traffic-eng path-option 1 explicit name STAT-LSP2

!

interface Tunnel1

description Predefined Static LSP Tunnel - LSP1

ip unnumbered Loopback0

tunnel destination 10.10.10.103

tunnel mode mpls traffic-eng

tunnel mpls traffic-eng autoroute announce

tunnel mpls traffic-eng priority 2 2

tunnel mpls traffic-eng bandwidth 100

tunnel mpls traffic-eng path-option 1 explicit name STAT-LSP1

!

interface Ethernet2/0

no ip address

shutdown

half-duplex

!

interface Serial3/0

no ip address

shutdown

serial restart-delay 0

!

interface Serial3/1

ip address 10.10.10.1 255.255.255.252

mpls traffic-eng tunnels

tag-switching ip

serial restart-delay 0

ip rsvp bandwidth 1000 1000

!

interface Serial3/2

ip address 10.10.10.9 255.255.255.252

mpls traffic-eng tunnels

tag-switching ip

serial restart-delay 0

ip rsvp bandwidth 1000 1000

!

interface Serial3/3

ip address 10.10.10.17 255.255.255.252

mpls traffic-eng tunnels

tag-switching ip

serial restart-delay 0

ip rsvp bandwidth 1000 1000

!

router ospf 1

mpls traffic-eng router-id Loopback0

mpls traffic-eng area 0

log-adjacency-changes

network 10.0.0.0 0.255.255.255 area 0

!

ip http server

ip classless

!

!

ip explicit-path name STAT-LSP1 enable

next-address 10.10.10.10

next-address 10.10.10.14

next-address 10.10.10.103

!

ip explicit-path name STAT-LSP2 enable

next-address 10.10.10.18

next-address 10.10.10.22

next-address 10.10.10.103

!

!

!

!

!

!

!

!

!

line con 0

exec-timeout 0 0

password ericsson

logging synchronous

login

line aux 0

line vty 0 4

exec-timeout 0 0

password ericsson

logging synchronous

login

!

!

!

end

PE1-AS1#

PE2-AS1#sh run

Building configuration...

Current configuration : 2376 bytes

!

version 12.3

service timestamps debug datetime msec

service timestamps log datetime msec

no service password-encryption

!

hostname PE2-AS1

!

boot-start-marker

boot-end-marker

!

enable secret 5 $1$CPjI$MuQheEOwaWQlQZwgyaJG9.

!

no aaa new-model

ip subnet-zero

!

!

no ip domain lookup

!

ip cef

mpls label protocol ldp

mpls traffic-eng tunnels

tag-switching tdp router-id Loopback0

!

!

!

!

!

!

!

!

!

!

!

!

!

!

!

interface Loopback0

ip address 10.10.10.103 255.255.255.255

!

interface Tunnel0

description Predefined Static LSP Tunnel - LSP2

ip unnumbered Loopback0

tunnel destination 10.10.10.101

tunnel mode mpls traffic-eng

tunnel mpls traffic-eng autoroute announce

tunnel mpls traffic-eng priority 1 1

tunnel mpls traffic-eng bandwidth 100

tunnel mpls traffic-eng path-option 1 explicit name STAT-LSP2

!

interface Tunnel1

description Predefined Static LSP Tunnel - LSP1

ip unnumbered Loopback0

tunnel destination 10.10.10.101

tunnel mode mpls traffic-eng

tunnel mpls traffic-eng autoroute announce

tunnel mpls traffic-eng priority 2 2

tunnel mpls traffic-eng bandwidth 100

tunnel mpls traffic-eng path-option 1 explicit name STAT-LSP1

!

interface Ethernet2/0

no ip address

shutdown

half-duplex

!

interface Serial3/0

ip address 10.10.10.6 255.255.255.252

mpls traffic-eng tunnels

tag-switching ip

serial restart-delay 0

ip rsvp bandwidth 1000 1000

!

interface Serial3/1

no ip address

shutdown

serial restart-delay 0

!

interface Serial3/2

ip address 10.10.10.14 255.255.255.252

mpls traffic-eng tunnels

tag-switching ip

serial restart-delay 0

ip rsvp bandwidth 1000 1000

!

interface Serial3/3

ip address 10.10.10.22 255.255.255.252

mpls traffic-eng tunnels

tag-switching ip

serial restart-delay 0

ip rsvp bandwidth 1000 1000

!

router ospf 1

mpls traffic-eng router-id Loopback0

mpls traffic-eng area 0

log-adjacency-changes

network 10.0.0.0 0.255.255.255 area 0

!

ip http server

ip classless

!

!

ip explicit-path name STAT-LSP1 enable

next-address 10.10.10.13

next-address 10.10.10.9

next-address 10.10.10.101

!

ip explicit-path name STAT-LSP2 enable

next-address 10.10.10.21

next-address 10.10.10.17

next-address 10.10.10.101

!

!

!

!

!

!

!

!

!

line con 0

exec-timeout 0 0

password ericsson

logging synchronous

login

line aux 0

line vty 0 4

exec-timeout 0 0

password ericsson

logging synchronous

login

!

!

!

end

PE2-AS1#

P1-AS1#sh run

Building configuration...

Current configuration : 1445 bytes

!

version 12.3

service timestamps debug datetime msec

service timestamps log datetime msec

no service password-encryption

!

hostname P1-AS1

!

boot-start-marker

boot-end-marker

!

enable secret 5 $1$KPXK$5Wwl4E3lbYdYb6ZgyLUrk1

!

no aaa new-model

ip subnet-zero

!

!

no ip domain lookup

!

ip cef

mpls label protocol ldp

mpls traffic-eng tunnels

tag-switching tdp router-id Loopback0

!

!

!

!

!

!

!

!

!

!

!

!

!

!

!

interface Loopback0

ip address 10.10.10.102 255.255.255.255

!

interface Ethernet2/0

no ip address

shutdown

half-duplex

!

interface Serial3/0

ip address 10.10.10.2 255.255.255.252

mpls traffic-eng tunnels

tag-switching ip

serial restart-delay 0

ip rsvp bandwidth 1000 1000

!

interface Serial3/1

ip address 10.10.10.5 255.255.255.252

mpls traffic-eng tunnels

tag-switching ip

serial restart-delay 0

ip rsvp bandwidth 1000 1000

!

interface Serial3/2

ip address 10.10.10.26 255.255.255.252

mpls traffic-eng tunnels

tag-switching ip

serial restart-delay 0

ip rsvp bandwidth 1000 1000

!

interface Serial3/3

no ip address

shutdown

serial restart-delay 0

!

router ospf 1

mpls traffic-eng router-id Loopback0

mpls traffic-eng area 0

log-adjacency-changes

network 10.0.0.0 0.255.255.255 area 0

!

ip http server

ip classless

!

!

!

!

!

!

!

!

!

!

line con 0

exec-timeout 0 0

password ericsson

logging synchronous

login

line aux 0

line vty 0 4

exec-timeout 0 0

password ericsson

logging synchronous

login

!

!

!

end

P1-AS1#

P2-AS1#sh run

Building configuration...

Current configuration : 1354 bytes

!

version 12.3

service timestamps debug datetime msec

service timestamps log datetime msec

no service password-encryption

!

hostname P2-AS1

!

boot-start-marker

boot-end-marker

!

enable secret 5 $1$eHBC$Z7DUz/97BwQXB8xVQXNmO.

!

no aaa new-model

ip subnet-zero

!

!

!

ip cef

mpls label protocol ldp

mpls traffic-eng tunnels

tag-switching tdp router-id Loopback0

!

!

!

!

!

!

!

!

!

!

!

!

!

!

!

interface Loopback0

ip address 10.10.10.104 255.255.255.255

!

interface Ethernet2/0

no ip address

shutdown

half-duplex

!

interface Serial3/0

ip address 10.10.10.10 255.255.255.252

mpls traffic-eng tunnels

tag-switching ip

serial restart-delay 0

no fair-queue

ip rsvp bandwidth 1000 1000

!

interface Serial3/1

no ip address

shutdown

serial restart-delay 0

!

interface Serial3/2

ip address 10.10.10.13 255.255.255.252

mpls traffic-eng tunnels

tag-switching ip

serial restart-delay 0

ip rsvp bandwidth 1000 1000

!

interface Serial3/3

no ip address

shutdown

serial restart-delay 0

!

router ospf 1

mpls traffic-eng router-id Loopback0

mpls traffic-eng area 0

log-adjacency-changes

network 10.0.0.0 0.255.255.255 area 0

!

ip http server

ip classless

!

!

!

!

!

!

!

!

!

!

line con 0

exec-timeout 0 0

password ericsson

logging synchronous

login

line aux 0

line vty 0 4

exec-timeout 0 0

password ericsson

logging synchronous

login

!

!

!

end

P2-AS1#

P3-AS1#sh run

Building configuration...

Current configuration : 1384 bytes

!

version 12.3

service timestamps debug datetime msec

service timestamps log datetime msec

no service password-encryption

!

hostname P3-AS1

!

boot-start-marker

boot-end-marker

!

enable secret 5 $1$ZjKs$1b1p3mcUcvIPHks8sYpOQ0

!

no aaa new-model

ip subnet-zero

!

!

!

ip cef

mpls label protocol ldp

mpls traffic-eng tunnels

tag-switching tdp router-id Loopback0

!

!

!

!

!

!

!

!

!

!

!

!

!

!

!

interface Loopback0

ip address 10.10.10.106 255.255.255.255

!

interface Ethernet2/0

no ip address

shutdown

half-duplex

!

interface Serial3/0

ip address 10.10.10.18 255.255.255.252

mpls traffic-eng tunnels

tag-switching ip

serial restart-delay 0

no fair-queue

ip rsvp bandwidth 1000 1000

!

interface Serial3/1

ip address 10.10.10.25 255.255.255.252

mpls traffic-eng tunnels

tag-switching ip

serial restart-delay 0

ip rsvp bandwidth 1000 1000

!

interface Serial3/2

ip address 10.10.10.21 255.255.255.252

mpls traffic-eng tunnels

tag-switching ip

serial restart-delay 0

ip rsvp bandwidth 1000 1000

!

interface Serial3/3

no ip address

shutdown

serial restart-delay 0

!

router ospf 1

mpls traffic-eng router-id Loopback0

mpls traffic-eng area 0

log-adjacency-changes

network 10.0.0.0 0.255.255.255 area 0

!

ip http server

ip classless

!

!

!

!

!

!

!

!

!

!

line con 0

exec-timeout 0 0

password ericsson

logging synchronous

login

line aux 0

line vty 0 4

login

!

!

!

end

P3-AS1#
