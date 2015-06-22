# BLDZR
BootLoader Disc of Zenith Repair

A massive culmination of practically every freeware/open source tool I've ever used to diagnose or repair a computer (out of thousands) over the past 3 years. This repo includes another one of my projects "AutOptimizer" as well as a 100% customizeable GRUB splash screen and interchangeable, bootable isos.

Less than 200MB zipped, ~306MB unzipped since the Github revision doesn't include the Ubuntu.iso (the commit errors out likely since it's 700+MB). Including a live/persistant version of Ubuntu still keeps this bootloader disc under <1GB. Which will fit on any SD card these days with plenty of space. It will eventually be small enough to fit onto a CD since as-is, it includes several redundancies and the ability to fit on a CD is basically the standard for similar "all in one" repair discs.
<br><br>

<img src="https://raw.githubusercontent.com/BiTinerary/BLDZR/master/BLDZRimage.png">

At the moment it's still behind by several version (having trouble uploading alot of small files to github) however currently all you need to do is:

* Run a program like <a href="http://www.pendrivelinux.com/xboot-multiboot-iso-usb-creator/">Xboot</a> for it's ability to quickly format/partition a drive to boot Grub4Dos/Syslinux. We're essentially using it for a GRUB template.<br>
<br>
* There's no need to manually select Isos, since you can just drag drop them to the drive later on and most importantly Xboot is does a crappy job of it. Often errors out after waiting quite a bit of time for conversion/transfer of isos.
<br>
* Click "Create USB", select target USB, Grub4Dos radio button, Then execute. This should take <10 seconds to make USB bootable to GRUB
<br>
* From here just drag/drop the files in this repo to the jump drive (overwriting existing files) then add custom isos to the (possibly hidden) `.\images` directory.
<br>

I will be adding more directions later on that explain how to customize the custom background image of GRUB bootloader as well as modifying the `GRUB.cfg` for changing entries, color, dimensions, location, etc...

Will be expanded to include mkisofs command for converting bootable USB into bootable ISO w/ hidden files.

# Inspiration
<a href="http://www.hirensbootcd.org/">Hiren'sBoot CD</a> and my personal demand for a more uptodate, customizeable, organized, "simple" tool.

The name is a backronym inspired by my younger brothers nickname, Jozer "The Bulldozer". As well as the drive/idea of wanting to be able to hand anyone (11 year old at the time) a CD/JumpDrive/SDCard and effectively give them all the legitimate tools they need to be a "Computer Technician."

In addition, present these tools in a way that is as user friendly/intuitive as possible in order to counteract the massive "know how" and experience required for **accurate** diagnosis. Even though fixing an issue ultimately comes down to clicking some buttons in order and waiting. A monkey can do this, so why not everyone else with a broken computer? In a nutshell, this tool aims to help others get past the initial **tech anxiety** often associated with the "unknown" despite the fact that it all comes down to relatively simple steps.
