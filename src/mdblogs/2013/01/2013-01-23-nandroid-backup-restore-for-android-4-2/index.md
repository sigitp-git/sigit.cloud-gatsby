---
title: "Nandroid Backup & Restore for Android 4.2"
date: "2013-01-23"
---

I am using CWM 6 recovery, lets jump to the points:

1. To do Nandroid backup, simply restart into recovery mode (CMW recovery should be installed first). Go to backup & restore and then press backup, wait for about 15 minutes to finish the backup
2. Backup location **is not /sdcard/clockworkmod/backup**. In Android 4.2 it is **/mnt/shell/emulated/clockworkmod**
3. To copy your backups to your computer you can copy **/mnt/shell/emulated/clockworkmod** into **/sdcard/** location first, connect your phone to your computer and transfer those files into you computer. Or we can do it using ADB Pull (if you familiar with ADB), so no need to copy /mnt/shell/emulated/clockworkmod into /sdcard/ location. Here is ADB Pull command: **C:\\Android> adb pull "/mnt/shell/emulated/clockworkmod" "C:\\NANDROIDBAK"**
4. Both blobs and backup folders are needed. **Do not rename/delete folders/files within these two folders.** So you have to transfer both folders to your computer if you want to backup. I also upload both folders into my dropbox account just to be save.
5. To delete unwanted nandroid backup, use **root** file manager and delete the unwanted backup under **/mnt/shell/emulated/clockworkmod/backup/**, for example delete **/mnt/shell/emulated/clockworkmod/backup/2013-01-23.18.07.44**. Don't touch blobs files folders using file manager. **After you delete unwanted backup above, restart into recovery, go into backup & restore, choose "free unused backup data"** and you are done.
6. Blobs contains the real backup that is why blobs folder has huge size. Backup folder contains references to blobs files and it has smaller size. Related with point 5, when you delete backup using root file manager, you just delete the unwanted backup references files and its boot image. But backup blobs still present in blobs folder. Then when you do "free unused backup data" from CWM recovery, you are cleaning up unused blobs referenced by your deleted backup.
