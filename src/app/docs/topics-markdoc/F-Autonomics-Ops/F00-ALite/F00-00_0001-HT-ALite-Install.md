# Automata Lite (ALite) Installation Guide

## Introduction

Automata Lite, also called, ALite, is a software agent. It connects devices behind firewalls and client infrastructure. The agent communicates with Autonomics using the Integrated Services Client. With executions triggered by Autonomics.

## What You'll Learn

In this topic, you'll learn about:

* [Prerequisites for installing Automata Lite (ALite)](#ALitePreReqs).
* [Extracting Automata Lite (ALite) files](#ExtractALite).
* [Installing Automata Lite (ALite) software](#InstallALite).
* [Running Automata Lite (ALite) in Docker](#DockerAlite).
* [Configuring the application.properties file](#ConfigALite).
* [Starting the Execution service](#StartALite).
* [Additional configurations for Automata Lite (ALite)](#AddtlConfigALite).
* [Common mistakes using Automata Lite (ALite)](#CommonALiteMistakes).
* [Common systemd commands to use with Automata Lite (ALite)](#CommonCommands).
* [Upgrading Automata Lite (ALite) software](#UpgradeALite).


## Prerequisites {% #ALitePreReqs %}

* Install and upgrade as `root` user. This is only for installations, upgrades, and `systemctl` commands. If the root user is unavailable, use an unprivileged account with `sudo` permissions. Then download and extract files.

* Confirm `noexec` isn't set for the folder where you install and upgrade, for example, the /tmp folder.

* Make an exception for SSL-Interception if traffic goes through a proxy server. Proxying may not work if you do not make an exception for SSL-Interception.

The recommended host sizing for Automata Lite includes CPUs, RAM, and disk space. You'll need enough capacity to ensure smooth operation. That depends on your intended workload and usage patterns.

* Utilize a system with a minimum of 2 CPUs.
* Allocate a minimum of 4GB RAM. Take into account future growth by assessing the memory requirements based on the number and complexity of automations, as well as their resource consumption patterns.
* Typically, each ALite can manage up to 200 concurrent automations.
* For a host with 4GB memory, allocate 1GB to Java Heap size, limiting each automation to approximately 5MB of processing memory.
* If automations require more memory, adjust the number of concurrent automations or increase the host memory accordingly.
Reserve at least 10GB of disk space for logs.



## Extract Automata Lite (ALite) {% #ExtractALite %}

You can extract then install Automata Lite as either a root user or a privileged user with sudo permissions. Use unprivileged access only in cases where the root user account is unavailable. The root user process is the default and standard for upgrades.

First, download automata lite from Amelia's artifactory at https://artifactory.amelia.com/ui/native/amelia-midservers/. Select a file in this format, where `<platform-version-number>` is the same as your platform version.

`automata-lite-installer-<platform-version-number>`

**Automata Lite Versions**

AIops is backwards compatible with older Automata Lite versions, meaning newer versions of AIops can work with older versions of ALite, but newer versions of ALite are not guaranteed to work with older platforms. Recommended to keep ALite on the same version as the platform to make usage of new features and fixes.

**Java Upgrade now Part of this Process**

The automata-lite installed amazon-corretto java version will automatically be upgraded, as part of running the ./automata-lite-upgrade.sh script.


### Extract with root User Account

On the target host, download and save the installer file in its own directory. Then use a CLI tool to change to the automata-lite-installer directory, modify permissions, and run the installer file. The auto-extracting installer script will produce output like the example below.

<chapter title="Extract Automata Lite Installer as root" collapsible="true" level="5">

>The asterisk (*) in the file name is the version and date number pattern included in the file name. For example, -vx.x.x-yyyymmdd.{style="note"}

<code-block lang="Bash">
$: cd automata-lite-installer/
$: chmod 700 ./automata-lite-installer-*.run
$: ./automata-lite-installer-*.run
</code-block>

</chapter>

<chapter title="Sample Output from Extraction Script" collapsible="true" level="5">

<code-block lang="Bash">
Creating directory automata-lite-install
Verifying archive integrity... 100% All good.
Uncompressing automata lite Installer please stand by 100%
Checking if root is running this automata-lite installation script
Unpacking the installation script successful, print out usage instructions

Usage instructions:

USAGE: automata-lite-install.sh [-u <user> -d <directory> -j <java directory>]

-u <username> user you want to run as

-d <existing directory> directory under which to install ipautomata-executioner-service

-j <java directory> directory under which to install the supplied java, packaged with this installer

-h | -? print usage and exit

./README.txt has a textual description of this process

Now, cd to automata-lite-install directory and run ./automata-lite-install.sh as above
</code-block>

</chapter>



### Extract with Unprivileged Account and sudo

In some situations, the root user account is not available for security reasons. A user with sudo permissions can download and extract the Automata Lite files.

First, download and extract the .run file as a non-privileged user.

<chapter title="Extract Automata Lite Installer as Unprivileged and sudo" collapsible="true" level="5">

>The asterisk (*) in the file name is the version and date number pattern included in the file name. For example, -vx.x.x-yyyymmdd.{style="note"}

<code-block lang="Bash">
$ bash ./automata-lite-installer-*.run
Creating directory automata-lite-install
Verifying archive integrity...  100%   All good.
Uncompressing automata lite Installer please stand by   100%
Checking if root is running this automata-lite installation script
You must be user root to run this installer
exiting
</code-block>

</chapter>


<chapter title="Display Help Usage Output" collapsible="true" level="5">

The only missing output is the usage screen. You can display it with the -h flag option.

<code-block lang="Bash">
$: sudo ./automata-lite-install.sh -h

USAGE: automata-lite-install.sh [-u <user> -d <directory> -j <java directory>]

-u <username> user you want to run as

-d <directory> directory under which to install ipautomata-executioner-service

-j <existing java directory> directory under which to install the supplied java, packaged with this installer

-h | -? print usage and exit

./README.txt has a textual description of this process
</code-block>

</chapter>


<chapter title="Run Install Script Again with sudo" collapsible="true" level="5">

Now run the `automata-lite-install.sh` file again with `sudo` permissions. The script asks you to the user to run the ipautomata executioner service. Then asks you to define the location to install the service and the location to install java. With that data, the install script executes. It generates output like the example below.

<code-block lang="Bash">
$: sudo ./automata-lite-install.sh

Choose a user you would like to run the ipautomata executioner service
If this user does not exist, it will be created now (required): automata

Choose an existing directory under which the ipautomata-executioner-service
will be installed (required): /apps/automata

Enter directory under which to install our supplied java packaged with this installer (required) /apps/java

You specified user automata, directory /apps/automata, java directory as /apps/java
Creating group automata if this group does not already exist
Done

Creating user automata if this user does not already exist
Done

Directory /apps/automata does not exist, creating it
Changing owner of /apps/automata to automata
Changing permission of /apps/automata to 0755
Current permissions on /apps/automata
drwxr-xr-x. 2 automata root 6 May 18 21:31 /apps/automata
User root has permissions on /apps/automata, continuing

Changing owner of ipautomata-executioner-service.tar.gz to automata, so automata can access it
Now extracting the ipautomata-lite ipautomata-executioner-service.tar.gz under /apps/automata
Changing contents of /apps/automata to automata
Adding execution bit to /apps/automata/ipautomata-executioner-service/ipautomata-executioner-service-standalone.jar

Now extracting our supplied java amazon-corretto-11.0.15.9.1-linux-x64.tar.gz under /apps/java
Setting java parent directory 755, it must be executable

Adding systemd service ipautomata-executioner-service.service into /etc/systemd/system/ipautomata-executioner-service.service
Creating user-configurable parameters in /etc/sysconfig/alite
Reloading systemd daemons via systemctl daemon-reload
Enabling ipautomata-lite service via
/bin/systemctl enable ipautomata-executioner-service
NOTE - if you receive an error here, something is wrong with your systemd and/or the unit file, please review the error
Created symlink /etc/systemd/system/multi-user.target.wants/ipautomata-executioner-service.service → /etc/systemd/system/ipautomata-executioner-service.service.

systemd-delta --type=extended data shows this; useful for debugging
[EXTENDED]   /usr/lib/systemd/system/systemd-udev-trigger.service → /usr/lib/systemd/system/systemd-udev-trigger.service.d/systemd-udev-trigger-no-reload.conf

1 overridden configuration files found.

Since /apps/automata/ipautomata-executioner-service/application.properties does not exist,
creating this for you from a template.  CONFIGURE the appropriate values before starting

After you make the appropriate changes, start up the service via
systemctl start ipautomata-executioner-service
and then check the status via
systemctl status -l ipautomata-executioner-service

$ systemctl status -l ipautomata-executioner-service
● ipautomata-executioner-service.service - IPautomata Lite Execution Service
Loaded: loaded (/etc/systemd/system/ipautomata-executioner-service.service; enabled; vendor preset: disabled)
Active: inactive (dead)

$ sudo systemctl start ipautomata-executioner-service
[theuser@node1 automata-lite-install]$ systemctl status -l ipautomata-executioner-service
● ipautomata-executioner-service.service - IPautomata Lite Execution Service
Loaded: loaded (/etc/systemd/system/ipautomata-executioner-service.service; enabled; vendor preset: disabled)
Active: active (running) since Thu 2023-05-18 21:32:03 UTC; 3s ago
Main PID: 63869 (java)
Tasks: 37 (limit: 823128)
Memory: 802.2M
CGroup: /system.slice/ipautomata-executioner-service.service
└─63869 /apps/java/amazon-corretto-11.0.15.9.1-linux-x64/bin/java -XX:-UsePerfData -Djava.io.tmpdir=/apps/automata/ipautomata-executioner-service/v>
[
</code-block>

</chapter>


<chapter title="Use ls -l Command as Unprivileged User and sudo" collapsible="true" level="5">

Use the `ls -l` command as the unprivileged user in install directory. This displays file names in the directory with their user accounts and permissions.

<code-block lang="Bash">
-rw-------. 1 theuser  theuser 194210104 May 11 15:01 amazon-corretto-11.0.15.9.1-linux-x64.tar.gz
-rw-------. 1 theuser  theuser 118055557 May 11 15:01 amazon-corretto-8.342.07.4-linux-x64.tar.gz
-rwx------. 1 theuser  theuser     10030 May 11 15:01 automata-lite-install.sh
-rwx------. 1 theuser  theuser      2944 May 11 15:01 automata-lite-java-update.sh
-rwx------. 1 theuser  theuser      3431 May 11 15:01 automata-lite-upgrade.sh
-rw-------. 1 theuser  theuser       330 May 11 15:01 env-vars
-rw-------. 1 theuser  theuser       346 May 11 15:01 env-vars.template
-rw-------. 1 theuser  theuser       683 May 11 15:01 exclude-v3
-rwx------. 1 theuser  theuser       536 May 11 15:01 INSTALLER
drwx------. 2 theuser  theuser        54 May 11 15:01 ipautomata-executioner-service
-rw-------. 1 automata theuser 117684593 May 11 15:01 ipautomata-executioner-service.tar.gz
-rw-------. 1 theuser  theuser      2365 May 11 15:01 README.txt
</code-block>

Because Java is a typical system-wide application, it is proper for it to be owned by `root:root`. Automata Lite gets user/group as the user specified as part of the installation. The installation process configures /apps/java as a Java target. It also configures /apps/automata as an Automata Lite target.

<code-block lang="Bash">
# ls -l /apps/java
drwxr-xr-x. 9 root root 4096 Apr 15  2022 amazon-corretto-11.0.15.9.1-linux-x64
# ls -l /apps/automata/
drwx------. 3 automata automata 170 May 18 21:32 ipautomata-executioner-service
</code-block>


</chapter>



## Install Automata Lite (ALite) {% #InstallALite %}

If needed, change directory to the **automata-lite-install** folder. Then execute the **automata-lite-install.sh** file using the appropriate command flags.

*Install Command Flags*

| Flag | Description                                                                                                                                                                                                                                |
|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| -u   | The user `ipsoft` is the user running the integration service. The user can be anything. If the user does not exist, this install script will create it.                                                                                   |
| -d   | The directory `/apps/automata-lite` is the directory where automata lite is installed. This can be any directory, though IPsoft suggests this be a new or unused directory. If this directory does not exist, this install will create it. |
| -j   | The target directory under which the installer-supplied Java gets installed.                                                                                                                                                                                                                                          |


<chapter title="Install Commands" collapsible="true" level="5">

<code-block lang="Bash">
cd automata-lite-install/
./automata-lite-install.sh -u ipsoft -d /apps/automata-lite -j /apps
</code-block>

</chapter>


<chapter title="Install Commands Sample Output" collapsible="true" level="5">

The install commands generate output similar to this example.

<code-block lang="Java">
You specified user ipsoft, directory /apps/automata-lite, java directory as /apps
Creating group ipsoft if this group does not already exist
Done

Creating user ipsoft if this user does not already exist
Done

Directory /apps/automata-lite does not exist, creating it
Changing owner of /apps/automata-lite to ipsoft
Changing permission of /apps/automata-lite to 0755
Current permissions on /apps/automata-lite
drwxr-xr-x. 2 ipsoft root 6 Nov 5 22:50 /apps/automata-lite
User root has permissions on /apps/automata-lite, continuing

Changing owner of ipautomata-executioner-service.tar.gz to ipsoft, so ipsoft can access it
Now extracting the ipautomata-lite ipautomata-executioner-service.tar.gz under /apps/automata-lite
Changing contents of /apps/automata-lite to ipsoft
Adding execution bit to /apps/automata-lite/ipautomata-executioner-service.jar

Now extracting our supplied java amazon-corretto-8-x64-linux-jdk.tar.gz under /apps
Setting java parent directory 755, it must be executable

Adding systemd service ipautomata-executioner-service.service into /etc/systemd/system/ipautomata-executioner-service.service
Reloading systemd daemons via systemctl daemon-reload
Enabling ipautomata-lite service via
/bin/systemctl enable ipautomata-executioner-service

Now, MUST copy /apps/automata-lite/ipautomata-executioner-service/override-application.properties.template to
/apps/automata-lite/ipautomata-executioner-service/application.properties as user ipsoft and see the appropriate values
and be sure to /usr/bin/chown ipsoft /apps/automata-lite/ipautomata-executioner-service/application.properties

After you make the appropriate changes, start up the service via
systemctl start ipautomata-executioner-service
and then check the status via
systemctl status -l ipautomata-executioner-service

ipautomata-executioner-service is enabled in systemd, it will start manually on host restart
</code-block>


</chapter>


## Run Automata Lite (ALite) in Docker {% #DockerAlite %}

Once ALite is installed, you can run it in a Docker container. You'll need to set several settings.

1. Set the host and port of the platform instance.

    <code-block lang="Bash">
    remote.endpoint.host
    remote.endpoint.port
    </code-block>

2. For API key authentication, set the `remote.endpoint.apiKey` value. You can locate the value(s) in IPdeploy within the client(s) designated for the utilization of ALite.

    <code-block lang="Bash">
    remote.endpoint.apiKey
    </code-block>

3. Set the ALite execution group name.

    <code-block lang="Bash">
    remote.endpoint.executiongroup
    </code-block>

4. You can run ALite in Docker by setting configuration values through environment variables. Below is an example to run an ALite image tagged 2.14.2. Update it as needed.

    Adjust the image path if it's downloaded locally or into a different repository.

    <code-block lang="Bash">
    docker run \
    --env remote.endpoint.host=somehost.amelia.com \
    --env remote.endpoint.port=443 \
    --env remote.endpoint.apiKey=2Qvqf3Nkirr2KripaNRSsdv3w_hdGqrCpGNGmo5u-6vfqA-ynG8grplM_ep1p-bZ \
    --env remote.endpoint.executiongroup=alite1 \
    artifactory.amelia.com/amelia-aiops/ipautomata-lite:2.14.2
    </code-block>

   Or you can add the configuration to an application.properties file and call it with a command. In this example, the ALite image is tagged as 2.14.2. Update it as needed.

    <code-block lang="Bash">
    docker run --env-file ./application.properties artifactory.amelia.com/amelia-aiops/ipautomata-lite:2.14.2
    </code-block>



## Configure the application.properties File {% #ConfigALite %}

Once you install the software, configure the application.properties file. Configure it for a specific instance host, port, username, and password. You also can configure execution groups and proxy settings. When you've completed the file configuration, start the execution service.

### Instance Settings

Copy the application.properties file then edit configuration settings in the file. Use a CLI tool to copy the file and the vi editor.

<code-block lang="Bash">
cp /apps/automata-lite/ipautomata-executioner-service/override-application.properties.template /apps/automata-lite/ipautomata-executioner-service/application.properties
vi /apps/automata-lite/ipautomata-executioner-service/application.properties
</code-block>

Update the host, port, username, and password values in the application.properties file.

<code-block lang="Bash">
remote.endpoint.host=&lt;FQDN of your Amelia-supplied Autonomics instance, or your local one, without https:// &gt;
remote.endpoint.port=443 # Do not change, this port uses https
remote.endpoint.username=&lt;Amelia-supplied username for automata lite&gt;
remote.endpoint.password=&lt;Amelia-supplied password for automata lite&gt;
</code-block>


### Execution Groups

The Automata designer should create an automaton variable with the name execution_group. The value should be the same as in the application.properties file. Execution groups route automata executions to specific ALite instances. See the Configure Automatons to Run on IPautomata Lite section below for more details.

<code-block lang="Bash">
remote.endpoint.execution_group=&lt;Value of automata variable with name execution_group&gt;
</code-block>


### Proxy Servers

If you route executions through a proxy server, uncomment out these properties. Then provide valid values for all these settings.

<code-block lang="Bash">
#remote.endpoint.proxy-host=
#remote.endpoint.proxy-port=
#remote.endpoint.proxy-username=
#remote.endpoint.proxy-password=
</code-block>


### Webhook Proxy Support for Events and Metrics

With the Autonomics 3.13.0 release, ALite instances can work as an integration Webhook proxy. The platform has exposure to webhook endpoints for Events and Performance Metrics. In some cases, compliance, security, or network constraints prevents access. This webhook support ensures secure transmission without compromising internal policies. This broadens the automation fabric in tightly controlled environments.

To use this webhook, configure several properties.

The webhook server listens on port 8443.

<code-block lang="Bash">
server.port=8443
</code-block>

By default, https access is enabled. You can disable it by changing this property.

<code-block lang="Bash">
server.ssl.enabled=true
</code-block>

Also, by default localhost uses a self-signed certificate. We recommended using a proper certificate instead. Here are the list of corresponding properties to set.

<code-block lang="Bash">
server.ssl.key-store=/full/path/to/file
server.ssl.key-store-password=
server.ssl.key-alias=
server.ssl.key-store-type=
</code-block>



## Start ALite Executioner Service {% #StartALite %}

Once you configure the application.properties file, save the updated file. Then exit the editor.

Use the chown command to change ownership of the application.properties file.

<code-block lang="Bash">
chown &lt;user&gt; /apps/automata-lite/ipautomata-executioner-service/application.properties # if you edited the file as root
</code-block>

Next, start up the ipautomata-executioner service with the systemctl start command.

<code-block lang="Bash">
systemctl start ipautomata-executioner-service.service
</code-block>

Finally, use the journalctl command to check system logs and confirm the service is running. For RHEL-based instances, run these commands.

<code-block lang="Bash">
journalctl -u ipautomata-executioner-service -o cat -f
</code-block>



## Additional Configurations {% #AddtlConfigALite %}

You can configure additional features. For example, the log file location and failover.

<chapter title="Change the Log File Location" collapsible="true" level="5">

If needed, you can write logs to a file location other than in /tmp. Uncomment these two lines in /etc/systemd/system/ipautomata-executioner-service.service. 

Note that you will need to handle file rotation differently. Also, earlier ALite versions may not have these lines. If not, add them, uncommented, before the line Environment=JAVA_HOME=.

<code-block lang="Bash">
#Environment=LOGBACK_ROOT_APPENDER_REF=FILE
#Environment=LOG_FILE=${DIRECTORY}/ipautomata-executioner-service/ipautomata.log
</code-block>

Once you edit the file, use the systemctl command to reload the modified file.

<code-block lang="Bash">
systemctl daemon-reload
</code-block>

Then restart ALite with this systemctl command.

<code-block lang="Bash">
systemctl restart ipautomata-executioner-service.service
</code-block>


</chapter>


<chapter title="Configure Failover" collapsible="true" level="5">

HA (high availability) is available with ALite. Install multiple automata and use the same application.properties files for each instance. The executioner that first connects to the platform runs all the executions. If the executioner fails, a standby executioner establishes a connection. It becomes the main connection through random selection.

</chapter>


<chapter title="Install Kerberos SSH" collapsible="true" level="5">

You can configure Kerberos SSH to work with Automata Lite.

1. Install Kerberos packages for your OS. Required commands are `kinit`, `klist`, and `kutil`.

2. Confirm the `krb5.config` file, in the `[libdefaults]` section. It has the `default_ccache_name` setting equal to `FILE:/tmp/krb5cc_%{uid}`

3. Update /`etc/ssh/ssh_config` to enable GSSAPIAuthentication.

    <code-block lang="Bash">
    Host *
         GSSAPIAuthentication yes
    </code-block>

4. Install the `kstart` daemon. It keeps the kerberos ticket cache active. Assuming the user principal is `rnd-aiops@TYRION.ME`, you start it with these steps.

    <code-block lang="Bash">
    # kinit principal
    [root@host:~]# kinit rnd-aiops@TYRION.ME
    Password for rnd-aiops@TYRION.ME:
    
    # klist, get the ticket cache location:
    [root@host:~]# klist
    Ticket cache: FILE:/tmp/krb5cc_0
    Default principal: rnd-aiops@TYRION.ME
    
    Valid starting       Expires              Service principal
    09/15/2022 17:58:00  09/16/2022 03:57:59  krbtgt/TYRION.ME@TYRION.ME
    renew until 09/22/2022 17:57:59

    # create keytab file, make sure /var/spool/keystabs/${username} directory exists
    [root@host:~]# ktutil
    ktutil:  addent -password -p rnd-aiops@TYRION.me -k 1 -e aes256-cts-hmac-sha1-96  # `klist -e` will list the current enctype
    Password for rnd-aiops@TYRION.me:
    ktutil:  wkt /var/spool/keytabs/rnd-aiops/keytab
    ktutil:  l
    slot KVNO Principal
    ---- ---- ---------------------------------------------------------------------
    1    1                          rnd-aiops@TYRION.me
    ktutil:  exit
    
    # start k5start daemon:
    [root@host:~]# k5start -u rnd-aiops@TYRION.ME -f /var/spool/keytabs/rnd-aiops/keytab -K 10 -o root -L -b -k /tmp/krb5cc_0 -p /var/run/KSTART-aiops.pid
    </code-block>

5. Confirm the alite user can access the ticket cache `file:/tmp/krb5cc_%{uid}`.

6. Finally, open the firewall.

    <code-block lang="Bash">
    Alite host -> ${Host_running_Kerberos_server}:88 (TCP and UDP)
    </code-block>
    
    If you run MIT or Heimdal Kerberos, use this command.
    
    <code-block lang="Bash">
    Alite host -> ${Host_running_Kerberos_server}:749 (TCP and UDP)
    </code-block>


</chapter>


<chapter title="CredSSP Support" collapsible="true" level="5">

CredSSP is supported when IPwinrm is installed on an Automata Lite host.

</chapter>


## Common Mistakes with Automata Lite (ALite) {% #CommonALiteMistakes %}

If the log displays these java log error messages:

<code-block lang="Bash">

register remote executioner with blank key, reconnecting in 5000 sec
register remote executioner with blank key, reconnecting in 5000 sec
io.grpc.StatusRuntimeException: INVALID_ARGUMENT: Can't register remote executioner with blank key
at io.grpc.Status.asRuntimeException(Status.java:533)
at io.grpc.stub.ClientCalls$StreamObserverToCallListenerAdapter.onClose(ClientCalls.java:449)
at io.grpc.internal.ClientCallImpl.closeObserver(ClientCallImpl.java:426)
</code-block>

the Configure the application.properties File section above might have been skipped, for example, defining the Amelia-supplied password in the application.properties file.

<code-block lang="Bash">
remote.endpoint.password=&lt;IPsoft-supplied password for automata lite&gt;
</code-block>



## Common systemd Commands {% #CommonCommands %}

These systemd commands can be used to control the automata execution service.

<code-block lang="Bash">
systemctl start ipautomata-executioner-service.service

systemctl stop ipautomata-executioner-service

journalctl -u ipautomata-executioner-service.service &lt;journalctl options&gt;
</code-block>

## Upgrade Automata Lite (ALite) {% #UpgradeALite %}

To upgrade an ALite instance, you'll retrieve the upgrade file then extract its files. These commands are useful during an upgrade.

* To abort the upgrade, type **Ctrl + C**.

* To run then complete the upgrade, press the **Enter** key.

<chapter title="Commands to Extract Files for an Upgrade" collapsible="true" level="5">

Follow the same process used to install an Automata Lite instance. Use `sudo` to run the automata-lite-upgrade.sh file.

<code-block lang="Bash">
$ sudo ./automata-lite-upgrade.sh
[sudo] password for theuser:

USAGE: automata-lite-upgrade.sh

There are no arguments; this upgrades the existing ipautomata-executioner-service
with a new .jar file, after making a copy of the current ipautomata-executioner-service
systemd unit file in this local directory, then
restarts ipautomata-executioner-service

This also upgrades your current java version, if necessary - only if using
our supplied amazon-corretto version

Note that the current jar file, whatver version, is saved locally
in this directory, each time this script is run

IF YOU HAVE MADE ANY LOCAL CHANGES TO THE JAR FILE, YOU WILL NEED TO REAPPLY THEM

Hit <enter> to continue, <control-C> to abort the upgrade
Installing now

MYDIR is /apps/automata/ipautomata-executioner-service, MYJAR is /apps/automata/ipautomata-executioner-service/ipautomata-executioner-service-standalone.jar, MYBASE is /apps/automata
</code-block>


</chapter>

<chapter title="Extract Files and Start an Upgrade" collapsible="true" level="5">

Download the latest installer and extract the .run file, as described above. Then run this command from the automata-lite-installer folder:

<code-block lang="Bash">
cd automata-lite-installer/
./automata-lite-upgrade.sh
</code-block>

The upgrade process displays output similar to this example.

<code-block lang="Bash">
USAGE: automata-lite-upgrade.sh

There are no arguments; this upgrades the existing ipautomata-executioner-service
with a new .jar file, after making a copy of the current ipautomata-executioner-service
systemd unit file in this local directory, then
restarts ipautomata-executioner-service

Note that the current jar file, whatver version, is saved locally
in this directory, each time this script is run

IF YOU HAVE MADE ANY LOCAL CHANGES TO THE JAR FILE, YOU WILL NEED TO REAPPLY THEM

Hit <enter> to continue, <control-C> to abort the upgrade
</code-block>


</chapter>

