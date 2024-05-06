
const questions2 = [
    {
        "question": "An organization has experienced several data breaches over the last five years. These data breaches have cost the organization financially and damaged its reputation. The organization has hired a cybersecurity penetration team to perform a full security audit on the entire organization. This independent contractor conducted the audit and found the following vulnerabilities: • Sixty percent of all organization passwords audited were cracked within 6 hours. • Stolen credentials were used to gain access to unauthorized network resources. • Phishing attacks were carried out to compromise user passwords. What can the organization do to mitigate all the defined risks?",
        "answers": [
            { "text": "implement MFA", "isCorrect": true },
            { "text": "change password complexity rules", "isCorrect": false },
            { "text": "institute a password reset for all accounts", "isCorrect": false },
            { "text": "change the minimum password length rules", "isCorrect": false }
        ]
    },
    {
        "question": "A cybersecurity analyst is testing a new vulnerability scanner on a system. The analyst chooses to run an intrusive credentialed scan. A few moments later, the system that was running the scan crashed. What is the most probable cause of the crash?",
        "answers": [
            { "text": "a false positive", "isCorrect": false },
            { "text": "the intrusive scan", "isCorrect": true },
            { "text": "a false negative", "isCorrect": false },
            { "text": "a hardware failure", "isCorrect": false }
        ]
    },
    {
        "question": "Why are honeypots positioned in the cloud?",
        "answers": [
            { "text": "to create DMZ zones within the cloud", "isCorrect": false },
            { "text": "to have a faster solution to gather information", "isCorrect": false },
            { "text": "to have easier access to the honeypots", "isCorrect": false },
            { "text": "to isolate the honeypots from production networks", "isCorrect": true }
        ]
    },
    {
        "question": "Why is it important to conduct server profiling on live networks?",
        "answers": [
            { "text": "to ensure that the various operating and usage parameters are the same for all servers on the network", "isCorrect": false },
            { "text": "to establish a security baseline for a given server", "isCorrect": true },
            { "text": "to create a server traffic profile to identify the potential for data loss", "isCorrect": false },
            { "text": "to detect network attacks on unstructured data using Big Data analytics techniques", "isCorrect": false },
            { "text": "to detect worm activity that exhibits scanning behavior", "isCorrect": false }
        ]
    },
    {
      "question": "Which type of cyber threat would cause electrical power outages?",
      "answers": [
          { "text": "human error", "isCorrect": false },
          { "text": "utility interruption", "isCorrect": false },
          { "text": "hardware failure", "isCorrect": false },
          { "text": "sabotage", "isCorrect": true }
      ]
  },
  {
      "question": "A threat actor is using a Smurf attack to overwhelm a target host. What kind of threat is that?",
      "answers": [
          { "text": "TCP SYN flood attack", "isCorrect": false },
          { "text": "amplification and reflection attack", "isCorrect": true },
          { "text": "MAC address spoofing attack", "isCorrect": false },
          { "text": "UDP flood attack", "isCorrect": false }
      ]
  },
  {
      "question": "A company's network administrator needs to deploy campus WLAN access authentication with a RADIUS server. Which three pieces of information must the administrator know to perform the tasks?",
      "answers": [
          { "text": "RADIUS can operate using UDP ports 1645 and 1646 respectively for authentication and accounting", "isCorrect": true },
          { "text": "The shared key is only required on the AP to authenticate with the RADIUS server", "isCorrect": false },
          { "text": "The wireless router must be configured with WPA using TKIP for encryption", "isCorrect": false },
          { "text": "The wireless router must be configured with WPA2 Enterprise using EAS for encryption", "isCorrect": true },
          { "text": "The shared key is a parameter that must be configured on a wireless client", "isCorrect": false },
          { "text": "RADIUS can operate using TCP ports 1812 and 1813 respectively for authentication and accounting", "isCorrect": true }
      ]
  },
  {
      "question": "A student is learning about authentication protocols and how they are used to communicate with AAA servers. Which statement describes a characteristic of such protocols?",
      "answers": [
          { "text": "RADIUS is considered the more secure protocol because all RADIUS protocol exchanges are encrypted", "isCorrect": false },
          { "text": "RADIUS uses a bidirectional challenge and response (CHAP), while TACACS+ uses a unidirectional challenge", "isCorrect": false },
          { "text": "TACACS+ combines authentication and authorization, while RADIUS separates AAA according to the AAA architecture", "isCorrect": true },
          { "text": "TACACS+ is a standard mostly Cisco equipment support, while RADIUS is an open standard", "isCorrect": false }
      ]
  },
  {
      "question": "Which is a Windows 10 feature that encrypts removable drives?",
      "answers": [
          { "text": "BitLocker To Go", "isCorrect": true },
          { "text": "MRT", "isCorrect": false },
          { "text": "XProtect", "isCorrect": false },
          { "text": "Leafpad", "isCorrect": false }
      ]
  },
  {
      "question": "What is a significant factor in the high vulnerability of industrial and embedded systems?",
      "answers": [
          { "text": "Improving the security of these often low-cost systems would increase the cost excessively", "isCorrect": false },
          { "text": "These systems often have numerous points of administrative access", "isCorrect": false },
          { "text": "Many of these systems have deployed, which means that implementing security is expensive and time-consuming", "isCorrect": false },
          { "text": "Many devices in these systems have poor authentication and cannot be upgraded or patched", "isCorrect": true }
      ]
  },
  {
      "question": "What actions are employed when configuring an IOS ZPF for network traffic?",
      "answers": [
          { "text": "class-map", "isCorrect": false },
          { "text": "zone pair", "isCorrect": true },
          { "text": "inspect action", "isCorrect": false },
          { "text": "policy-map", "isCorrect": false }
      ]
  },
  {
      "question": "Why can ACLs give a false sense of security if overly relied upon as a network security technology?",
      "answers": [
          { "text": "ACLs only log denied traffic, not permitted traffic", "isCorrect": false },
          { "text": "Attackers can determine which IP addresses, protocols, and ports are allowed by ACLs", "isCorrect": true },
          { "text": "Packets are permitted by default when ACL statements don't match", "isCorrect": false },
          { "text": "ACLs can be applied to network interfaces in one direction only", "isCorrect": false }
      ]
  },
    {
        "question": "Which two commands could be used to check if DNS name resolution is working properly on a Windows PC? (Choose two.)",
        "answers": [
            { "text": "ping cisco.com", "isCorrect": true },
            { "text": "net cisco.com", "isCorrect": false },
            { "text": "ipconfig /flushdns", "isCorrect": false },
            { "text": "nslookup cisco.com", "isCorrect": true },
            { "text": "nbtstat cisco.com", "isCorrect": false }
        ]
    },
    {
        "question": "A technician notices that an application is not responding to commands and that the computer seems to respond slowly when applications are opened. What is the best administrative tool to force the release of system resources from the unresponsive application?",
        "answers": [
            { "text": "Event Viewer", "isCorrect": false },
            { "text": "Add or Remove Programs", "isCorrect": false },
            { "text": "System Restore", "isCorrect": false },
            { "text": "Task Manager", "isCorrect": true }
        ]
    },
    {
        "question": "What is required in order to connect a Wi-Fi enabled laptop to a WPA secured wireless network?",
        "answers": [
            { "text": "a MAC address", "isCorrect": false },
            { "text": "a username and password", "isCorrect": false },
            { "text": "a security encryption key", "isCorrect": true },
            { "text": "an updated wireless driver", "isCorrect": false }
        ]
    },
    {
        "question": "Why would an attacker want to spoof a MAC address?",
        "answers": [
            { "text": "so that the attacker can launch another type of attack in order to gain access to the switch", "isCorrect": false },
            { "text": "so that the attacker can capture traffic from multiple VLANs rather than from just the VLAN that is assigned to the port to which the attacker device is attached", "isCorrect": false },
            { "text": "so that a switch on the LAN will start forwarding frames to the attacker instead of to the legitimate host", "isCorrect": true },
            { "text": "so that a switch on the LAN will start forwarding all frames toward the device that is under control of the attacker (that can then capture the LAN traffic)", "isCorrect": true }
        ]
    },
    {
        "question": "What is a wireless security mode that requires a RADIUS server to authenticate wireless users?",
        "answers": [
            { "text": "personal", "isCorrect": false },
            { "text": "enterprise", "isCorrect": true },
            { "text": "shared key", "isCorrect": false },
            { "text": "WEP", "isCorrect": false }
        ]
    },
    {
        "question": "What are three functions provided by the syslog service? (Choose three.)",
        "answers": [
            { "text": "to select the type of logging information that is captured", "isCorrect": true },
            { "text": "to provide traffic analysis", "isCorrect": false },
            { "text": "to specify the destinations of captured messages", "isCorrect": true },
            { "text": "to provide statistics on packets that are flowing through a Cisco device", "isCorrect": false },
            { "text": "to gather logging information for monitoring and troubleshooting", "isCorrect": true },
            { "text": "to periodically poll agents for data", "isCorrect": false }
        ]
    },
    {
        "question": "A network administrator is checking the system logs and notices unusual connectivity tests to multiple well-known ports on a server. What kind of potential network attack could this indicate?",
        "answers": [
            { "text": "access", "isCorrect": false },
            { "text": "denial of service", "isCorrect": false },
            { "text": "reconnaissance", "isCorrect": true },
            { "text": "information theft", "isCorrect": false }
        ]
    },
    {
        "question": "A technician has installed a third party utility that is used to manage a Windows 7 computer. However, the utility does not automatically start whenever the computer is started. What can the technician do to resolve this problem?",
        "answers": [
            { "text": "Set the application registry key value to one.", "isCorrect": false },
            { "text": "Use the Add or Remove Programs utility to set program access and defaults.", "isCorrect": false },
            { "text": "Change the startup type for the utility to Automatic in Services.", "isCorrect": true },
            { "text": "Uninstall the program and then choose Add New Programs in the Add or Remove Programs utility to install the application.", "isCorrect": false }
        ]
    },
    {
        "question": "What is the motivation of a white hat attacker?",
        "answers": [
            { "text": "discovering weaknesses of networks and systems to improve the security level of these systems", "isCorrect": true },
            { "text": "studying operating systems of various platforms to develop a new system", "isCorrect": false },
            { "text": "fine tuning network devices to improve their performance and efficiency", "isCorrect": false },
            { "text": "taking advantage of any vulnerability for illegal personal gain", "isCorrect": false }
        ]
    },
    {
        "question": "Which two types of hackers are typically classified as grey hat hackers? (Choose two.)",
        "answers": [
            { "text": "hacktivists", "isCorrect": true },
            { "text": "cyber criminals", "isCorrect": false },
            { "text": "state-sponsored hackers", "isCorrect": false },
            { "text": "script kiddies", "isCorrect": false },
            { "text": "vulnerability brokers", "isCorrect": true }
        ]
    },
      {
          "question": "What are two shared characteristics of the IDS and the IPS? (Choose two.)",
          "answers": [
              { "text": "Both have minimal impact on network performance.", "isCorrect": false },
              { "text": "Both analyze copies of network traffic.", "isCorrect": false },
              { "text": "Both are deployed as sensors.", "isCorrect": true },
              { "text": "Both rely on an additional network device to respond to malicious traffic.", "isCorrect": false },
              { "text": "Both use signatures to detect malicious traffic.", "isCorrect": true }
          ]
      },
      {
          "question": "An attacker is sitting in front of a store and wirelessly copies emails and contact lists from nearby unsuspecting user devices. What type of attack is this?",
          "answers": [
              { "text": "bluejacking", "isCorrect": false },
              { "text": "RF jamming", "isCorrect": false },
              { "text": "bluesnarfing", "isCorrect": true },
              { "text": "smishing", "isCorrect": false }
          ]
      },
      {
          "question": "An organization allows employees to work from home two days a week. Which technology should be implemented to ensure data confidentiality as data is transmitted?",
          "answers": [
              { "text": "SHS", "isCorrect": false },
              { "text": "VLANS", "isCorrect": false },
              { "text": "RAID", "isCorrect": false },
              { "text": "VPN", "isCorrect": true }
          ]
      },
      {
          "question": "A new PC is taken out of the box, started up and connected to the Internet. Patches were downloaded and installed. Antivirus was updated. In order to further harden the operating system what can be done?",
          "answers": [
              { "text": "Turn off the firewall.", "isCorrect": false },
              { "text": "Remove unnecessary programs and services.", "isCorrect": true },
              { "text": "Disconnect the computer from the network.", "isCorrect": false },
              { "text": "Give the computer a nonroutable address.", "isCorrect": false },
              { "text": "Install a hardware firewall.", "isCorrect": false },
              { "text": "Remove the administrator account.", "isCorrect": false }
          ]
      },
      {
          "question": "Which type of networks poses increasing challenges to cybersecurity specialists due to the growth of BYOD on campus?",
          "answers": [
              { "text": "wired networks", "isCorrect": false },
              { "text": "virtual networks", "isCorrect": false },
              { "text": "wireless networks", "isCorrect": true },
              { "text": "sneaker net", "isCorrect": false }
          ]
      },
      {
          "question": "What are two types of attacks used on DNS open resolvers? (Choose two.)",
          "answers": [
              { "text": "ARP poisoning", "isCorrect": false },
              { "text": "resource utilization", "isCorrect": true },
              { "text": "cushioning", "isCorrect": false },
              { "text": "amplification and reflection", "isCorrect": true },
              { "text": "fast flux", "isCorrect": false }
          ]
      },
      {
          "question": "What would be the target of an SQL injection attack?",
          "answers": [
              { "text": "database", "isCorrect": true },
              { "text": "email", "isCorrect": false },
              { "text": "DHCP", "isCorrect": false },
              { "text": "DNS", "isCorrect": false }
          ]
      },
      {
          "question": "A security specialist is asked for advice on a security measure to prevent unauthorized hosts from accessing the home network of employees. Which measure would be most effective?",
          "answers": [
              { "text": "Implement a VLAN.", "isCorrect": false },
              { "text": "Implement intrusion detection systems.", "isCorrect": false },
              { "text": "Implement RAID.", "isCorrect": false },
              { "text": "Implement a firewall.", "isCorrect": true }
          ]
      },
      {
          "question": "Match the network service with the description.",
          "answers": [
              { "text": "Syslog - Notifies the administrator with detailed system messages", "isCorrect": true },
              { "text": "NetFlow - Provides statistics on IP packets flowing through network devices", "isCorrect": true },
              { "text": "NTP - Synchronizes the time across all devices on the network", "isCorrect": true },
              { "text": "SNMP - Allows administrators to manage network nodes", "isCorrect": true }
          ]
      },
      {
          "question": "Which method can be used to harden a device?",
          "answers": [
              { "text": "allow USB auto-detection", "isCorrect": false },
              { "text": "use SSH and disable the root account access over SSH", "isCorrect": true },
              { "text": "allow default services to remain enabled", "isCorrect": false },
              { "text": "maintain use of the same passwords", "isCorrect": false }
          ]
      },
        {
            "question": "Which user can override file permissions on a Linux computer?",
            "answers": [
                { "text": "root user", "isCorrect": true },
                { "text": "any user that has ‘group’ permission to the file", "isCorrect": false },
                { "text": "only the creator of the file", "isCorrect": false },
                { "text": "any user that has ‘other’ permission to the file", "isCorrect": false }
            ]
        },
        {
            "question": "Which wireless parameter is used by an access point to broadcast frames that include the SSID?",
            "answers": [
                { "text": "passive mode", "isCorrect": true },
                { "text": "channel setting", "isCorrect": false },
                { "text": "active mode", "isCorrect": false },
                { "text": "security mode", "isCorrect": false }
            ]
        },
        {
            "question": "What is the outcome when a Linux administrator enters the man man command?",
            "answers": [
                { "text": "The man man command provides documentation about the man command", "isCorrect": true },
                { "text": "The man man command provides a list of commands available at the current prompt", "isCorrect": false },
                { "text": "The man man command opens the most recent log file", "isCorrect": false },
                { "text": "The man man command configures the network interface with a manual address", "isCorrect": false }
            ]
        },
        {
            "question": "Which technique could be used by security personnel to analyze a suspicious file in a safe environment?",
            "answers": [
                { "text": "whitelisting", "isCorrect": false },
                { "text": "baselining", "isCorrect": false },
                { "text": "blacklisting", "isCorrect": false },
                { "text": "sandboxing", "isCorrect": true }
            ]
        },
        {
            "question": "What are three benefits of using symbolic links over hard links in Linux? (Choose three.)",
            "answers": [
                { "text": "Symbolic links can be exported.", "isCorrect": false },
                { "text": "They can be compressed.", "isCorrect": false },
                { "text": "They can link to a file in a different file system.", "isCorrect": true },
                { "text": "They can link to a directory.", "isCorrect": true },
                { "text": "They can be encrypted.", "isCorrect": false },
                { "text": "They can show the location of the original file.", "isCorrect": true }
            ]
        },
        {
            "question": "Which field in the IPv6 header points to optional network layer information that is carried in the IPv6 packet?",
            "answers": [
                { "text": "traffic class", "isCorrect": false },
                { "text": "version", "isCorrect": false },
                { "text": "flow label", "isCorrect": false },
                { "text": "next header", "isCorrect": true }
            ]
        },
        {
            "question": "What is the term used when a malicious party sends a fraudulent email disguised as being from a legitimate, trusted source?",
            "answers": [
                { "text": "phishing", "isCorrect": true },
                { "text": "backdoor", "isCorrect": false },
                { "text": "Trojan", "isCorrect": false },
                { "text": "vishing", "isCorrect": false }
            ]
        },
        {
            "question": "Which technology is used by Cisco Advanced Malware Protection (AMP) in defending and protecting against known and emerging threats?",
            "answers": [
                { "text": "website filtering and blacklisting", "isCorrect": false },
                { "text": "threat intelligence", "isCorrect": true },
                { "text": "network admission control", "isCorrect": false },
                { "text": "network profiling", "isCorrect": false }
            ]
        },              
          {
              "question": "A flood of packets with invalid source IP addresses requests a connection on the network. The server busily tries to respond, resulting in valid requests being ignored. What type of attack has occurred?",
              "answers": [
                  { "text": "TCP session hijacking", "isCorrect": false },
                  { "text": "TCP reset", "isCorrect": false },
                  { "text": "TCP SYN flood", "isCorrect": true },
                  { "text": "UDP flood", "isCorrect": false }
              ]
          },
          {
              "question": "Which Windows tool can be used by a cybersecurity administrator to secure stand-alone computers that are not part of an active directory domain?",
              "answers": [
                  { "text": "Windows Defender", "isCorrect": false },
                  { "text": "Local Security Policy", "isCorrect": true },
                  { "text": "Windows Firewall", "isCorrect": false },
                  { "text": "PowerShell", "isCorrect": false }
              ]
          },
          {
              "question": "Match the correct sequence of steps typically taken by a threat actor carrying out a domain shadowing attack.",
              "answers": [
                  { "text": "The website is compromised. - Step 1", "isCorrect": true },
                  { "text": "HTTP 302 cushioning is used. - Step 2", "isCorrect": true },
                  { "text": "Domain shadowing is used. - Step 3", "isCorrect": true },
                  { "text": "An exploit kit landing page is created. - Step 4", "isCorrect": true },
                  { "text": "Malware is spread through its payload. - Step 5", "isCorrect": true }
              ]
          },
          {
              "question": "What is a feature of distributed firewalls?",
              "answers": [
                  { "text": "They combine the feature of host-based firewalls with centralized management.", "isCorrect": true },
                  { "text": "They all use an open sharing standard platform.", "isCorrect": false },
                  { "text": "They use only TCP wrappers to configure rule-based access control and logging systems.", "isCorrect": false },
                  { "text": "They use only iptables to configure network rules.", "isCorrect": false }
              ]
          },
{
    "question": "What does the telemetry function provide in host-based security software?",
    "answers": [
        { "text": "It updates the heuristic antivirus signature database.", "isCorrect": false },
        { "text": "It enables host-based security programs to have comprehensive logging functions.", "isCorrect": true },
        { "text": "It blocks the passage of zero-day attacks.", "isCorrect": false },
        { "text": "It enables updates of malware signatures.", "isCorrect": false }
    ]
},
{
    "question": "What is an attack vector as it relates to network security?",
    "answers": [
        { "text": "a path by which a threat actor can gain access to an internal network device", "isCorrect": true },
        { "text": "a defense-in-depth approach to security", "isCorrect": false },
        { "text": "a particular section of a network design where security is applied", "isCorrect": false },
        { "text": "a method of reverse engineering binary files", "isCorrect": false }
    ]
},
{
    "question": "What occurs when a rogue access point is added to a WLAN?",
    "answers": [
        { "text": "Authorized access points can transmit excess traffic to rogue access points to help alleviate congestion.", "isCorrect": false },
        { "text": "Unauthorized users can gain access to internal servers, thus causing a security hole.", "isCorrect": true },
        { "text": "All traffic that uses the same channel as the rogue access point will be encrypted.", "isCorrect": false },
        { "text": "All traffic that uses the same channel as the rogue access point will be required to authenticate.", "isCorrect": false }
    ]
},
{
    "question": "What is the reason for disabling SSID broadcasting and changing the default SSID on a wireless access point?",
    "answers": [
        { "text": "The access point stops broadcasting its own MAC address, thus preventing unauthorized wireless clients from connecting to the network.", "isCorrect": false },
        { "text": "Anyone with the default SSID can gain access to the access point and change the configuration.", "isCorrect": false },
        { "text": "Disabling SSID broadcasting frees up radio frequency bandwidth and increases the data throughput of the access point.", "isCorrect": false },
        { "text": "Wireless clients must then have the SSID manually configured to connect to the wireless network.", "isCorrect": true }
    ]
},
{
    "question": "Which two options can limit the information discovered from port scanning? (Choose two.)",
    "answers": [
        { "text": "encryption", "isCorrect": false },
        { "text": "firewall", "isCorrect": true },
        { "text": "authentication", "isCorrect": false },
        { "text": "intrusion prevention system", "isCorrect": true },
        { "text": "passwords", "isCorrect": false }
    ]
},
{
    "question": "What does a rootkit modify?",
    "answers": [
        { "text": "Microsoft Word", "isCorrect": false },
        { "text": "operating system", "isCorrect": true },
        { "text": "programs", "isCorrect": false },
        { "text": "Notepad", "isCorrect": false },
        { "text": "screen savers", "isCorrect": false }
    ]
},
  {
      "question": "Match the commonly used ports on a Linux server with the corresponding service.",
      "answers": [
          { "text": "SMTP - 25", "isCorrect": true },
          { "text": "DNS - 53", "isCorrect": true },
          { "text": "HTTPS - 443", "isCorrect": true },
          { "text": "Telnet - 23", "isCorrect": true }
      ]
  },
  {
      "question": "Which statement describes the anomaly-based intrusion detection approach?",
      "answers": [
          { "text": "It compares the antivirus definition file to a cloud-based repository for latest updates.", "isCorrect": false },
          { "text": "It compares the signatures of incoming traffic to a known intrusion database.", "isCorrect": false },
          { "text": "It compares the operations of a host against a well-defined security policy.", "isCorrect": false },
          { "text": "It compares the behavior of a host to an established baseline to identify potential intrusions.", "isCorrect": true }
      ]
  },
  {
      "question": "What is an example of a local exploit?",
      "answers": [
          { "text": "A threat actor tries to gain the user password of a remote host by using a keyboard capture software installed on it by a Trojan.", "isCorrect": true },
          { "text": "A buffer overflow attack is launched against an online shopping website and causes the server crash.", "isCorrect": false },
          { "text": "Port scanning is used to determine if the Telnet service is running on a remote server.", "isCorrect": false },
          { "text": "A threat actor performs a brute force attack on an enterprise edge router to gain illegal access.", "isCorrect": false }
      ]
  },
  {
      "question": "In an attempt to prevent network attacks, cyber analysts share unique identifiable attributes of known attacks with colleagues. What three types of attributes or indicators of compromise are helpful to share? (Choose three.)",
      "answers": [
          { "text": "netbios names of compromised firewalls", "isCorrect": false },
          { "text": "BIOS of attacking systems", "isCorrect": false },
          { "text": "features of malware files", "isCorrect": true },
          { "text": "IP addresses of attack servers", "isCorrect": true },
          { "text": "changes made to end system software", "isCorrect": true },
          { "text": "system ID of compromised systems", "isCorrect": false }
      ]
  },
  {
      "question": "What is the result of a passive ARP poisoning attack?",
      "answers": [
          { "text": "Network clients experience a denial of service.", "isCorrect": false },
          { "text": "Multiple subdomains are created.", "isCorrect": false },
          { "text": "Data is modified in transit or malicious data is inserted in transit.", "isCorrect": false },
          { "text": "Confidential information is stolen.", "isCorrect": true }
      ]
  },
  {
      "question": "The entrepreneur is concerned about company employees having uninterrupted access to important resources and data. Which of the CIA triad components would address the concern?",
      "answers": [
          { "text": "integrity", "isCorrect": false },
          { "text": "availability", "isCorrect": false },
          { "text": "authentication", "isCorrect": false },
          { "text": "confidentiality", "isCorrect": true }
      ]
  },
    {
        "question": "What is a characteristic of a layered defense-in-depth security approach?",
        "answers": [
            { "text": "When one device fails, another one takes over.", "isCorrect": false },
            { "text": "One safeguard failure does not affect the effectiveness of other safeguards.", "isCorrect": true },
            { "text": "Three or more devices are used.", "isCorrect": false },
            { "text": "Routers are replaced with firewalls.", "isCorrect": false }
        ]
    },
    {
        "question": "What device would be used as the third line of defense in a defense-in-depth approach?",
        "answers": [
            { "text": "internal router", "isCorrect": true },
            { "text": "edge router", "isCorrect": false },
            { "text": "host", "isCorrect": false },
            { "text": "firewall", "isCorrect": false }
        ]
    },
    {
        "question": "Match the Security Onion tool with the description.",
        "answers": [
            { "text": "Snort - network-based intrusion detection system", "isCorrect": true },
            { "text": "Wireshark - packet capture application", "isCorrect": true },
            { "text": "OSSEC - host-based intrusion detection system", "isCorrect": true },
            { "text": "Sguil - high-level cybersecurity analysis console", "isCorrect": true }
        ]
    },
    {
        "question": "Which wireless standard made AES and CCM mandatory?",
        "answers": [
            { "text": "WEP", "isCorrect": false },
            { "text": "WEP2", "isCorrect": false },
            { "text": "WPA", "isCorrect": false },
            { "text": "WPA2", "isCorrect": true }
        ]
    },
    {
        "question": "What are two recommended steps to protect and secure a wireless network? (Choose two.)",
        "answers": [
            { "text": "Use WPA2-AES encryption.", "isCorrect": true },
            { "text": "Use the default SSID.", "isCorrect": false },
            { "text": "Update firmware.", "isCorrect": true },
            { "text": "Locate the wireless router where it is accessible to users.", "isCorrect": false },
            { "text": "Enable remote management.", "isCorrect": false }
        ]
    },
    {
        "question": "What is a feature of virtual LANs (VLANs)?",
        "answers": [
            { "text": "A single collision domain is enabled on a switch that is shared between VLANs.", "isCorrect": false },
            { "text": "Communication between different VLANs on the one switch is enabled by default.", "isCorrect": false },
            { "text": "Switch port utilization is decreased because each port is only associated with one broadcast domain.", "isCorrect": false },
            { "text": "Logical segmentation is provided by creating multiple broadcast domains on a single switch.", "isCorrect": true }
        ]
    },
    {
        "question": "What is an example of privilege escalation attack?",
        "answers": [
            { "text": "A DDoS attack is launched against a government server and causes the server to crash.", "isCorrect": false },
            { "text": "A port scanning attack finds that the FTP service is running on a server that allows anonymous access.", "isCorrect": false },
            { "text": "A threat actor sends an email to an IT manager to request the root access.", "isCorrect": false },
            { "text": "A threat actor performs an access attack and gains the administrator password.", "isCorrect": true }
        ]
    },
    {
        "question": "What is the principle behind the nondiscretionary access control model?",
        "answers": [
            { "text": "It applies the strictest access control possible.", "isCorrect": false },
            { "text": "It allows access based on attributes of the object be to accessed.", "isCorrect": false },
            { "text": "It allows access decisions to be based on roles and responsibilities of a user within the organization.", "isCorrect": true },
            { "text": "It allows users to control access to their data as owners of that data.", "isCorrect": false }
        ]
    },
    {
        "question": "Which two features are included by both TACACS+ and RADIUS protocols? (Choose two.)",
        "answers": [
            { "text": "utilization of transport layer protocols", "isCorrect": true },
            { "text": "separate authentication and authorization processes", "isCorrect": false },
            { "text": "password encryption", "isCorrect": true },
            { "text": "802.1X support", "isCorrect": false },
            { "text": "SIP support", "isCorrect": false }
        ]
    },
      {
          "question": "Which command is used to activate an IPv6 ACL named ENG_ACL on an interface so that the router filters traffic prior to accessing the routing table?",
          "answers": [
              { "text": "ipv6 traffic-filter ENG_ACL in", "isCorrect": true },
              { "text": "ipv6 traffic-filter ENG_ACL out", "isCorrect": false },
              { "text": "ipv6 access-class ENG_ACL out", "isCorrect": false },
              { "text": "ipv6 access-class ENG_ACL in", "isCorrect": false }
          ]
      },
      {
          "question": "In which configuration would an outbound ACL placement be preferred over an inbound ACL placement?",
          "answers": [
              { "text": "when the ACL is applied to an outbound interface to filter packets coming from multiple inbound interfaces before the packets exit the interface", "isCorrect": true },
              { "text": "when an outbound ACL is closer to the source of the traffic flow", "isCorrect": false },
              { "text": "when an interface is filtered by an outbound ACL and the network attached to the interface is the source network being filtered within the ACL", "isCorrect": false },
              { "text": "when a router has more than one ACL", "isCorrect": false }
          ]
      },
      {
          "question": "What are two differences between stateful and stateless firewalls? (Choose two.)",
          "answers": [
              { "text": "A stateless firewall is able to filter sessions that use dynamic port negotiations while a stateful firewall cannot.", "isCorrect": false },
              { "text": "A stateless firewall will examine each packet individually while a stateful firewall observes the state of a connection.", "isCorrect": true },
              { "text": "stateless firewall provides more stringent control over security than a stateful firewall.", "isCorrect": false },
              { "text": "A stateless firewall will provide more logging information than a stateful firewall.", "isCorrect": false },
              { "text": "A stateful firewall will prevent spoofing by determining whether packets belong to an existing connection while a stateless firewall follows pre-configured rule sets.", "isCorrect": true }
          ]
      },
      {
          "question": "Which statement describes a typical security policy for a DMZ firewall configuration?",
          "answers": [
              { "text": "Traffic that originates from the inside interface is generally blocked entirely or very selectively permitted to the outside interface.", "isCorrect": false },
              { "text": "Traffic that originates from the DMZ interface is selectively permitted to the outside interface.", "isCorrect": true },
              { "text": "Return traffic from the inside that is associated with traffic originating from the outside is permitted to traverse from the inside interface to the outside interface.", "isCorrect": false },
              { "text": "Traffic that originates from the outside interface is permitted to traverse the firewall to the inside interface with few or no restrictions.", "isCorrect": false },
              { "text": "Return traffic from the outside that is associated with traffic originating from the inside is permitted to traverse from the outside interface to the DMZ interface.", "isCorrect": false }
          ]
      },
      {
          "question": "Which type of firewall makes use of a proxy server to connect to remote servers on behalf of clients?",
          "answers": [
              { "text": "stateless firewall", "isCorrect": false },
              { "text": "application gateway firewall", "isCorrect": true },
              { "text": "stateful firewall", "isCorrect": false },
              { "text": "packet filtering firewall", "isCorrect": false }
          ]
      },
      {
          "question": "What is the result in the self zone if a router is the source or destination of traffic?",
          "answers": [
              { "text": "Only traffic that is destined for the router is permitted.", "isCorrect": false },
              { "text": "Only traffic that originates in the router is permitted.", "isCorrect": false },
              { "text": "No traffic is permitted.", "isCorrect": false },
              { "text": "All traffic is permitted.", "isCorrect": true }
          ]
      },
      {
          "question": "Designing a ZPF requires several steps. Which step involves dictating the number of devices between most-secure and least-secure zones and determining redundant devices?",
          "answers": [
              { "text": "identify subsets within zones and merge traffic requirements", "isCorrect": false },
              { "text": "design the physical infrastructure", "isCorrect": true },
              { "text": "establish policies between zones", "isCorrect": false },
              { "text": "determine the zones", "isCorrect": false }
          ]
      },
      {
          "question": "Which statement describes Cisco IOS Zone-Based Policy Firewall operation?",
          "answers": [
              { "text": "The pass action works in only one direction.", "isCorrect": true },
              { "text": "Router management interfaces must be manually assigned to the self zone.", "isCorrect": false },
              { "text": "Service policies are applied in interface configuration mode.", "isCorrect": false },
              { "text": "A router interface can belong to multiple zones.", "isCorrect": false }
          ]
      },
      {
          "question": "Which cloud security domain describes controls related to securing the data itself?",
          "answers": [
              { "text": "Data Security and Encryption", "isCorrect": true },
              { "text": "Application Security", "isCorrect": false },
              { "text": "Security as a Service", "isCorrect": false },
              { "text": "Infrastructure Security", "isCorrect": false }
          ]
      },
        {
            "question": "Which two advantages in security controls are provided by software-defined networks (SDN) over traditional network security solutions? (Choose two.)",
            "answers": [
                { "text": "offer more security features than hardware firewalls", "isCorrect": false },
                { "text": "easier insertion into the traffic path", "isCorrect": true },
                { "text": "apply to assets based on more flexible criteria than hardware firewalls", "isCorrect": true },
                { "text": "easier network isolation without constraints of physical hardware", "isCorrect": true },
                { "text": "higher performance than hardware firewalls", "isCorrect": false }
            ]
        },
        {
            "question": "What is the function of SDKs in application development?",
            "answers": [
                { "text": "to provide a repository of code to reduce time and cost of application development", "isCorrect": true },
                { "text": "to maintain data integrity and identify malicious input", "isCorrect": false },
                { "text": "to store precompiled SQL statements that execute tasks", "isCorrect": false },
                { "text": "to verify software can run under required security settings", "isCorrect": false },
                { "text": "to prevent software from being reverse engineered by replacing sensitive data with fictional data", "isCorrect": false }
            ]
        },
        {
            "question": "A company is using a public cloud provider to host its software development and distribution processes. What two cloud resources is the company solely responsible for in the shared security responsibility model? (Choose two.)",
            "answers": [
                { "text": "network control", "isCorrect": false },
                { "text": "customer endpoints", "isCorrect": true },
                { "text": "application", "isCorrect": false },
                { "text": "data", "isCorrect": true },
                { "text": "identity management", "isCorrect": false }
            ]
        },
        {
            "question": "A company implements a security policy that ensures that a file sent from the headquarters office to the branch office can only be opened with a predetermined code. This code is changed every day. Which two algorithms can be used to achieve this task? (Choose two.)",
            "answers": [
                { "text": "MD5", "isCorrect": false },
                { "text": "AES", "isCorrect": true },
                { "text": "SHA-1", "isCorrect": false },
                { "text": "HMAC", "isCorrect": false },
                { "text": "3DES", "isCorrect": true }
            ]
        },
        {
            "question": "What are two methods to maintain certificate revocation status? (Choose two.)",
            "answers": [
                { "text": "CRL", "isCorrect": true },
                { "text": "OCSP", "isCorrect": true },
                { "text": "subordinate CA", "isCorrect": false },
                { "text": "LDAP", "isCorrect": false },
                { "text": "DNS", "isCorrect": false }
            ]
        },
        {
            "question": "Before data is sent out for analysis, which technique can be used to replace sensitive data in nonproduction environments to protect the underlying information?",
            "answers": [
                { "text": "steganography", "isCorrect": false },
                { "text": "steganalysis", "isCorrect": false },
                { "text": "software obfuscation", "isCorrect": false },
                { "text": "data masking substitution", "isCorrect": true }
            ]
        },
        {
            "question": "Which technology would be used to create the server logs generated by network devices and reviewed by an entry level network person who works the night shift at a data center?",
            "answers": [
                { "text": "ACL", "isCorrect": false },
                { "text": "VPN", "isCorrect": false },
                { "text": "NAT", "isCorrect": false },
                { "text": "syslog", "isCorrect": true }
            ]
        },
        {
            "question": "Which two application layer protocols manage the exchange of messages between a client with a web browser and a remote web server? (Choose two.)",
            "answers": [
                { "text": "HTTPS", "isCorrect": true },
                { "text": "DNS", "isCorrect": false },
                { "text": "HTML", "isCorrect": false },
                { "text": "DHCP", "isCorrect": false },
                { "text": "HTTP", "isCorrect": true }
            ]
        },
        {
            "question": "How can IMAP be a security threat to a company?",
            "answers": [
                { "text": "It can be used to encode stolen data and send to a threat actor.", "isCorrect": false },
                { "text": "An email can be used to bring malware to a host.", "isCorrect": true },
                { "text": "Encrypted data is decrypted.", "isCorrect": false },
                { "text": "Someone inadvertently clicks on a hidden iFrame.", "isCorrect": false }
            ]
        },
        {
            "question": "Which two tools have a GUI interface and can be used to view and analyze full packet captures? (Choose two.)",
            "answers": [
                { "text": "Wireshark", "isCorrect": true },
                { "text": "Splunk", "isCorrect": false },
                { "text": "Cisco Prime Network Analysis Module", "isCorrect": true },
                { "text": "nfdump", "isCorrect": false },
                { "text": "tcpdump", "isCorrect": false }
            ]
        },
        {
            "question": "Which information can be provided by the Cisco NetFlow utility?",
            "answers": [
                { "text": "source and destination UDP port mapping", "isCorrect": false },
                { "text": "security and user account restrictions", "isCorrect": false },
                { "text": "peak usage times and traffic routing", "isCorrect": true },
                { "text": "IDS and IPS capabilities", "isCorrect": false }
            ]
        },
        {
            "question": "A network administrator is reviewing server alerts because of reports of network slowness. The administrator confirms that an alert was an actual security incident. What is the security alert classification of this type of scenario?",
            "answers": [
                { "text": "false positive", "isCorrect": false },
                { "text": "true negative", "isCorrect": false },
                { "text": "true positive", "isCorrect": true },
                { "text": "false negative", "isCorrect": false }
            ]
        },
        {
            "question": "A network administrator is trying to download a valid file from an internal server. However, the process triggers an alert on a NMS tool. What condition describes this alert?",
            "answers": [
                { "text": "false positive", "isCorrect": true },
                { "text": "true positive", "isCorrect": false },
                { "text": "false negative", "isCorrect": false },
                { "text": "true negative", "isCorrect": false }
            ]
        },
        {
            "question": "What is indicated by a Snort signature ID that is below 3464?",
            "answers": [
                { "text": "This is a custom signature developed by the organization to address locally observed rules.", "isCorrect": false },
                { "text": "The SID was created by Sourcefire and distributed under a GPL agreement.", "isCorrect": true },
                { "text": "The SID was created by the Snort community and is maintained in Community Rules.", "isCorrect": false },
                { "text": "The SID was created by members of EmergingThreats.", "isCorrect": false }
            ]
        },
        {
            "question": "A network administrator is setting up a web server for a small advertising office and is concerned with data availability. The administrator wishes to implement disk fault tolerance using the minimum number of disks required. Which RAID level should the administrator choose?",
            "answers": [
                { "text": "RAID 5", "isCorrect": false },
                { "text": "RAID 0", "isCorrect": false },
                { "text": "RAID 1", "isCorrect": true },
                { "text": "RAID 6", "isCorrect": false }
            ]
        },
        {
            "question": "Which three security services are provided by digital signatures? (Choose three.)",
            "answers": [
                { "text": "authenticates the source", "isCorrect": true },
                { "text": "guarantees data has not changed in transit", "isCorrect": true },
                { "text": "provides data encryption", "isCorrect": true },
                { "text": "provides nonrepudiation using HMAC functions", "isCorrect": false },
                { "text": "provides confidentiality of digitally signed data", "isCorrect": false },
                { "text": "authenticates the destination", "isCorrect": false }
            ]
        },
        {
            "question": "A company is deploying a customer service web application on AWS. A network administrator is installing and configuring a VM instance. Which three actions should the administrator take to protect the VM? (Choose three.)",
            "answers": [
                { "text": "Disable unneeded ports and services.", "isCorrect": true },
                { "text": "Enforce account management policies.", "isCorrect": true },
                { "text": "Configure RAID to ensure storage fault tolerance.", "isCorrect": false },
                { "text": "Plan subnet placement.", "isCorrect": true },
                { "text": "Deploy an advanced firewall appliance.", "isCorrect": false },
                { "text": "Install an IPS appliance in the VM.", "isCorrect": false }
            ]
        },
        {
            "question": "What is the purpose of mobile device management (MDM) software?",
            "answers": [
                { "text": "It is used to create a security policy.", "isCorrect": false },
                { "text": "It is used to identify potential mobile device vulnerabilities.", "isCorrect": false },
                { "text": "It is used by threat actors to penetrate the system.", "isCorrect": false },
                { "text": "It is used to implement security policies, settings, and software configurations on mobile devices.", "isCorrect": true }
            ]
        },
        {
            "question": "Which protocol would be used to provide security for employees that access systems remotely from home?",
            "answers": [
                { "text": "Telnet", "isCorrect": false },
                { "text": "WPA", "isCorrect": false },
                { "text": "SSH", "isCorrect": true },
                { "text": "SCP", "isCorrect": false }
            ]
        } ,
    {
        "question": "A company has a file server that shares a folder named Public. The network security policy specifies that the Public folder is assigned Read-Only rights to anyone who can log into the server while the Edit rights are assigned only to the network admin group. Which component is addressed in the AAA network service framework?",
        "answers": [
            { "text": "automation", "isCorrect": false },
            { "text": "authorization", "isCorrect": true },
            { "text": "accounting", "isCorrect": false },
            { "text": "authentication", "isCorrect": false }
        ]
    },
    {
        "question": "To facilitate the troubleshooting process, which inbound ICMP message should be permitted on an outside interface?",
        "answers": [
            { "text": "echo request", "isCorrect": false },
            { "text": "echo reply", "isCorrect": true },
            { "text": "time-stamp reply", "isCorrect": false },
            { "text": "time-stamp request", "isCorrect": false },
            { "text": "router advertisement", "isCorrect": false }
        ]
    },
    {
        "question": "Which two statements describe the effect of the access control list wildcard mask 0.0.0.15? (Choose two.)",
        "answers": [
            { "text": "The last four bits of a supplied IP address will be ignored.", "isCorrect": true },
            { "text": "The first 32 bits of a supplied IP address will be matched.", "isCorrect": false },
            { "text": "The first 28 bits of a supplied IP address will be matched.", "isCorrect": true },
            { "text": "The first 28 bits of a supplied IP address will be ignored.", "isCorrect": false },
            { "text": "The last five bits of a supplied IP address will be ignored.", "isCorrect": false },
            { "text": "The last four bits of a supplied IP address will be matched.", "isCorrect": false }
        ]
    },
    {
        "question": "When implementing components into an enterprise network, what is the purpose of a firewall?",
        "answers": [
            { "text": "A firewall is a system that stores vast quantities of sensitive and business-critical information.", "isCorrect": false },
            { "text": "A firewall is a system that enforces an access control policy between internal corporate networks and external networks.", "isCorrect": true },
            { "text": "A firewall is a system that is designed to secure, monitor, and manage mobile devices, including corporate-owned devices and employee-owned devices.", "isCorrect": false },
            { "text": "A firewall is a system that inspects network traffic and makes forwarding decisions based solely on Layer 2 Ethernet MAC addresses.", "isCorrect": false }
        ]
    },
    {
        "question": "Which ICMP message type should be stopped inbound?",
        "answers": [
            { "text": "unreachable", "isCorrect": false },
            { "text": "source quench", "isCorrect": false },
            { "text": "echo-reply", "isCorrect": false },
            { "text": "echo", "isCorrect": true }
        ]
    },
    {
        "question": "When ACLs are configured to block IP address spoofing and DoS flood attacks, which ICMP message should be allowed both inbound and outbound?",
        "answers": [
            { "text": "source quench", "isCorrect": true },
            { "text": "echo", "isCorrect": false },
            { "text": "unreachable", "isCorrect": false },
            { "text": "echo reply", "isCorrect": false }
        ]
    },
    {
        "question": "What are two elements that form the PRI value in a syslog message? (Choose two.)",
        "answers": [
            { "text": "header", "isCorrect": false },
            { "text": "timestamp", "isCorrect": false },
            { "text": "facility", "isCorrect": true },
            { "text": "severity", "isCorrect": true },
            { "text": "hostname", "isCorrect": false }
        ]
    },
    {
        "question": "Which two options are network security monitoring approaches that use advanced analytic techniques to analyze network telemetry data? (Choose two.)",
        "answers": [
            { "text": "NBAD", "isCorrect": true },
            { "text": "NBA", "isCorrect": true },
            { "text": "IPFIX", "isCorrect": false },
            { "text": "Snorby", "isCorrect": false },
            { "text": "Sguil", "isCorrect": false },
            { "text": "NetFlow", "isCorrect": false }
        ]
    },
    {
        "question": "What is a characteristic of a probabilistic analysis in an alert evaluation?",
        "answers": [
            { "text": "each event an inevitable result of antecedent causes", "isCorrect": false },
            { "text": "random variables that create difficulty in knowing the outcome of any given event with certainty", "isCorrect": true },
            { "text": "precise methods that yield the same result every time by relying on predefined conditions", "isCorrect": false },
            { "text": "analysis of applications that conform to application/networking standards", "isCorrect": false }
        ]
    },
  {
      "question": "What are two physical security precautions that a business can take to protect its computers and systems? (Choose two.)",
      "answers": [
          { "text": "Replace software firewalls with hardware firewalls.", "isCorrect": false },
          { "text": "Perform daily data backups.", "isCorrect": false },
          { "text": "Ensure that all operating system and antivirus software is up to date.", "isCorrect": false },
          { "text": "Lock doors to telecommunications rooms.", "isCorrect": true },
          { "text": "Implement biometric authentication.", "isCorrect": true }
      ]
  },
  {
      "question": "Which hashing technology requires keys to be exchanged?",
      "answers": [
          { "text": "salting", "isCorrect": false },
          { "text": "AES", "isCorrect": false },
          { "text": "MD5", "isCorrect": false },
          { "text": "HMAC", "isCorrect": true }
      ]
  },
  {
      "question": "The IT department is tasked to implement a system that controls what a user can and cannot do on the corporate network. Which process should be implemented to meet the requirement?",
      "answers": [
          { "text": "a set of attributes that describes user access rights", "isCorrect": true },
          { "text": "observations to be provided to all employees", "isCorrect": false },
          { "text": "a biometric fingerprint reader", "isCorrect": false },
          { "text": "user login auditing", "isCorrect": false }
      ]
  },
  {
      "question": "Which two keywords can be used in an access control list to replace a wildcard mask or address and wildcard mask pair? (Choose two.)",
      "answers": [
          { "text": "any", "isCorrect": true },
          { "text": "gt", "isCorrect": false },
          { "text": "some", "isCorrect": false },
          { "text": "all", "isCorrect": false },
          { "text": "host", "isCorrect": true },
          { "text": "most", "isCorrect": false }
      ]
  },
  {
      "question": "What is the function of the pass action on a Cisco IOS Zone-Based Policy Firewall?",
      "answers": [
          { "text": "tracking the state of connections between zones", "isCorrect": false },
          { "text": "inspecting traffic between zones for traffic control", "isCorrect": false },
          { "text": "logging of rejected or dropped packets", "isCorrect": false },
          { "text": "forwarding traffic from one zone to another", "isCorrect": true }
      ]
  },
  {
      "question": "Which statement describes the threat to a public cloud due to a poor cloud security architecture strategy?",
      "answers": [
          { "text": "when a cloud customer does not have full visibility into the cloud services", "isCorrect": false },
          { "text": "when user accounts or access privileges are not properly secured and are hijacked by threat actors", "isCorrect": false },
          { "text": "when a cloud customer employee, contractor, or business partner maliciously or unintentionally compromise the cloud service", "isCorrect": false },
          { "text": "when the shared security responsibilities between a cloud customer and cloud provider are not implemented correctly", "isCorrect": true }
      ]
  },
  {
      "question": "A company is developing a security policy for secure communication. In the exchange of critical messages between a headquarters office and a branch office, a hash value should only be recalculated with a predetermined code, thus ensuring the validity of data source. Which aspect of secure communications is addressed?",
      "answers": [
          { "text": "origin authentication", "isCorrect": true },
          { "text": "data integrity", "isCorrect": false },
          { "text": "non-repudiation", "isCorrect": false },
          { "text": "data confidentiality", "isCorrect": false }
      ]
  },
  {
      "question": "Which Windows log contains information about installations of software, including Windows updates?",
      "answers": [
          { "text": "security logs", "isCorrect": false },
          { "text": "application logs", "isCorrect": false },
          { "text": "setup logs", "isCorrect": true },
          { "text": "system logs", "isCorrect": false }
      ]
  },
  {
      "question": "For network systems, which management system addresses the inventory and control of hardware and software configurations?",
      "answers": [
          { "text": "vulnerability management", "isCorrect": false },
          { "text": "risk management", "isCorrect": false },
          { "text": "asset management", "isCorrect": false },
          { "text": "configuration management", "isCorrect": true }
      ]
  },
  {
      "question": "What are two uses of an access control list? (Choose two.)",
      "answers": [
          { "text": "ACLs can permit or deny traffic based upon the MAC address originating on the router.", "isCorrect": false },
          { "text": "Standard ACLs can restrict access to specific applications and ports.", "isCorrect": false },
          { "text": "ACLs can control which areas a host can access on a network.", "isCorrect": true },
          { "text": "ACLs assist the router in determining the best path to a destination.", "isCorrect": false },
          { "text": "ACLs provide a basic level of security for network access.", "isCorrect": true }
      ]
  },            
{
    "question": "When implementing a ZPF, what is the default security setting when forwarding traffic between two interfaces in the same zone?",
    "answers": [
        { "text": "Traffic between interfaces in the same zone is not subject to any policy and passes freely.", "isCorrect": true },
        { "text": "Traffic between interfaces in the same zone is blocked.", "isCorrect": false },
        { "text": "Traffic between interfaces in the same zone is selectively forwarded based on Layer 3 information.", "isCorrect": false },
        { "text": "Traffic between interfaces in the same zone is selectively forwarded based on the default policy restrictions.", "isCorrect": false }
    ]
},
{
    "question": "You have been asked to implement a data integrity program to protect data files that need to be electronically downloaded by the sales staff. You have decided to use the strongest hashing algorithm available on your systems. Which hash algorithm would you select?",
    "answers": [
        { "text": "AES", "isCorrect": false },
        { "text": "SHA-1", "isCorrect": false },
        { "text": "SHA-256", "isCorrect": true },
        { "text": "MD5", "isCorrect": false }
    ]
},
{
    "question": "What is the purpose of a digital certificate?",
    "answers": [
        { "text": "It authenticates a website and establishes a secure connection to exchange confidential data.", "isCorrect": true },
        { "text": "It guarantees that a website has not been hacked.", "isCorrect": false },
        { "text": "It ensures that the person who is gaining access to a network device is authorized.", "isCorrect": false },
        { "text": "It provides proof that data has a traditional signature attached.", "isCorrect": false }
    ]
},
{
    "question": "Why can ACLs give a false sense of security if overly relied upon as a network security technology?",
    "answers": [
        { "text": "ACLs can be applied to network interfaces in one direction only.", "isCorrect": false },
        { "text": "ACLs only log denied traffic, not permitted traffic.", "isCorrect": false },
        { "text": "Packets are permitted by default when ACL statements don’t match.", "isCorrect": false },
        { "text": "Attackers can determine which IP addresses, protocols, and ports are allowed by ACLs.", "isCorrect": true }
    ]
},
{
    "question": "What is one of the first actions performed on Internet-connected smart devices before being put into service?",
    "answers": [
        { "text": "Connect the device to the network and download firmware updates.", "isCorrect": false },
        { "text": "Change the default administrator credentials.", "isCorrect": true },
        { "text": "Install the device in a physically secure environment.", "isCorrect": false },
        { "text": "Configure the device to communicate with a central server.", "isCorrect": false }
    ]
},
{
    "question": "Which two statements describe the effects of the access control list wildcard mask 0.0.0.31? (Choose two.)",
    "answers": [
        { "text": "The first 27 bits of a supplied IP address will be matched.", "isCorrect": true },
        { "text": "The first 31 bits of a supplied IP address will be ignored.", "isCorrect": false },
        { "text": "The last 5 bits of a supplied IP address will be matched.", "isCorrect": false },
        { "text": "The last 5 bits of a supplied IP address will be ignored.", "isCorrect": true },
        { "text": "The last 27 bits of a supplied IP address will be ignored.", "isCorrect": false },
        { "text": "The first 31 bits of a supplied IP address will be matched.", "isCorrect": false }
    ]
},
{
    "question": "A cybersecurity analyst is going to verify security alerts using the Security Onion. Which tool should the analyst visit first?",
    "answers": [
        { "text": "Bro", "isCorrect": false },
        { "text": "ELK", "isCorrect": false },
        { "text": "CapME", "isCorrect": false },
        { "text": "Sguil", "isCorrect": true }
    ]
},
{
  "question": "Which network logs contain information that a security analyst can use to determine if packets received from the web are in response to legitimate requests or are part of an exploit?",
  "answers": [
      { "text": "NetFlow logs", "isCorrect": false },
      { "text": "content filter logs", "isCorrect": false },
      { "text": "NBAR logs", "isCorrect": false },
      { "text": "proxy logs", "isCorrect": true }
  ]
},
{
"question": "Why must a network administrator consider more security features in addition to firewalls to achieve the best possible network security?",
"answers": [
    { "text": "Experienced firewall specialists may not always be available, requiring the deployment of less complex security technologies.", "isCorrect": false },
    { "text": "Firewalls are expensive to implement, given that there are less expensive security technologies.", "isCorrect": false },
    { "text": "Firewall configuration often takes too much time, and network technicians are more effective if deployed in other security areas.", "isCorrect": false },
    { "text": "Firewalls typically do not stop intrusions from hosts within a network or zone.", "isCorrect": true }
]
},
{
"question": "What is an example of transaction data recorded by a network security monitoring tool?",
"answers": [
    { "text": "source and destination port numbers of two network endpoints", "isCorrect": false },
    { "text": "requests and replies between the two network endpoints", "isCorrect": true },
    { "text": "source and destination IP addresses of two network endpoints", "isCorrect": false },
    { "text": "the IP code for the protocol in use", "isCorrect": false }
]
},
{
"question": "Which term describes the ability of a web server to keep a log of the users who access the server, as well as the length of time they use it?",
"answers": [
  { "text": "assigning permissions", "isCorrect": false },
  { "text": "authentication", "isCorrect": false },
  { "text": "accounting", "isCorrect": true },
  { "text": "authorization", "isCorrect": false }
]
},
{
"question": "An investigator finds a USB drive at a crime scene and wants to present it as evidence in court. The investigator takes the USB drive and creates a forensic image of it and takes a hash of both the original USB device and the image that was created. What is the investigator attempting to prove about the USB drive when the evidence is submitted in court?",
"answers": [
{ "text": "The data is all there.", "isCorrect": false },
{ "text": "An exact copy cannot be made of a device.", "isCorrect": false },
{ "text": "The investigator found a USB drive and was able to make a copy of it.", "isCorrect": false },
{ "text": "The data in the image is an exact copy and nothing has been altered by the process.", "isCorrect": true }
]
},
{
"question": "What does it indicate if the timestamp in the HEADER section of a syslog message is preceded by a period or asterisk symbol?",
"answers": [
  { "text": "The timestamp represents the round trip duration value.", "isCorrect": false },
  { "text": "The syslog message indicates the time an email is received.", "isCorrect": false },
  { "text": "The syslog message should be treated with high priority.", "isCorrect": false },
  { "text": "There is a problem associated with NTP.", "isCorrect": true }
]
},
{
"question": "A SOHO office is using a public cloud provider to host their website. The IT technician is choosing an approach to protect transaction data between the website and visitors from the internet. Which type of encryption key management method should the technician choose?",
"answers": [
  { "text": "public key encryption", "isCorrect": true },
  { "text": "private key encryption", "isCorrect": false },
  { "text": "secret key encryption", "isCorrect": false },
  { "text": "shared-secret key encryption", "isCorrect": false }
]
},
{
"question": "What are two benefits offered by a zone-based policy firewall on a Cisco router? (Choose two.)",
"answers": [
  { "text": "Any interface can be configured with both a ZPF and an IOS Classic Firewall.", "isCorrect": false },
  { "text": "Policies are applied to unidirectional traffic between zones.", "isCorrect": true },
  { "text": "Virtual and physical interfaces are put in different zones to enhance security.", "isCorrect": false },
  { "text": "Policies are defined exclusively with ACLs.", "isCorrect": false },
  { "text": "Policies provide scalability because they are easy to read and troubleshoot.", "isCorrect": true }
]
},
{
"question": "Why could network Syslog servers be a target for threat actors?",
"answers": [
  { "text": "Syslog servers are usually not installed behind a firewall.", "isCorrect": false },
  { "text": "Syslog servers contain configurations and passwords for all devices on the network.", "isCorrect": false },
  { "text": "Syslog data could be encrypted by the attacker and used as ransomware.", "isCorrect": false },
  { "text": "Syslog servers could contain information that could lead to the detection of an exploit by a hacker.", "isCorrect": true }
]
},
{
"question": "What effect does the use of hashing have on stored passwords?",
"answers": [
  { "text": "Less digital storage is required for user credentials that include hashed passwords.", "isCorrect": false },
  { "text": "Enforces the use of complex passwords.", "isCorrect": false },
  { "text": "The recovery of forgotten passwords is faster.", "isCorrect": false },
  { "text": "The password cannot be restored from the stored unique hash.", "isCorrect": true }
]
},
{
"question": "What is used by an application layer gateway to connect to remote servers on behalf of clients?",
"answers": [
  { "text": "packet filter", "isCorrect": false },
  { "text": "stateful firewall", "isCorrect": false },
  { "text": "intrusion detection system", "isCorrect": false },
  { "text": "proxy server", "isCorrect": true }
]
},
{
"question": "Which component of the zero trust security model focuses on secure access when an API, a microservice, or a container is accessing a database within an application?",
"answers": [
  { "text": "workplace", "isCorrect": false },
  { "text": "workload", "isCorrect": true },
  { "text": "workflow", "isCorrect": false },
  { "text": "workforce", "isCorrect": false }
]
},
{
"question": "Match the security concept to the description.",
"answers": [
  { "text": "risk - the likelihood of undesirable consequences", "isCorrect": true },
  { "text": "exploit - a mechanism used to compromise an asset", "isCorrect": true },
  { "text": "vulnerability - a weakness in a system", "isCorrect": true },
  { "text": "threat - a potential danger to an asset", "isCorrect": true }
]
},
{
"question": "In a hierarchical CA topology, where can a subordinate CA obtain a certificate for itself?",
"answers": [
{ "text": "from the root CA or another subordinate CA at the same level", "isCorrect": false },
{ "text": "from the root CA or another subordinate CA at a higher level", "isCorrect": true },
{ "text": "from the root CA or from self-generation", "isCorrect": false },
{ "text": "from the root CA only", "isCorrect": false },
{ "text": "from the root CA or another subordinate CA anywhere in the tree", "isCorrect": false }
]
},
{
"question": "Each day, a security analyst spends time examining logs and events from different systems and applications to quickly detect security threats. What function of the Security Information Event Management (SIEM) technology does this action represent?",
"answers": [
  { "text": "aggregation", "isCorrect": false },
  { "text": "correlation", "isCorrect": true },
  { "text": "retention", "isCorrect": false },
  { "text": "forensic analysis", "isCorrect": false }
]
},
{
"question": "Which network security tool can detect open TCP and UDP ports on most versions of Microsoft Windows?",
"answers": [
  { "text": "Nmap", "isCorrect": false },
  { "text": "L0phtcrack", "isCorrect": false },
  { "text": "SuperScan", "isCorrect": true },
  { "text": "Zenmap", "isCorrect": false }
]
},
{
"question": "A security technician is evaluating a new operations security proposal designed to limit access to all servers. What is an advantage of using network security testing to evaluate the new proposal?",
"answers": [
  { "text": "Network security testing is most effective when deploying new security proposals.", "isCorrect": false },
  { "text": "Network security testing is simple because it requires just one test to evaluate the new proposal.", "isCorrect": false },
  { "text": "Network security testing proactively evaluates the effectiveness of the proposal before any real threat occurs.", "isCorrect": true },
  { "text": "Network security testing is specifically designed to evaluate administrative tasks involving server and workstation access.", "isCorrect": false }
]
},
{
"question": "What information does the SIEM network security management tool provide to network administrators?",
"answers": [
  { "text": "detection of open TCP and UDP ports", "isCorrect": false },
  { "text": "real time reporting and analysis of security events", "isCorrect": true },
  { "text": "assessment of system security configurations", "isCorrect": false },
  { "text": "a map of network systems and services", "isCorrect": false }
]
},
{
"question": "What network scanning tool has advanced features that allows it to use decoy hosts to mask the source of the scan?",
"answers": [
  { "text": "Nessus", "isCorrect": false },
  { "text": "Nmap", "isCorrect": true },
  { "text": "Tripwire", "isCorrect": false },
  { "text": "Metasploit", "isCorrect": false }
]
},
{
"question": "A new person has joined the security operations team for a manufacturing plant. What is a common scope of responsibility for this person?",
"answers": [
  { "text": "managing redundancy operations for all systems", "isCorrect": false },
  { "text": "data security on host devices", "isCorrect": false },
  { "text": "physical and logical security of all business personnel", "isCorrect": false },
  { "text": "day-to-day maintenance of network security", "isCorrect": true }
]
},
{
"question": "Which security test is appropriate for detecting system weaknesses such as misconfiguration, default passwords, and potential DoS targets?",
"answers": [
  { "text": "penetration testing", "isCorrect": false },
  { "text": "vulnerability scanning", "isCorrect": true },
  { "text": "integrity checkers", "isCorrect": false },
  { "text": "network scanning", "isCorrect": false }
]
},
{
"question": "What type of network security test would be used by network administrators for detection and reporting of changes to network systems?",
"answers": [
  { "text": "penetration testing", "isCorrect": false },
  { "text": "network scanning", "isCorrect": false },
  { "text": "integrity checking", "isCorrect": true },
  { "text": "vulnerability scanning", "isCorrect": false }
]
},
{
"question": "Which network security tool allows an administrator to test and detect weak passwords?",
"answers": [
  { "text": "Metasploit", "isCorrect": false },
  { "text": "L0phtcrack", "isCorrect": true },
  { "text": "Tripwire", "isCorrect": false },
  { "text": "Nessus", "isCorrect": false }
]
},
{
"question": "What are two tasks that can be accomplished with the Nmap and Zenmap network tools? (Choose two.)",
"answers": [
  { "text": "identification of Layer 3 protocol support on hosts", "isCorrect": true },
  { "text": "validation of IT system configuration", "isCorrect": false },
  { "text": "password auditing", "isCorrect": false },
  { "text": "TCP and UDP port scanning", "isCorrect": true },
  { "text": "password recovery", "isCorrect": false }
]
},
{
"question": "What type of security test uses simulated attacks to determine possible consequences of a real threat?",
"answers": [
  { "text": "penetration testing", "isCorrect": true },
  { "text": "vulnerability scanning", "isCorrect": false },
  { "text": "network scanning", "isCorrect": false },
  { "text": "integrity checking", "isCorrect": false }
]
},
{
"question": "What function is provided by the Tripwire network security tool?",
"answers": [
  { "text": "password recovery", "isCorrect": false },
  { "text": "IDS signature development", "isCorrect": false },
  { "text": "logging of security events", "isCorrect": false },
  { "text": "security policy compliance", "isCorrect": true }
]
},
{
"question": "What are three disclosure exemptions that pertain to the FOIA? (Choose three.)",
"answers": [
    { "text": "law enforcement records that implicate one of a set of enumerated concerns", "isCorrect": true },
    { "text": "information specifically non-exempt by statue", "isCorrect": false },
    { "text": "confidential business information", "isCorrect": true },
    { "text": "non-geological information regarding wells", "isCorrect": false },
    { "text": "national security and foreign policy information", "isCorrect": true },
    { "text": "public information from financial institutions", "isCorrect": false }
]
},
{
"question": "A company is developing security policies. Which security policy would address the rules that determine access to and use of network resources and define the consequences of policy violations?",
"answers": [
    { "text": "data policy", "isCorrect": false },
    { "text": "remote access policy", "isCorrect": false },
    { "text": "acceptable use policy", "isCorrect": true },
    { "text": "password policy", "isCorrect": false }
]
},
{
"question": "Which framework should be recommended for establishing a comprehensive information security management system in an organization?",
"answers": [
    { "text": "ISO/IEC 27000", "isCorrect": true },
    { "text": "ISO OSI model", "isCorrect": false },
    { "text": "CIA Triad", "isCorrect": false },
    { "text": "NIST/NICE framework", "isCorrect": false }
]
},
{
"question": "If a person knowingly accesses a government computer without permission, what federal act laws would the person be subject to?",
"answers": [
    { "text": "SOX", "isCorrect": false },
    { "text": "ECPA", "isCorrect": false },
    { "text": "GLBA", "isCorrect": false },
    { "text": "CFAA", "isCorrect": true }
]
},  
{
  "question": "What type of security test uses simulated attacks to determine possible consequences of a real threat?",
  "answers": [
      { "text": "penetration testing", "isCorrect": true },
      { "text": "integrity checking", "isCorrect": false },
      { "text": "network scanning", "isCorrect": false },
      { "text": "vulnerability scanning", "isCorrect": false }
  ]
},
{
  "question": "What are two tasks that can be accomplished with the Nmap and Zenmap network tools? (Choose two.)",
  "answers": [
      { "text": "Identification of Layer 3 protocol support on hosts", "isCorrect": true },
      { "text": "Password recovery", "isCorrect": false },
      { "text": "TCP and UDP port scanning", "isCorrect": true },
      { "text": "Validation of IT system configuration", "isCorrect": false },
      { "text": "Password auditing", "isCorrect": false }
  ]
},
{
  "question": "Which network security tool can detect open TCP and UDP ports on most versions of Microsoft Windows?",
  "answers": [
      { "text": "L0phtcrack", "isCorrect": false },
      { "text": "Zenmap", "isCorrect": false },
      { "text": "SuperScan", "isCorrect": true },
      { "text": "Nmap", "isCorrect": false }
  ]
},
{
  "question": "Match the network security testing tool with the correct function. (Not all options are used.)",
  "answers": [
      { "text": "Tripwire - used to assess if network devices are compliant with network security policies", "isCorrect": true },
      { "text": "Nessus - used to scan systems for software vulnerabilities", "isCorrect": true },
      { "text": "Nmap - used for Layer 3 port scanning", "isCorrect": true }
  ]
},
{
  "question": "Match the command line tool with its description.",
  "answers": [
      { "text": "ipconfig - Displays TCP/IP settings (IP address, subnet mask, default gateway, DNS, and MAC information.)", "isCorrect": true },
      { "text": "netcat - Gathers information from TCP and UDP network connections and can be used for port scanning, monitoring, banner grabbing, and file copying.", "isCorrect": true },
      { "text": "hping - Assembles and analyzes packets for port scanning, path discovery, OS fingerprinting, and firewall testing.", "isCorrect": true },
      { "text": "nslookup - Queries a DNS server to help troubleshoot a DNS database.", "isCorrect": true }
  ]
},
{
  "question": "What three services are offered by FireEye? (Choose three.)",
  "answers": [
      { "text": "deploys incident detection rule sets to network security tools", "isCorrect": false },
      { "text": "creates firewall rules dynamically", "isCorrect": false },
      { "text": "identifies and stops email threat vectors", "isCorrect": true },
      { "text": "identifies and stops latent malware on files", "isCorrect": true },
      { "text": "subjects all traffic to deep packet inspection analysis", "isCorrect": false },
      { "text": "blocks attacks across the web", "isCorrect": true }
  ]
},
{
    "question": "What is a characteristic of CybOX?",
    "answers": [
        { "text": "It is the specification for an application layer protocol that allows the communication of CTI over HTTPS.", "isCorrect": false },
        { "text": "It enables the real-time exchange of cyberthreat indicators between the U.S. Federal Government and the private sector.", "isCorrect": false },
        { "text": "It is a set of standardized schemata for specifying, capturing, characterizing, and communicating events and properties of network operations.", "isCorrect": true },
        { "text": "It is a set of specifications for exchanging cyberthreat information between organizations.", "isCorrect": false }
    ]
},
{
    "question": "What three security tools does Cisco Talos maintain security incident detection rule sets for? (Choose three.)",
    "answers": [
        { "text": "ClamAV", "isCorrect": true },
        { "text": "Snort", "isCorrect": true },
        { "text": "Socat", "isCorrect": false },
        { "text": "NetStumbler", "isCorrect": false },
        { "text": "SpamCop", "isCorrect": true }
    ]
},
{
    "question": "Which security organization maintains a list of common vulnerabilities and exposures (CVE) and is used by prominent security organizations?",
    "answers": [
        { "text": "CIS", "isCorrect": false },
        { "text": "SecurityNewsWire", "isCorrect": false },
        { "text": "MITRE", "isCorrect": true },
        { "text": "SANDS", "isCorrect": false }
    ]
},
{
    "question": "As a Cybersecurity Analyst, it is very important to keep current. What network security organization maintains this weekly digest called NewsBites?",
    "answers": [
        { "text": "MITRE", "isCorrect": false },
        { "text": "CIS", "isCorrect": false },
        { "text": "SANDS", "isCorrect": true },
        { "text": "(ISC)2", "isCorrect": false }
    ]
},
{
    "question": "A network administrator is creating a network profile to generate a network baseline. What is included in the critical asset address space element?",
    "answers": [
        { "text": "the IP addresses or the logical location of essential systems or data", "isCorrect": true },
        { "text": "the time between the establishment of a data flow and its termination", "isCorrect": false },
        { "text": "the TCP and UDP daemons and ports that are allowed to be open on the server", "isCorrect": false },
        { "text": "the list of TCP or UDP processes that are available to accept data", "isCorrect": false }
    ]
},
{
    "question": "When a server profile for an organization is being established, which element describes the TCP and UDP daemons and ports that are allowed to be open on the server?",
    "answers": [
        { "text": "service accounts", "isCorrect": false },
        { "text": "listening ports", "isCorrect": true },
        { "text": "software environment", "isCorrect": false },
        { "text": "critical asset address space", "isCorrect": false }
    ]
},
{
    "question": "The IT security personnel of an organization notice that the web server deployed in the DMZ is frequently targeted by threat actors. The decision is made to implement a patch management system to manage the server. Which risk management strategy method is being used to respond to the identified risk?",
    "answers": [
        { "text": "risk retention", "isCorrect": false },
        { "text": "risk sharing", "isCorrect": false },
        { "text": "risk reduction", "isCorrect": true },
        { "text": "risk avoidance", "isCorrect": false }
    ]
},
{
    "question": "Which class of metric in the CVSS Base Metric Group defines the features of the exploit such as the vector, complexity, and user interaction required by the exploit?",
    "answers": [
        { "text": "Exploitability", "isCorrect": true },
        { "text": "Exploit Code Maturity", "isCorrect": false },
        { "text": "Impact", "isCorrect": false },
        { "text": "Modified Base", "isCorrect": false }
    ]
},
{
    "question": "In what order are the steps in the vulnerability management life cycle conducted?",
    "answers": [
        { "text": "discover, prioritize assets, assess, remediate, report, verify", "isCorrect": false },
        { "text": "discover, prioritize assets, assess, remediate, verify, report", "isCorrect": false },
        { "text": "discover, assess, prioritize assets, report, remediate, verify", "isCorrect": false },
        { "text": "discover, prioritize assets, assess, report, remediate, verify", "isCorrect": true }
    ]
},      
  {
      "question": "An organization has implemented antivirus software. What type of security control did the company implement?",
      "answers": [
          { "text": "detective control", "isCorrect": false },
          { "text": "compensative control", "isCorrect": false },
          { "text": "deterrent control", "isCorrect": false },
          { "text": "recovery control", "isCorrect": true }
      ]
  },
  {
      "question": "What is the first step taken in risk assessment?",
      "answers": [
          { "text": "Identify threats and vulnerabilities and the matching of threats with vulnerabilities.", "isCorrect": true },
          { "text": "Compare to any ongoing risk assessment as a means of evaluating risk management effectiveness.", "isCorrect": false },
          { "text": "Establish a baseline to indicate risk before security controls are implemented.", "isCorrect": false },
          { "text": "Perform audits to verify threats are eliminated.", "isCorrect": false }
      ]
  },
  {
    "question": "A company manages sensitive customer data for multiple clients. The current authentication mechanism to access the database is username and passphrase. The company is reviewing the risk of employee credential compromise that may lead to a data breach and decides to take action to mitigate the risk before further actions can be taken to eliminate the risk. Which action should the company take for now?",
    "answers": [
        { "text": "Install fingerprint or retinal scanners.", "isCorrect": false },
        { "text": "Implement multi-factor authentication.", "isCorrect": true },
        { "text": "Purchase an insurance policy.", "isCorrect": false },
        { "text": "Enhance data encryption with an advanced algorithm.", "isCorrect": false }
    ]
},
  {
      "question": "Why would threat actors prefer to use a zero-day attack in the Cyber Kill Chain weaponization phase?",
      "answers": [
          { "text": "to launch a DoS attack toward the target", "isCorrect": false },
          { "text": "to get a free malware package", "isCorrect": false },
          { "text": "to avoid detection by the target", "isCorrect": true },
          { "text": "to gain faster delivery of the attack on the target", "isCorrect": false }
      ]
  },
  {
      "question": "A threat actor has identified the potential vulnerability of the web server of an organization and is building an attack. What will the threat actor possibly do to build an attack weapon?",
      "answers": [
          { "text": "Create a point of persistence by adding services.", "isCorrect": false },
          { "text": "Install a webshell on the web server for persistent access.", "isCorrect": false },
          { "text": "Obtain an automated tool in order to deliver the malware payload through the vulnerability.", "isCorrect": true },
          { "text": "Collect credentials of the web server developers and administrators.", "isCorrect": false }
      ]
  },
  {
      "question": "According to NIST standards, which incident response stakeholder is responsible for coordinating an incident response with other stakeholders to minimize the damage of an incident?",
      "answers": [
          { "text": "IT support", "isCorrect": false },
          { "text": "human resources", "isCorrect": false },
          { "text": "legal department", "isCorrect": false },
          { "text": "management", "isCorrect": true }
      ]
  },
  {
      "question": "Which meta-feature element in the Diamond Model describes information gained by the adversary?",
      "answers": [
          { "text": "resources", "isCorrect": false },
          { "text": "results", "isCorrect": true },
          { "text": "direction", "isCorrect": false },
          { "text": "methodology", "isCorrect": false }
      ]
  },
  {
      "question": "The manager of a new data center requisitions magnetic door locks. The locks will require employees to swipe an ID card to open. Which type of security control is being implemented?",
      "answers": [
          { "text": "corrective", "isCorrect": false },
          { "text": "compensative", "isCorrect": false },
          { "text": "preventive", "isCorrect": true },
          { "text": "recovery", "isCorrect": false }
      ]
  },
  {
      "question": "What is a statement of applicability (SOA)?",
      "answers": [
          { "text": "It stipulates total compliance with NIST.", "isCorrect": false },
          { "text": "It sets out a broad framework of network protocols used and their implementations.", "isCorrect": false },
          { "text": "It allows for the tailoring of available control objectives and controls to best meet its priorities around confidentiality, integrity, and availability.", "isCorrect": true },
          { "text": "It is used as an audit point for network device implementation.", "isCorrect": false }
      ]
  },
  {
      "question": "An organization is developing a data governance program that follows regulations and policies. Which role in the program is responsible for ensuring compliance with policies and procedures, assigning the proper classification to information assets, and determining the criteria for accessing information assets?",
      "answers": [
          { "text": "data controller", "isCorrect": false },
          { "text": "data custodian", "isCorrect": false },
          { "text": "data owner", "isCorrect": true },
          { "text": "data protection officer", "isCorrect": false }
      ]
  },
    {
        "question": "Which step in the Vulnerability Management Life Cycle performs inventory of all assets across the network and identifies host details, including operating system and open services?",
        "answers": [
            { "text": "Assess", "isCorrect": false },
            { "text": "Discover", "isCorrect": true },
            { "text": "Remediate", "isCorrect": false },
            { "text": "Prioritize assets", "isCorrect": false }
        ]
    },
    {
        "question": "Which two classes of metrics are included in the CVSS Base Metric Group? (Choose two.)",
        "answers": [
            { "text": "Confidentiality Requirement", "isCorrect": false },
            { "text": "Modified Base", "isCorrect": false },
            { "text": "Exploit Code Maturity", "isCorrect": false },
            { "text": "Exploitability", "isCorrect": true },
            { "text": "Impact metrics", "isCorrect": true }
        ]
    },
    {
        "question": "Which type of evidence cannot prove an IT security fact on its own?",
        "answers": [
            { "text": "best", "isCorrect": false },
            { "text": "corroborative", "isCorrect": false },
            { "text": "indirect", "isCorrect": true },
            { "text": "hearsay", "isCorrect": false }
        ]
    },
    {
        "question": "What three tasks are accomplished by a comprehensive security policy? (Choose three.)",
        "answers": [
            { "text": "useful for management", "isCorrect": false },
            { "text": "defines legal consequences of violations", "isCorrect": true },
            { "text": "is not legally binding", "isCorrect": false },
            { "text": "gives security staff the backing of management", "isCorrect": true },
            { "text": "vagueness", "isCorrect": false },
            { "text": "sets rules for expected behavior", "isCorrect": true }
        ]
    },
    {
        "question": "To ensure that the chain of custody is maintained, what three items should be logged about evidence that is collected and analyzed after a security incident has occurred? (Choose three.)",
        "answers": [
            { "text": "measures used to prevent an incident", "isCorrect": false },
            { "text": "time and date the evidence was collected", "isCorrect": true },
            { "text": "extent of the damage to resources and assets", "isCorrect": false },
            { "text": "vulnerabilities that were exploited in an attack", "isCorrect": false },
            { "text": "serial numbers and hostnames of devices used as evidence", "isCorrect": true },
            { "text": "location of all evidence", "isCorrect": true }
        ]
    },
    {
        "question": "Which meta-feature element in the Diamond Model classifies the general type of intrusion event?",
        "answers": [
            { "text": "phase", "isCorrect": false },
            { "text": "results", "isCorrect": false },
            { "text": "methodology", "isCorrect": true },
            { "text": "direction", "isCorrect": false }
        ]
    },
    {
        "question": "What key considerations does a business impact analysis (BIA) examine? (Choose four.)",
        "answers": [
            { "text": "Recovery time objectives (RTOs)", "isCorrect": true },
            { "text": "Recovery point objectives (RPOs)", "isCorrect": true },
            { "text": "Recovery point times (RPTs)", "isCorrect": false },
            { "text": "Mean time between objectives (RBOs)", "isCorrect": false },
            { "text": "Mean time between failures (MTBF)", "isCorrect": true },
            { "text": "Mean time to repair (MTTR)", "isCorrect": true }
        ]
    },
    {
        "question": "Which type of controls help uncover new potential threats?",
        "answers": [
            { "text": "Preventive controls", "isCorrect": false },
            { "text": "Detective controls", "isCorrect": true },
            { "text": "Corrective controls", "isCorrect": false }
        ]
    },
    {
        "question": "What is one limitation of a stateful firewall?",
        "answers": [
            { "text": "not as effective with UDP- or ICMP-based traffic", "isCorrect": true },
            { "text": "poor log information", "isCorrect": false },
            { "text": "cannot filter unnecessary traffic", "isCorrect": false },
            { "text": "weak user authentication", "isCorrect": false }
        ]
    },
    {
        "question": "What are two benefits of using a ZPF rather than a Classic Firewall? (Choose two.)",
        "answers": [
            { "text": "With ZPF, the router will allow packets unless they are explicitly blocked.", "isCorrect": false },
            { "text": "ZPF policies are easy to read and troubleshoot.", "isCorrect": true },
            { "text": "Multiple inspection actions are used with ZPF.", "isCorrect": false },
            { "text": "The ZPF is not dependent on ACLs.", "isCorrect": true },
            { "text": "ZPF allows interfaces to be placed into zones for IP inspection.", "isCorrect": false }
        ]
    },
    {
        "question": "Which algorithm is used with symmetric encryption to provide confidentiality?",
        "answers": [
            { "text": "RSA", "isCorrect": false },
            { "text": "MD5", "isCorrect": false },
            { "text": "AES", "isCorrect": true },
            { "text": "ECC", "isCorrect": false }
        ]
    },
    {
        "question": "Which method tries all possible passwords until a match is found?",
        "answers": [
            { "text": "cloud", "isCorrect": false },
            { "text": "cryptographic", "isCorrect": false },
            { "text": "birthday", "isCorrect": false },
            { "text": "brute force", "isCorrect": true },
            { "text": "rainbow tables", "isCorrect": false },
            { "text": "dictionary", "isCorrect": false }
        ]
    }                              
  ]           

export default questions2;
