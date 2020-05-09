---
title: "Rooting HTC Desire + Flashing Gingerbread ROM with Sense 2.1/3.0"
date: "2011-05-23"
---

Just like the title said, in last the weekend I was trying to root my [HTC Desire](http://www.htc.com/www/product/desire/overview.html "HTC Desire") since I want to have [HTC Sensation](http://www.htc.com/www/product/sensation/overview.html "HTC Sensation") look and feel by using [Sense](http://www.htc.com/www/htcsense/index.html "HTC Sense") 3.0 UI. At the same time, I also want to have Gingerbread (Android 2.3) features. I am writing this post in case I need to re-do it again some day.

**HTC Sensation Sense 3.0 UI**

\[youtube=http://www.youtube.com/watch?v=COi4S1yoyO4\]

My [HTC Desire](http://www.htc.com/www/product/desire/overview.html "HTC Desire") initial specs:

- Unrooted
- HBOOT 93.0001
- Frozen Yoghurt (Android 2.2)
- HTC [Sense](http://www.htc.com/www/htcsense/index.html "HTC Sense") 2.0
- AMOLED screen (not SLCD)

So I searched on how-to and required files. Basically here's the source of my method and reference. Thanks to below sites that has guide me through overnight.

- XDA Developer: [http://forum.xda-developers.com/index.php](http://forum.xda-developers.com/index.php)
- Rooting: [http://unrevoked.com/](http://unrevoked.com/)
- ROM: [http://forum.xda-developers.com/showthread.php?t=1016940](http://forum.xda-developers.com/showthread.php?t=1016940) , [http://www.baadnwz.eu/](http://www.baadnwz.eu/)
- Damast546 Youtube [video](http://www.youtube.com/watch?v=lq0pkDiqv6o&feature=related "http://www.youtube.com/watch?v=lq0pkDiqv6o&feature=related") guide

**Step#1 Download Required Files to your PC**

Yes, this rooting and ROM flashing process requires you to have your PC ready with its internet connection. Here's the required files to download:

- **Unrevoked 3.21** (Latest Unrevoked available in the official site is version 3.32. I have try to use this latest version but it stuck on "**_Validation Error: Backup CID is missing_**" (CID: Carrier or Region ID) at the end of rooting process. I don't know what exactly becomes the problem, and I can not find others in the net that could solve this. But one of recommendation is to use older version of Unrevoked which is version 3.21, luckily it still can be found on the net. I attach it [here](http://inet0.net/~sigit/htcdesirerootflash/3.21%20-%20works%20great/reflash_package.exe "Unrevoked 3.2.1").
- **Android USB Driver** (for both HBOOT and ADB mode of your phone, modified by Unrevoked team). [Download](http://inet0.net/~sigit/htcdesirerootflash/android-usb-driver.zip "Android USB Driver (modified by unrevoked team)").
- **ROM with Gingerbread (Android 2.3) with Sense 2.1/3.0 UI**. I use the Insert Coin ROM _[InsertCoin\_GB\_Sense2.1\_A2SD+\_v30.zip](http://inet0.net/~sigit/htcdesirerootflash/InsertCoin_GB_Sense2.1_A2SD+_v30.zip "IC ROM GB Sense 2.1/3.0")_ with Apps2SD.

**Step#2 Installing and Preparing Downloaded Files**

Now after you got your files ready, its time to install the Unrevoked and USB Driver to your PC. While the ROM itself should be copied to your [HTC Desire](http://www.htc.com/www/product/desire/overview.html "HTC Desire") SD Card root folder (keep it in .zip format).

- **Install Unrevoked 3.21**. Well, its not actually installing the program. The downloaded program itself is executable, you can run it instantly (**_always right click and run as administrator if you are using Windows Vista_**).
- **Install USB Driver**. I am using Windows Vista and its complicated. When installing this driver, you will need your phone to be connected via USB cable to your PC. First, install it in HBOOT mode of your phone. Follow instruction on this [link](http://unrevoked.com/rootwiki/doku.php/public/windows_hboot_driver_install "HBOOT Android Driver Install"). _In my case, after I follow the steps on the [link](http://unrevoked.com/rootwiki/doku.php/public/windows_hboot_driver_install "HBOOT Android Driver Install"), when my phone is in HBOOT mode, the driver works well, but when my phone is in normal mode, the PC keeps searching for the driver (**Android ADB Driver not found**). If you have the same thing, do this: Open Control Panel, Open Device Manager, in Other Device you can find Android 1.0 and below it, there's Android ADB driver that could not be found. You just have to right click and update the driver, but not direct it to the downloaded driver as we do for HBOOT mode, select the "help windows find the driver", then you can find some drivers already there, select the Android Bootloader Driver_. _Test it by connecting your phone to your PC using USB cable, if the Windows find the driver and not searching it again, then it works._ 
- **Copying your ROM to your phone SD Card root folder**. Just connect your phone into your PC on Disk Drive mode and copy the **_InsertCoin\_GB\_Sense2.1\_A2SD+\_v30.zip_** (do not unzip) ROM into your SD Card root folder.

**Step#3 The Real Work: Rooting and Flashing**

- **Rooting**. In the phone **_Setting>Connect to PC_**, select **_Disk Drive_** mode as default (not charge only) and untick the **_Ask Me_** option. And in the phone **_Setting>Applications_**, tick the **_Unknown sources_** option, while in the phone **_Setting>Applications>Development_**, tick the **_USB Debungging_** option. Rooting itself is easy, simply connect your phone (in normal mode, not HBOOT mode) into your PC. Run the Unrevoked program and it will automatically install Unrevoked program into your phone and root it instantly. The process involves your phone rebooted automatically several times, so don't worry. Just pay attention to the Unrevoked log displayed in the program, when it says it's done, then it's done.
- **Flashing ROM**. Flashing ROM is also easy, after you copy the **_InsertCoin\_GB\_Sense2.1\_A2SD+\_v30.zip_** into your root folder of SD Card, you can choose the ROM in the recovery mode of HBOOT just after you finished rooting your phone. In the HBOOT mode you can use your volume button to choose options and power button to select your options. After you choose the ROM, the flashing process will be started, just keep monitor your phone screen for the logs. It will tell if it is finished.
- **After flashing finished**, choose reboot option in the HBOOT then you will have your [HTC Desire](http://www.htc.com/www/product/desire/overview.html "HTC Desire") running **Gingerbread with Sense 2.1/3.0 UI**, **fantastic!!!**

As visual aid, video below gives overall guide of the process, its just the ROM loaded is not the **_InsertCoin\_GB\_Sense2.1\_A2SD+\_v30.zip_**, but the main steps are the same ([download mp4](http://inet0.net/~sigit/htcdesirerootflash/how%20to%20get%20root%20Unrevoked%20and%20install%20custom%20ROM%20%5bwww.keepvid.com%5d.mp4 "Root and Flash Guide")).

**UPDATE MAY 23, 2011:** I have found another great ROM from RCMix: [RCMixS\_v1.6.2\_A2SD+\_BravoHboot.zip](http://inet0.net/~sigit/htcdesirerootflash/RCMixS_v1.6.2_A2SD+_BravoHboot.zip "http://inet0.net/~sigit/htcdesirerootflash/RCMixS_v1.6.2_A2SD+_BravoHboot.zip") try both if you want to compare. For me, I like RCMix better compared to Insert Coin, RCMix has working Google Talk 1.3 with video and voice call inside.

**UPDATE MAY 30, 2011:** I am now a big fan of RMixS ROM. Keep monitor his thread on [XDA Forum](http://forum.xda-developers.com/forumdisplay.php?f=628 "http://forum.xda-developers.com/forumdisplay.php?f=628"). I am now using RCMixS v1.8.

\[youtube=http://www.youtube.com/watch?v=lq0pkDiqv6o&feature=related\]
