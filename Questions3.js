const questions3 = [
    {
        "question": "What kind of devices can be part of a botnet used in a DDoS attack?",
        "answers": [
            { "text": "Only personal computers.", "isCorrect": false },
            { "text": "Only mobile devices.", "isCorrect": false },
            { "text": "Only servers.", "isCorrect": false },
            { "text": "All of the above (A), (B), and (C)", "isCorrect": true }
        ]
    },
    {
        "question": "What is the core idea behind an ICMP flood attack?",
        "answers": [
            { "text": "To exploit security vulnerabilities in the target system.", "isCorrect": false },
            { "text": "To overwhelm the target with a large number of seemingly legitimate requests.", "isCorrect": true },
            { "text": "To steal sensitive data from the victim node.", "isCorrect": false },
            { "text": "To infect the target device with malware.", "isCorrect": false }
        ]
    },
    {
        "question": "ICMP flood and UDP flood attacks don't exploit vulnerabilities. What is the key concept they leverage instead?",
        "answers": [
            { "text": "Denial-of-Service principles through overwhelming traffic.", "isCorrect": true },
            { "text": "Social engineering tactics to manipulate user behavior.", "isCorrect": false },
            { "text": "Zero-day exploits that haven't been patched yet.", "isCorrect": false },
            { "text": "Hardware malfunctions in the target network devices.", "isCorrect": false }
        ]
    },
    {
        "question": "How does a Smurf attack amplify the impact of an ICMP flood attack?",
        "answers": [
            { "text": "By spoofing the source IP address in the ICMP requests.", "isCorrect": true },
            { "text": "By sending ICMP requests to a large number of random IP addresses.", "isCorrect": false },
            { "text": "By exploiting a vulnerability in the ICMP protocol itself.", "isCorrect": false },
            { "text": "By tricking the target node into sending unnecessary data transfers.", "isCorrect": false }
        ]
    },
    {
        "question": "How does a SYN flood attack exploit the TCP three-way handshake?",
        "answers": [
            { "text": "By intercepting and modifying data packets during the handshake.", "isCorrect": false },
            { "text": "By overwhelming the server with a large number of connection requests with fake source IPs.", "isCorrect": true },
            { "text": "By exploiting a vulnerability in the way the server acknowledges received packets.", "isCorrect": false },
            { "text": "By tricking the server into establishing unnecessary connections with legitimate clients.", "isCorrect": false }
        ]
    },
    {
        "question": "How do SYN Cookies help mitigate SYN flood attacks?",
        "answers": [
            { "text": "By requiring clients to solve a CAPTCHA challenge before establishing a connection.", "isCorrect": false },
            { "text": "By filtering out packets with suspicious source IP addresses.", "isCorrect": false },
            { "text": "By allowing the server to establish connections without allocating resources upfront.", "isCorrect": true },
            { "text": "By redirecting SYN packets to a different server for handling.", "isCorrect": false }
        ]
    },
    {
        "question": "Why are SSL/TLS attacks considered \"asymmetric\" in terms of resource consumption?",
        "answers": [
            { "text": "They require more complex computations on the attacker's side.", "isCorrect": false },
            { "text": "They target vulnerabilities in specific SSL/TLS implementations.", "isCorrect": false },
            { "text": "They leverage a large botnet of compromised devices for amplification.", "isCorrect": false },
            { "text": "They consume significantly more resources on the server compared to the attacker's machine.", "isCorrect": true }
        ]
    },
    {
        "question": "What are the main potential consequences of a successful HTTP flood attack on a web application?",
        "answers": [
            { "text": "Increased data latency and data corruption.", "isCorrect": false },
            { "text": "Denial-of-Service for legitimate users and server hardware failure.", "isCorrect": true },
            { "text": "Exposure of sensitive information and unauthorized user account creation.", "isCorrect": false },
            { "text": "System vulnerabilities being exploited and social engineering tactics being used.", "isCorrect": false }
        ]
    },
    {
        "question": "What is the key difference between TCP and UDP protocols in the context of a DNS flood attack?",
        "answers": [
            { "text": "TCP requires encryption, while UDP does not.", "isCorrect": false },
            { "text": "TCP is faster for data transfer, while UDP introduces delays.", "isCorrect": false },
            { "text": "TCP establishes a connection before sending data, while UDP does not.", "isCorrect": true },
            { "text": "TCP is more secure for exchanging sensitive information, while UDP is not.", "isCorrect": false }
        ]
    },
    {
        "question": "How often should hardware configurations be backed up?",
        "answers": [
            { "text": "Weekly backups contain all crucial changes.", "isCorrect": false },
            { "text": "Monthly backups risk losing too much data in case of failure.", "isCorrect": false },
            { "text": "Daily backups guarantee a recent recovery point in case of configuration issues.", "isCorrect": true },
            { "text": "Back up only when significant changes are made.", "isCorrect": false }
        ]
    },
    {
        "question": "What are two potential drawbacks of upgrading software to the newest versions?",
        "answers": [
            { "text": "Licensing costs and training are ongoing considerations, but not the biggest drawbacks here.", "isCorrect": false },
            { "text": "Compatibility issues and new bugs are potential problems with fresh software.", "isCorrect": true },
            { "text": "Limited technical support and complex rollback processes are less common concerns.", "isCorrect": false },
            { "text": "Increased traffic and decreased performance are more likely with hardware upgrades.", "isCorrect": false }
        ]
    },
    {
        "question": "What is the best practice for securing critical network segments?",
        "answers": [
            { "text": "Utilize a combination of security solutions from different vendors for redundancy.", "isCorrect": true },
            { "text": "Rely solely on the security features offered by a single NGFW vendor.", "isCorrect": false },
            { "text": "Prioritize cost-effectiveness by choosing the most affordable security features.", "isCorrect": false },
            { "text": "Implement complex security solutions even if they introduce reliability concerns.", "isCorrect": false }
        ]
    },
    {
        "question": "What is the primary benefit of network segmentation in terms of security policy enforcement?",
        "answers": [
            { "text": "It eliminates the need for complex traffic filtering rules on the firewall.", "isCorrect": false },
            { "text": "It reduces the overall cost of network security equipment and licensing.", "isCorrect": false },
            { "text": "It automatically filters all traffic between different network zones by default.", "isCorrect": false },
            { "text": "It allows for consistent security policies to be applied to specific network segments.", "isCorrect": true }
        ]
    },
    {
        "question": "What are three general requirements to consider when designing or modifying an office network, in addition to price and security?",
        "answers": [
            { "text": "User mobility, manageability, and data transfer speed.", "isCorrect": false },
            { "text": "Scalability, manageability, and availability.", "isCorrect": true },
            { "text": "Cost-effectiveness, user convenience, and ease of implementation.", "isCorrect": false },
            { "text": "Data security, internet access control, and wireless network coverage.", "isCorrect": false }
        ]
    },
    {
        "question": "Why might some network administrators require a wired Ethernet connection instead of Wi-Fi?",
        "answers": [
            { "text": "Wired connections offer a higher level of reliability and lower latency.", "isCorrect": true },
            { "text": "Wi-Fi connections are generally less secure and more susceptible to hacking.", "isCorrect": false },
            { "text": "Network administrators need to access restricted network segments not accessible on Wi-Fi.", "isCorrect": false },
            { "text": "Only certain network devices like servers require a wired connection for functionality.", "isCorrect": false }
        ]
    },
    {
        "question": "What is the primary function of a Demilitarized Zone (DMZ) in a traditional network security approach?",
        "answers": [
            { "text": "To provide a highly secure zone for storing critical company data.", "isCorrect": false },
            { "text": "To centrally manage and authenticate all devices on the network.", "isCorrect": false },
            { "text": "To encrypt all network traffic passing between different network segments.", "isCorrect": false },
            { "text": "To isolate a local area network (LAN) from the public internet.", "isCorrect": true }
        ]
    },
    {
        "question": "What is the purpose of network management platforms and tools?",
        "answers": [
            { "text": "To provide remote access and control capabilities for network devices.", "isCorrect": false },
            { "text": "To develop and deploy custom applications for specific network functions.", "isCorrect": false },
            { "text": "To automate network administration tasks and simplify management processes.", "isCorrect": true },
            { "text": "To train network administrators and provide technical support.", "isCorrect": false }
        ]
    },
    {
        "question": "What is a key limitation of using Access Control Lists (ACLs) for traffic control on routers and L3 switches?",
        "answers": [
            { "text": "ACLs cannot filter traffic based on application protocols.", "isCorrect": false },
            { "text": "They require significant processing power and can slow down network performance.", "isCorrect": false },
            { "text": "ACLs are only effective for blocking traffic, not allowing it.", "isCorrect": false },
            { "text": "They are complex to manage and maintain, especially with many allowed rules.", "isCorrect": true }
        ]
    },
    {
        "question": "What is the role of a Network Management Platform (NMP) in network administration?",
        "answers": [
            { "text": "It provides a central interface for managing and monitoring all network devices.", "isCorrect": true },
            { "text": "It automates repetitive tasks and simplifies network administration processes.", "isCorrect": false },
            { "text": "It offers a platform for developing and deploying custom network applications.", "isCorrect": false },
            { "text": "It replaces the need for a human network administrator altogether.", "isCorrect": false }
        ]
    },
    {
        "question": "What is the advantage of using a whitelist approach for web domain access?",
        "answers": [
            { "text": "It allows users to freely access any website they choose for work-related purposes.", "isCorrect": false },
            { "text": "It simplifies network administration by eliminating the need to monitor user activity.", "isCorrect": false },
            { "text": "It restricts users from accessing unauthorized websites that may contain malware.", "isCorrect": true },
            { "text": "It offers a more efficient way to identify and block malicious websites.", "isCorrect": false }
        ]
    },
    {
        "question": "How does Network Address Translation (NAT) contribute to network security?",
        "answers": [
            { "text": "It encrypts data traffic on the network, making it unreadable to attackers.", "isCorrect": false },
            { "text": "It reduces the number of public IP addresses needed, limiting attack points.", "isCorrect": true },
            { "text": "It allows for centralized logging and analysis of network activity.", "isCorrect": false },
            { "text": "It provides a secure tunnel for connecting local area networks across the internet.", "isCorrect": false }
        ]
    },
    {
        "question": "How does network device monitoring with auditing capabilities help improve security?",
        "answers": [
            { "text": "It enforces automatic password resets for all network devices at regular intervals.", "isCorrect": false },
            { "text": "It automatically corrects misconfigurations and rolls back unauthorized changes.", "isCorrect": false },
            { "text": "It restricts access to network devices by requiring two-factor authentication.", "isCorrect": false },
            { "text": "It provides insights into configuration changes and identifies who made them.", "isCorrect": true }
        ]
    },
    {
        "question": "What information can network device monitoring reveal about scanning threats?",
        "answers": [
            { "text": "The specific content or data being scanned by the detected threat.", "isCorrect": false },
            { "text": "The identity of the user or system behind the scanning activity.", "isCorrect": false },
            { "text": "The origin IP address and target of the scanning attempt on the network.", "isCorrect": true },
            { "text": "The type of malware or exploit potentially used in the scanning attempt.", "isCorrect": false }
        ]
    },
    {
        "question": "What was the primary advantage of Network Management Platforms (NMPs) compared to traditional network management methods?",
        "answers": [
            { "text": "They provided a single interface for managing various network devices and protocols.", "isCorrect": true },
            { "text": "They offered pre-written applications for specific network troubleshooting tasks.", "isCorrect": false },
            { "text": "They eliminated the need for administrators to understand network protocols like SNMP.", "isCorrect": false },
            { "text": "They completely automated network configuration and required minimal human intervention.", "isCorrect": false }
        ]
    },
    {
        "question": "What are some of the tools and resources utilized by network administrators?",
        "answers": [
            { "text": "Network management platforms for configuration, monitoring, and troubleshooting.", "isCorrect": false },
            { "text": "Programming languages like Java and Python to write custom network scripts.", "isCorrect": false },
            { "text": "User manuals and technical documentation for various network devices.", "isCorrect": false },
            { "text": "All of the above", "isCorrect": true }
        ]
    },
    {
        "question": "Why is proper network administration crucial for organizations?",
        "answers": [
            { "text": "It simplifies the process of connecting individual computers and devices.", "isCorrect": false },
            { "text": "Effective network administration ensures the proper functioning of information systems within an organization.", "isCorrect": true },
            { "text": "Network administration focuses primarily on user convenience and troubleshooting technical issues.", "isCorrect": false },
            { "text": "It eliminates the need for physical security measures to protect IT infrastructure.", "isCorrect": false }
        ]
    },
    {
        "question": "What are the three main categories of network management software?",
        "answers": [
            { "text": "Network management platforms, system administration tools, and user authentication software.", "isCorrect": false },
            { "text": "Proprietary software from network hardware vendors, open-source network management tools, and cloud-based solutions.", "isCorrect": false },
            { "text": "Network management platforms, management applications from hardware manufacturers, and third-party software for specific tasks.", "isCorrect": true },
            { "text": "Operating system management tools, network security software, and user productivity applications.", "isCorrect": false }
        ]
    },
    {
        "question": "What does a Network Management Platform (NMP) typically offer to network administrators?",
        "answers": [
            { "text": "NMPs provide a centralized platform for managing and automating various network administration tasks.", "isCorrect": true },
            { "text": "Network Management Platforms are software tools designed specifically for troubleshooting network connectivity issues.", "isCorrect": false },
            { "text": "NMPs offer a standardized interface for configuring different network devices from various manufacturers.", "isCorrect": false },
            { "text": "Network Management Platforms are primarily used for collecting and analyzing network performance data.", "isCorrect": false }
        ]
    },
    {
        "question": "What is the primary benefit of using Network Address Translation (NAT) for network security?",
        "answers": [
            { "text": "NAT encrypts all data traffic traveling between the internal network and the internet.", "isCorrect": false },
            { "text": "It reduces the number of public IP addresses needed, making it harder for attackers to identify specific targets.", "isCorrect": true },
            { "text": "NAT simplifies the process of managing firewalls and intrusion detection systems.", "isCorrect": false },
            { "text": "Network Address Translation offers a more secure alternative to using virtual private networks (VPNs).", "isCorrect": false }
        ]
    },
    {
        "question": "What is the role of an intrusion detection system (IDS) in network security?",
        "answers": [
            { "text": "An IDS encrypts all data traffic on the network to prevent unauthorized access.", "isCorrect": false },
            { "text": "It continuously monitors network activity for suspicious behavior and potential intrusions.", "isCorrect": true },
            { "text": "The primary function of an IDS is to filter incoming and outgoing traffic based on predefined security policies.", "isCorrect": false },
            { "text": "Intrusion detection systems are designed to manage and authenticate user access to network resources.", "isCorrect": false }
        ]
    },
    {
        "question": "How does whitelisting improve network security compared to blacklisting?",
        "answers": [
            { "text": "Whitelisting allows access to all websites except for those specifically blocked on the blacklist.", "isCorrect": false },
            { "text": "Both whitelisting and blacklisting offer equivalent levels of security for network access control.", "isCorrect": false },
            { "text": "Whitelisting requires less ongoing maintenance compared to managing a blacklist of unauthorized sites.", "isCorrect": false },
            { "text": "It offers a more comprehensive approach by restricting access only to pre-approved websites.", "isCorrect": true }
        ]
    },
    {
        "question": "What is the purpose of using a proxy server for internet access from workstations?",
        "answers": [
            { "text": "It allows for centralized control and monitoring of outgoing traffic to identify potential security risks.", "isCorrect": true },
            { "text": "A proxy server encrypts all data traffic between user devices and the internet.", "isCorrect": false },
            { "text": "Proxy servers function by translating private IP addresses into public addresses for internet access.", "isCorrect": false },
            { "text": "The primary function of a proxy server is to improve the overall speed and performance of web browsing.", "isCorrect": false }
        ]
    },
    {
        "question": "What security benefit does network segmentation offer?",
        "answers": [
            { "text": "Network segmentation simplifies the process of network troubleshooting and maintenance.", "isCorrect": false },
            { "text": "By dividing the network into functional units, it limits the potential damage caused by a security breach in one segment.", "isCorrect": true },
            { "text": "Network segmentation eliminates the need for firewalls and other network security controls.", "isCorrect": false },
            { "text": "It reduces the overall complexity of network management and administration tasks.", "isCorrect": false }
        ]
    },
    {
        "question": "What is the main principle to secure Wi-Fi networks?",
        "answers": [
            { "text": "To completely block any unauthorized access.", "isCorrect": true },
            { "text": "To make successful attacks effortless.", "isCorrect": false },
            { "text": "To hide the network name (SSID).", "isCorrect": false },
            { "text": "To make attacks less profitable for attackers.", "isCorrect": false }
        ]
    },
    {
        "question": "Why is Wi-Fi network security important?",
        "answers": [
            { "text": "To prevent users from connecting to the network.", "isCorrect": false },
            { "text": "To maintain a strong Wi-Fi signal.", "isCorrect": false },
            { "text": "To protect data from unauthorized access and eavesdropping.", "isCorrect": true },
            { "text": "To limit the number of devices that can connect.", "isCorrect": false }
        ]
    },
    {
        "question": "What is the document called that defines the Enhanced Open (OWE) standard?",
        "answers": [
            { "text": "WPA3 security protocol specification.", "isCorrect": false },
            { "text": "Internet Engineering Task Force RFC 8110.", "isCorrect": true },
            { "text": "MAC address filtering access control list.", "isCorrect": false },
            { "text": "Rogue access point detection guidelines.", "isCorrect": false }
        ]
    },
    {
        "question": "Besides encryption and network hiding, what other methods can improve Wi-Fi security indirectly?",
        "answers": [
            { "text": "Disabling internet access for all devices.", "isCorrect": false },
            { "text": "Blocking all unknown MAC addresses.", "isCorrect": false },
            { "text": "Using wired connections whenever possible.", "isCorrect": true },
            { "text": "Increasing the number of access points.", "isCorrect": false }
        ]
    },
    {
        "question": "How does increasing the number of access points make it harder for attackers to intercept data?",
        "answers": [
            { "text": "It masks the SSID from being detected.", "isCorrect": false },
            { "text": "It requires attackers to be closer to the network.", "isCorrect": true },
            { "text": "It encrypts data packets with multiple layers.", "isCorrect": false },
            { "text": "It disrupts the connection attempts of unauthorized devices.", "isCorrect": false }
        ]
    },
    {
        "question": "How does Client Steering prioritize network bands for device connections?",
        "answers": [
            { "text": "It prioritizes the 5 GHz band for faster data transfer speeds.", "isCorrect": false },
            { "text": "It always connects devices to the 2.4 GHz band for better stability.", "isCorrect": false },
            { "text": "It assigns devices to whichever band has the least congestion.", "isCorrect": true },
            { "text": "It requires manual configuration for each device to choose a band.", "isCorrect": false }
        ]
    },
    {
        "question": "What is the main drawback of a single access point with a circular signal pattern for Wi-Fi coverage?",
        "answers": [
            { "text": "It cannot differentiate between authorized and unauthorized devices.", "isCorrect": false },
            { "text": "The signal strength is too weak for long-range connections.", "isCorrect": false },
            { "text": "It creates blind spots within buildings and extends beyond the desired area.", "isCorrect": true },
            { "text": "It is more susceptible to interference from external sources.", "isCorrect": false }
        ]
    },
    {
        "question": "What is the primary function of Auto-Healing in a Wi-Fi network?",
        "answers": [
            { "text": "To automatically adjust the Wi-Fi password for increased security.", "isCorrect": false },
            { "text": "To optimize signal strength and coverage by adjusting access point power.", "isCorrect": true },
            { "text": "To identify and block unauthorized access points impersonating the network.", "isCorrect": false },
            { "text": "To prioritize internet traffic for specific devices connected to the network.", "isCorrect": false }
        ]
    },
    {
        "question": "Why are client-side attacks becoming increasingly dangerous for enterprises?",
        "answers": [
            { "text": "There is a growing number of scripts loaded from third-parties on websites.", "isCorrect": false },
            { "text": "Because they target outdated server-side security measures.", "isCorrect": false },
            { "text": "Enterprises have less control over user devices compared to their own servers.", "isCorrect": true },
            { "text": "Client-side security solutions are not as effective as server-side solutions.", "isCorrect": false }
        ]
    },
    {
        "question": "What type of data handled on the client-side makes it a target for attackers?",
        "answers": [
            { "text": "Website layout and design elements", "isCorrect": false },
            { "text": "Login credentials for social media accounts", "isCorrect": false },
            { "text": "Anonymized browsing history data", "isCorrect": false },
            { "text": "Personally identifiable information (PI)", "isCorrect": true }
        ]
    },
    {
        "question": "Which of the following is NOT recommended as a client-side attack prevention strategy?",
        "answers": [
            { "text": "Regularly updating software and applications on the client-side.", "isCorrect": false },
            { "text": "Implementing Content Security Policies (CSPs) to control script behavior.", "isCorrect": false },
            { "text": "Splitting front-end applications into smaller, more isolated components.", "isCorrect": false },
            { "text": "Storing sensitive website data in a dedicated and easily accessible meta field.", "isCorrect": true }
        ]
    },
    {
        "question": "Why is protecting first-party JavaScript from tampering attempts important?",
        "answers": [
            { "text": "To prevent unauthorized modification of website design elements.", "isCorrect": false },
            { "text": "To ensure the proper functionality and behavior of website features.", "isCorrect": true },
            { "text": "To safeguard sensitive information stored within the JavaScript code.", "isCorrect": false },
            { "text": "To comply with licensing agreements for third-party libraries used in the code.", "isCorrect": false }
        ]
    },
    {
        "question": "What is the main technique used in a Cross-Site Scripting (XSS) attack?",
        "answers": [
            { "text": "Injecting malicious code into a trusted website.", "isCorrect": true },
            { "text": "Exploiting weaknesses in user authentication protocols.", "isCorrect": false },
            { "text": "Tricking users into downloading infected software attachments.", "isCorrect": false },
            { "text": "Disrupting communication between a web server and a user's browser.", "isCorrect": false }
        ]
    },
    {
        "question": "What is the similarity between XSS attacks and Malvertising attacks?",
        "answers": [
            { "text": "They both target vulnerabilities in server-side security measures.", "isCorrect": false },
            { "text": "They both rely on social engineering tactics to trick users.", "isCorrect": false },
            { "text": "They both involve injecting malicious code into legitimate websites.", "isCorrect": true },
            { "text": "They both require users to click on suspicious links or attachments.", "isCorrect": false }
        ]
    },
    {
        "question": "What is the BEST way to protect against XSS and Malvertising attacks?",
        "answers": [
            { "text": "Relying solely on web browser security settings and extensions.", "isCorrect": false },
            { "text": "Combining server-side security measures with user awareness training.", "isCorrect": true },
            { "text": "Installing antivirus software that specifically targets web-based threats.", "isCorrect": false },
            { "text": "Avoiding all online interactions with websites that display advertisements.", "isCorrect": false }
        ]
    },
    {
        "question": "Why are web applications becoming increasingly targeted by attackers?",
        "answers": [
            { "text": "They are more complex and have more vulnerabilities than traditional applications.", "isCorrect": false },
            { "text": "They often store sensitive customer data that attackers can exploit.", "isCorrect": true },
            { "text": "They are easier to access remotely compared to internal business applications.", "isCorrect": false },
            { "text": "They require less maintenance and security updates compared to other software.", "isCorrect": false }
        ]
    },
    {
        "question": "What is the primary function of a Web Application Firewall (WAF)?",
        "answers": [
            { "text": "To encrypt data communication between the web application and users.", "isCorrect": false },
            { "text": "To continuously monitor user activity and identify suspicious behavior.", "isCorrect": false },
            { "text": "To detect and block attacks targeting vulnerabilities in the application.", "isCorrect": true },
            { "text": "To prevent unauthorized access attempts to the database where sensitive data is stored.", "isCorrect": false }
        ]
    },
    {
        "question": "Why is it important to avoid connecting to untrusted Wi-Fi networks or public charging stations?",
        "answers": [
            { "text": "They may be used to intercept data communication between your device and the internet.", "isCorrect": true },
            { "text": "They can damage your device's hardware due to unstable power fluctuations.", "isCorrect": false },
            { "text": "They might force your device to automatically download and install malicious apps.", "isCorrect": false },
            { "text": "They typically have slower internet connection speeds compared to private networks.", "isCorrect": false }
        ]
    },
    {
        "question": "What are some of the potential sources for malicious mobile applications?",
        "answers": [
            { "text": "Only from unofficial third-party app stores.", "isCorrect": false },
            { "text": "Only from obscure websites offering downloadable APK files.", "isCorrect": false },
            { "text": "Rarely from official app stores like Google Play or App Store, but also possible.", "isCorrect": true },
            { "text": "Never from official app stores, as they have perfect security checks.", "isCorrect": false }
        ]
    },
    {
        "question": "What is the main advantage an attacker gains by controlling the communication channel between a mobile app and its server?",
        "answers": [
            { "text": "To disable updates for the app and prevent the user from patching vulnerabilities.", "isCorrect": false },
            { "text": "To steal login credentials and other sensitive data transmitted between the app and server.", "isCorrect": true },
            { "text": "To directly infect the user's device with additional malware.", "isCorrect": false },
            { "text": "To gain unauthorized access to the user's other installed mobile applications.", "isCorrect": false }
        ]
    },
    {
        "question": "Deeplinks are special links that can trigger actions within a mobile app. How can deeplinks be exploited in a mobile app attack?",
        "answers": [
            { "text": "By tricking the user into clicking on a deeplink that redirects them to a phishing website.", "isCorrect": false },
            { "text": "By forcing the download of a malicious app disguised as a legitimate update.", "isCorrect": false },
            { "text": "By exploiting vulnerabilities in the code that handles deeplink processing within the app.", "isCorrect": true },
            { "text": "Deeplinks cannot be used for malicious purposes because they require user confirmation.", "isCorrect": false }
        ]
    },
    {
        "question": "What is the most important security practice mobile app developers should implement to reduce vulnerabilities?",
        "answers": [
            { "text": "Restricting user access to certain features and functionalities within the app.", "isCorrect": false },
            { "text": "Implementing a security development lifecycle (SDL) with regular security testing.", "isCorrect": true },
            { "text": "Focusing on adding new features and functionalities to meet user demands quickly.", "isCorrect": false },
            { "text": "Encouraging users to report any bugs or suspicious behavior they encounter in the app.", "isCorrect": false }
        ]
    },
    {
        "question": "What is penetration testing designed to achieve?",
        "answers": [
            { "text": "To identify and fix all possible vulnerabilities in a system.", "isCorrect": false },
            { "text": "To simulate real-world attacks and expose weaknesses in a system's defenses.", "isCorrect": true },
            { "text": "To replace other security testing methods entirely.", "isCorrect": false },
            { "text": "To improve the user experience of a system by identifying usability issues.", "isCorrect": false }
        ]
    },
    {
        "question": "What is a key difference between penetration testing and a real hacking attempt?",
        "answers": [
            { "text": "Penetration testers have permission to conduct the test, while hackers don't.", "isCorrect": true },
            { "text": "Penetration testers always aim to steal sensitive data, while hackers may not.", "isCorrect": false },
            { "text": "Penetration testers use more advanced hacking tools than real hackers.", "isCorrect": false },
            { "text": "Penetration testers only exploit a limited number of vulnerabilities.", "isCorrect": false }
        ]
    },
    {
        "question": "How do vulnerability scanners typically identify security weaknesses in a system?",
        "answers": [
            { "text": "By mimicking real-world attacks and exploiting known vulnerabilities.", "isCorrect": false },
            { "text": "By manually reviewing the system's code for potential security flaws.", "isCorrect": false },
            { "text": "By searching for specific keywords and phrases related to security vulnerabilities.", "isCorrect": false },
            { "text": "By comparing the system's configuration to a database of best security practices.", "isCorrect": true }
        ]
    },
    {
        "question": "What is a disadvantage of penetration testing with a black-box approach?",
        "answers": [
            { "text": "It requires testers to have in-depth knowledge of the system's internal workings.", "isCorrect": false },
            { "text": "It may miss some vulnerabilities due to limited information and time constraints.", "isCorrect": true },
            { "text": "It is more expensive to conduct compared to other penetration testing methods.", "isCorrect": false },
            { "text": "It is less effective at identifying social engineering vulnerabilities than other approaches.", "isCorrect": false }
        ]
    },
    {
        "question": "What are the four ways to handle risks identified during the risk management process?",
        "answers": [
            { "text": "Ignore, avoid, mitigate, transfer.", "isCorrect": true },
            { "text": "Eliminate, reduce, share, accept.", "isCorrect": false },
            { "text": "Detect, prevent, investigate, remediate.", "isCorrect": false },
            { "text": "Block, whitelist, blacklist, sandbox.", "isCorrect": false }
        ]
    },
    {
        "question": "What are the four main categories of information security controls?",
        "answers": [
            { "text": "Preventive, detective, corrective, and audit controls.", "isCorrect": true },
            { "text": "Compliance controls, physical controls, administrative controls, and monitoring controls.", "isCorrect": false },
            { "text": "Network segmentation, user authentication, firewalls, and anti-virus software.", "isCorrect": false },
            { "text": "Risk analysis, threat detection, incident response, and vulnerability management.", "isCorrect": false }
        ]
    },
    {
        "question": "Why is it important to encrypt data and use secure channels for transmission?",
        "answers": [
            { "text": "To improve network performance and data transfer speeds.", "isCorrect": false },
            { "text": "To ensure data compatibility with different software applications.", "isCorrect": false },
            { "text": "To make data unreadable in case of interception during transmission or theft.", "isCorrect": true },
            { "text": "To simplify the process of data backup and recovery in case of emergencies.", "isCorrect": false }
        ]
    },
    {
        "question": "What security principle emphasized when discussing the process of revoking compromised user credentials?",
        "answers": [
            { "text": "The importance of strong password policies and regular password changes.", "isCorrect": false },
            { "text": "The need for prompt action to minimize potential damage from unauthorized access.", "isCorrect": true },
            { "text": "The benefit of using multi-factor authentication for all user accounts.", "isCorrect": false },
            { "text": "The importance of educating users on how to identify phishing attempts.", "isCorrect": false }
        ]
    },
    {
        "question": "What is the primary function of preventive controls?",
        "answers": [
            { "text": "To identify and investigate security incidents after they occur.", "isCorrect": false },
            { "text": "To prevent security incidents from happening in the first place.", "isCorrect": true },
            { "text": "To collect evidence for forensic analysis and legal proceedings.", "isCorrect": false },
            { "text": "To assess the damage caused by a security incident and implement corrective actions.", "isCorrect": false }
        ]
    },
    {
        "question": "Why are audit controls sometimes neglected by organizations?",
        "answers": [
            { "text": "They are complex to implement and require specialized skills.", "isCorrect": false },
            { "text": "They are not as effective as other types of controls in preventing security incidents.", "isCorrect": false },
            { "text": "They can be disruptive to daily operations and workflow.", "isCorrect": false },
            { "text": "They are often seen as less important than other security controls.", "isCorrect": true }
        ]
    },
    {
        "question": "What is the main benefit of mitigating a risk?",
        "answers": [
            { "text": "It completely eliminates the possibility of the risk ever happening.", "isCorrect": false },
            { "text": "It transfers the responsibility for managing the risk to a third party.", "isCorrect": false },
            { "text": "It reduces the likelihood or impact of the risk on the organization.", "isCorrect": true },
            { "text": "It simplifies the process of responding to security incidents.", "isCorrect": false }
        ]
    },
    {
        "question": "What is the main benefit of role-based authorization?",
        "answers": [
            { "text": "It simplifies user management by granting access based on pre-defined roles.", "isCorrect": true },
            { "text": "It eliminates the need for passwords and tokens for user authentication.", "isCorrect": false },
            { "text": "It provides a secure way to access resources using tokens instead of usernames.", "isCorrect": false },
            { "text": "It requires less configuration compared to Access Control Lists (ACLs).", "isCorrect": false }
        ]
    }                    
                    
];

export default questions3;