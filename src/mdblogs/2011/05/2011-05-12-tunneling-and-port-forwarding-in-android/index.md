---
title: "Tunneling and Port Forwarding in Android"
date: "2011-05-12"
---

I believe several countries has quite strict policy on their internet access. Well, with a little trick, we can make a hole and goes straight through it. I have try to do this using Blackberry but I could not found nice free ssh client. But with Android, it is pretty easy. So let's get started.

What you need is:

1. Your Android phone (I use my [HTC Legend](http://www.htc.com/www/product/legend/overview.html "http://www.htc.com/www/product/legend/overview.html") with Android 2.2)
2. Install [ConnectBot](https://market.android.com/details?id=org.connectbot "https://market.android.com/details?id=org.connectbot") from your Android Market
3. Unix server in the internet with [Squid Proxy](http://www.squid-cache.org/ "http://www.squid-cache.org/") server (or any other cache server) installed \[I am using inet0.net\]

Alright, if all the tools are ready, first step is to create SSH Tunnel with Port Forwarding enabled. Basically we build SSH connection to the Unix server with [Squid Proxy](http://www.squid-cache.org/ "http://www.squid-cache.org/") running and then forward all HTTP traffic from our Android phone via this tunnel. So instead of going through standard HTTP port (8080), our browsing traffic goes via SSH port (22). Below is screen shot on how to do this using [ConnectBot](https://market.android.com/details?id=org.connectbot "https://market.android.com/details?id=org.connectbot").

![](https://sigitp.files.wordpress.com/2011/05/pesanggrahan-20110512-00012.jpg?w=225)

![](https://sigitp.files.wordpress.com/2011/05/pesanggrahan-20110512-00013.jpg?w=225)

And then, we have to edit the APN settings, specifically the proxy setting. We have to direct all HTTP traffic into this proxy. In this case we have to direct the traffic to localhost (127.0.0.1) port 8080. As we can see from the previous step, the 127.0.0.1:8080 address and port has been binded (port forwarded) into port 8080 in the Unix server. With this setting, the HTTP traffic will go to localhost and then via SSH tunnel goes to Unix server port 8080 which the [Squid Proxy](http://www.squid-cache.org/ "http://www.squid-cache.org/") running and listening to this port. Here's the screen capture.

![](https://sigitp.files.wordpress.com/2011/05/pesanggrahan-20110512-00014.jpg?w=225)

Finally, we can login into the Unix server using SSH:

![](https://sigitp.files.wordpress.com/2011/05/kebayoran-lama-20110512-00011.jpg?w=225)

![](https://sigitp.files.wordpress.com/2011/05/pesanggrahan-20110512-00015.jpg?w=225)

Then open your browser, try to visit restricted websites. I have try it and made it, but I will not capture my screen on this one ;) Hope it works on your Android too.
