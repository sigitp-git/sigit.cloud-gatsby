---
title: "Installing Open Day Light (ODL) SDN Controller"
date: "2014-01-14"
---

[Open Day Light](http://www.opendaylight.org/) is one of many SDN Controller available as open source project (Java based). The other SDN Controllers are: [NOX](http://www.noxrepo.org/) (C++ based), [POX](http://www.noxrepo.org/) (Python based), etc. This project has several big names as industry sponsor like [Ericsson](http://www.ericsson.com), [Cisco](http://www.cisco.com), [Juniper](http://www.juniper.net) and [IBM](http://www.ibm.com).

> OpenDaylight can be a core component within any SDN architecture. Building upon an open source SDN and NFV controller enables users to reduce operational complexity, extend the life of their existing infrastructure hardware and enable new services and capabilities only available with SDN. Whether your organization is an enterprise IT provider, a network service provider or a Cloud services provider, you can begin taking advantage of SDN and NFV using a community-driven, open source controller framework available today. [http://www.opendaylight.org/project/why-opendaylight](http://www.opendaylight.org/project/why-opendaylight) 

On your Ubuntu Mininet VM (see my previous posts), execute these commands to install it:

$ sudo apt-get update
$ sudo apt-get install maven git openjdk-7-jre openjdk-7-jdk
$ git clone http://git.opendaylight.org/gerrit/p/controller.git
$ cd controller/opendaylight/distribution/opendaylight/
$ mvn clean install
$ cd target/distribution.opendaylight-0.1.0-SNAPSHOT-osgipackage/opendaylight

Once done, the run.sh script can be found at:

~/controller/opendaylight/distribution/opendaylight/target/distribution.opendaylight-osgipackage/opendaylight

Before we run the ODL controller run.sh script, we have to make sure the JAVA\_HOME variable set correctly. Add this line to your .bashrc configuration (under home directory).

JAVA\_HOME=:/usr/lib/jvm/java-1.7.0-openjdk-amd64

Now execute the run.sh file

mininet@mininet-vm:~$ cd controller/opendaylight/distribution/opendaylight/target/distribution.opendaylight-osgipackage/opendaylight
mininet@mininet-vm:~/controller/opendaylight/distribution/opendaylight/target/distribution.opendaylight-osgipackage/opendaylight$ ls
configuration  lib  plugins  run.bat  run.sh  version.propertiesmininet@mininet-vm:~/controller/opendaylight/distribution/opendaylight/target/distribution.opendaylight-osgipackage/opendaylight$ ./run.sh

Once done, you will get this message:

2014-01-14 14:06:51.552 PST \[pool-24-thread-1\] INFO  o.o.c.m.s.c.i.service.TwoPhaseCommit - Transaction: BA-0 Finished successfully

And ODL controller GUI interface can be accessed via web browser: http://127.0.0.1:8080 as pictured below (username admin, password admin for default).

Reading materials:

1. [mininet.org](http://mininet.org)
2. [opennetworking.org](http://opennetworking.org)
3. [SDN with OpenFlow](https://play.google.com/store/books/details?id=GSC8AQAAQBAJ&source=productsearch&utm_source=HA_Desktop_US&utm_medium=SEM&utm_campaign=PLA&pcampaignid=MKTAD0930BO1)
4. [opendaylight.org](http://www.opendaylight.org/)
