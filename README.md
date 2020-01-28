# Automated joining of Yahoo Groups

### tl;dr - we (ArchiveTeam) need help to save as much of Yahoo Groups as possible.

Yahoo took off-line the archives of all Yahoo Groups on December 14, 2019. We archived many groups prior to this, but many still remain. Yahoo has extended the deadline for making Get My Data requests until January 31, 2020. After these requests are fulfilled, the data will be permanently deleted.

Get My Data is Yahoo's own tool for providing people backups of their groups, and provides a complete copy of the group's messages, files section, and links section. This is the only remaining way to get Yahoo Groups data.

This extension is a variation of the manual extension which fully automates the joining process, provided that you have set up a paid captcha solving service.

### We need volunteers to join as many groups as they can, then make Get My Data requests.

We’ve written a Chrome extension that links to a tracker to coordinate efforts.

See the instructions below on how to help.

## How Can I Help / Use This?

### Prerequisites, or 'Before You Begin'

1. You'll need a computer with Google Chrome installed and sufficient privileges to install "unpacked" Chrome extensions.
2. Make a [new Yahoo account](https://login.yahoo.com/account/create) to be used for the archiving. Don't put in any personal information as you'll be giving control of this account to Archive Team. Please avoid using temporary email providers for the email - we lost access to over 55,000 groups when Yahoo detected this and banned our accounts. GMail, Outlook, Mail.com, or Yahoo emails seem to work fine, or you can create a new Yahoo Mail when making the account (although this needs phone verification).
3. You now need to tell us the username and password for your account for help with tracking joined groups. Please submit it using [this google form](https://docs.google.com/forms/d/e/1FAIpQLSdh6wxiTbpmoMY-RIFXHPo3XV8gR8VqFS6tz4hhRcnpMR6esA/viewform?usp=sf_link)

### Setup and Installation

1. [Download the extension zip](https://github.com/lennier1/yahoogroups-joiner/archive/master.zip) file, and unzip somewhere.
2. In Chrome, go to the URL `chrome://extensions`.
3. In the top-right corner, enable *Developer Mode* using the toggle.
4. In the top-left corner, choose *Load Unpacked Extension*.
5. Choose the folder you extracted from the zip. (Don't select a file inside the folder, just the folder itself).
6. Sign up to a captcha solving service, for example anti-captcha.com and put some money on the account (anti-captcha.com costs $2 for every 1000 reCaptchas completed).
7. Download the service's Chrome extension--for example this one for anti-captcha.com: https://antcpt.com/eng/download/google-chrome-options.html
8. Load the unpacked extension.
9. If you use anti-captcha.com's extension, paste your anti-captcha account key into the extension and select 'Enable AntiCaptcha Plugin' and 'Auto submit FORM after solving'. Hit Save whenever you change the settings.

### Using the Extension

1. In Chrome's extension icons list in the top-right of the browser bar, click on the `Y`, ensure that the *Enabled* checkbox is ticked, then click *Start*.
2. A tab will be opened with a Yahoo Groups *search results* page. There should be a group highlighted with a red border. The extension will automatically start loading this group.
3. The first time you start it, Chrome may block the extension from opening a new tab. If this happens, click the icon indicating it was blocked on the right side of the address bar and select "Always allow redirects from groups.yahoo.com" or "Always allow pop-ups from groups.yahoo.com". Then, click the group hightlighted in red to restart the process.
4. After this, you should see the extension automatically click join, then the anti-captcha service should automatically recognize the captcha and start solving it. Once solved ,the extension automatically submits the join request nad moves onto a new group.
5. The extension attempts to detect any errors and retry. If it tries the same group a few times without success, it will give up and move onto a new one. If for some reason it gets stuck, try refreshing the page, or barring that, hitting Start again.
6. To stop, click the `Y` in the top-right of the browser bar and uncheck the *Enabled* checkbox. The extension will stop after completing the current group.
7. With both extensions running, groups will be joined automatically, at a rate of about one every two minutes. If you want it to be faster you can run multiple Chrome profiles (more info here: https://www.makeuseof.com/tag/chrome-multiple-google-accounts/)
8. Thus far, we haven't run into problems running many profiles at once using the same Yahoo account and IP address.
9. There is no known limit to how many groups you can join and download, but if you're joining several thousand groups, you may want to periodically make a GMD request and switch to a new account.

### Requesting Data
1. Yahoo has announced that you can send in a request to download your data up to 11:59 PM PT on January 31st, 2020.
2. The Verge has published detailed instructions on the process. It's not difficult, but may take two days or longer to complete. You can enter any e-mail address to be notified. https://www.theverge.com/2019/11/4/20917500/yahoo-group-data-download-how-to
3. The data will come back as links to one or more files up to 2GB in size. Download everything.
4. Send the unmodified .zip files to Archive Team in one of two ways.
4a. Upload the data using rsync:
rsync -avz  *.zip rsync://marked-rsync.ddns.net/ateam-airsync/yahoo-gmd/$USERNAME/
Replace $USERNAME with a username of your choice (for example your reddit/irc/yahoo/leaderboard username)
4b. Upload the data to an online file-hosting service (wetransfer, mega, gdrive or any other service), and send the link to archiveteamprivateyahoogroup@gmail.com

## Bugs, questions, etc...

If you need any help, pop onto the IRC channel #pythons-attack-y! (on EFnet). Note the exclamation point in the name. Webchat link: http://chat.efnet.org:9090/?channels=%23pythons-attack-y!
