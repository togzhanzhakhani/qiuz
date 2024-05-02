const questions = [
    {
      question: "Which statement best describes a motivation of hacktivists?",
      answers: [
        { text: "They are trying to show off their hacking skills.", isCorrect: false },
        { text: "They are interested in discovering new exploits.", isCorrect: false },
        { text: "They are curious and learning hacking skills.", isCorrect: false },
        { text: "They are part of a protest group behind a political cause.", isCorrect: true }
      ]
    },
    {
      question: "Which type of cybercriminal is the most likely to create malware to compromise an organization by stealing credit card information?",
      answers: [
        { text: "white hat hackers", isCorrect: false },
        { text: "black hat hackers", isCorrect: true },
        { text: "gray hat hackers", isCorrect: false },
        { text: "script kiddies", isCorrect: false }
      ]
    },
    {
      question: "A specialist in the HR department is invited to promote the cybersecurity program in community schools. Which three topics would the specialist emphasize in the presentation to draw students to this field? (Choose three.)",
      answers: [
        { text: "a career-field in high-demand", isCorrect: true },
        { text: "service to the public", isCorrect: true },
        { text: "high earning potential", isCorrect: true },
        { text: "a job with routine, day-to-day tasks", isCorrect: false },
        { text: "a field requiring a PhD degree", isCorrect: false },
        { text: "the CompTIA A+ certification provides an adequate knowledge base for the field", isCorrect: false }
      ]
    },
    {
      question: "An organization allows employees to work from home two days a week. Which technology should be implemented to ensure data confidentiality as data is transmitted?",
      answers: [
        { text: "SHS", isCorrect: false },
        { text: "VLANS", isCorrect: false },
        { text: "RAID", isCorrect: false },
        { text: "VPN", isCorrect: true }
      ]
    },
    {
      question: "Which type of networks poses increasing challenges to cybersecurity specialists due to the growth of BYOD on campus?",
      answers: [
        { text: "wireless networks", isCorrect: true },
        { text: "wired networks", isCorrect: false },
        { text: "sneaker net", isCorrect: false },
        { text: "virtual networks", isCorrect: false }
      ]
    },
    {
      question: "A cybersecurity specialist is working with the IT staff to establish an effective information security plan. Which combination of security principles forms the foundation of a security plan?",
      answers: [
        { text: "confidentiality, integrity, and availability", isCorrect: true },
        { text: "technologies, policies, and awareness", isCorrect: false },
        { text: "secrecy, identify, and nonrepudiation", isCorrect: false },
        { text: "encryption, authentication, and identification", isCorrect: false }
      ]
    },
    {
      question: "Which framework should be recommended for establishing a comprehensive information security management system in an organization?",
      answers: [
        { text: "ISO/IEC 27000", isCorrect: true },
        { text: "ISO OSI model", isCorrect: false },
        { text: "NIST/NICE framework", isCorrect: false },
        { text: "CIA Triad", isCorrect: false }
      ]
    },
    {
      question: "What are three states of data during which data is vulnerable? (Choose three.)",
      answers: [
        { text: "data in-process", isCorrect: true },
        { text: "stored data", isCorrect: true },
        { text: "data in-transit", isCorrect: true },
        { text: "data encrypted", isCorrect: false },
        { text: "purged data", isCorrect: false },
        { text: "data decrypted", isCorrect: false }
      ]
    },
    {
      question: "Users report that the database on the main server cannot be accessed. A database administrator verifies the issue and notices that the database file is now encrypted. The organization receives a threatening email demanding payment for the decryption of the database file. What type of attack has the organization experienced?",
      answers: [
        { text: "man-in-the-middle attack", isCorrect: false },
        { text: "ransomeware", isCorrect: true },
        { text: "Trojan horse", isCorrect: false },
        { text: "DoS attack", isCorrect: false }
      ]
    },
    {
      question: "What three best practices can help defend against social engineering attacks? (Choose three.)",
      answers: [
        { text: "Enable a policy that states that the IT department should supply information over the phone only to managers.", isCorrect: false },
        { text: "Add more security guards.", isCorrect: false },
        { text: "Resist the urge to click on enticing web links.", isCorrect: true },
        { text: "Deploy well-designed firewall appliances.", isCorrect: false },
        { text: "Educate employees regarding policies.", isCorrect: true },
        { text: "Do not provide password resets in a chat window.", isCorrect: true }
      ]
    },
    {
        question: "Which statement describes a distributed denial of service attack?",
        answers: [
            { text: "An attacker sends an enormous quantity of data that a server cannot handle.", isCorrect: true },
            { text: "An attacker builds a botnet comprised of zombies.", isCorrect: false },
            { text: "An attacker views network traffic to learn authentication credentials.", isCorrect: false },
            { text: "One computer accepts data packets based on the MAC address of another computer.", isCorrect: false }
        ]
    },
    {
        question: "A cyber criminal sends a series of maliciously formatted packets to the database server. The server cannot parse the packets and the event causes the server crash. What is the type of attack the cyber criminal launches?",
        answers: [
            { text: "DoS", isCorrect: true },
            { text: "man-in-the-middle", isCorrect: false },
            { text: "packet Injection", isCorrect: false },
            { text: "SQL injection", isCorrect: false }
        ]
    },
    {
        question: "An executive manager went to an important meeting. The secretary in the office receives a call from a person claiming that the executive manager is about to give an important presentation but the presentation files are corrupted. The caller sternly recommends that the secretary email the presentation right away to a personal email address. The caller also states that the executive is holding the secretary responsible for the success of this presentation. Which type of social engineering tactic would describe this scenario?",
        answers: [
            { text: "urgency", isCorrect: false },
            { text: "intimidation", isCorrect: true },
            { text: "familiarity", isCorrect: false },
            { text: "trusted partners", isCorrect: false }
        ]
    },
    {
        question: "What are the two most effective ways to defend against malware? (Choose two.)",
        answers: [
            { text: "Implement network firewalls.", isCorrect: false },
            { text: "Install and update antivirus software.", isCorrect: true },
            { text: "Implement RAID.", isCorrect: false },
            { text: "Update the operating system and other application software.", isCorrect: true },
            { text: "Implement strong passwords.", isCorrect: false },
            { text: "Implement a VPN.", isCorrect: false }
        ]
    },
    {
        question: "The employees in a company receive an email stating that the account password will expire immediately and requires a password reset within 5 minutes. Which statement would classify this email?",
        answers: [
            { text: "It is a piggy-back attack.", isCorrect: false },
            { text: "It is an impersonation attack.", isCorrect: false },
            { text: "It is a DDoS attack.", isCorrect: false },
            { text: "It is a hoax.", isCorrect: true }
        ]
    },
    {
        question: "In which situation would a detective control be warranted?",
        answers: [
            { text: "when the organization needs to look for prohibited activity", isCorrect: true },
            { text: "after the organization has experienced a breach in order to restore everything back to a normal state", isCorrect: false },
            { text: "when the organization cannot use a guard dog, so it is necessary to consider an alternative", isCorrect: false },
            { text: "when the organization needs to repair damage", isCorrect: false }
        ]
    },
    {
        question: "An organization has implemented antivirus software. What type of security control did the company implement?",
        answers: [
            { text: "recovery control", isCorrect: false },
            { text: "deterrent control", isCorrect: false },
            { text: "detective control", isCorrect: true },
            { text: "compensative control", isCorrect: false }
        ]
    },
    {
        question: "Alice and Bob are using public key encryption to exchange a message. Which key should Alice use to encrypt a message to Bob?",
        answers: [
            { text: "the private key of Alice", isCorrect: false },
            { text: "the public key of Bob", isCorrect: true },
            { text: "the private key of Bob", isCorrect: false },
            { text: "the public key of Alice", isCorrect: false }
        ]
    },
    {
        question: "Which statement describes a characteristics of block ciphers?",
        answers: [
            { text: "Block ciphers encrypt plaintext one bit at a time to form a block.", isCorrect: false },
            { text: "Block ciphers result in output data that is larger than the input data most of the time.", isCorrect: true },
            { text: "Block ciphers result in compressed output.", isCorrect: false },
            { text: "Block ciphers are faster than stream ciphers.", isCorrect: false }
        ]
    },
    {
        question: "The IT department is tasked to implement a system that controls what a user can and cannot do on the corporate network. Which process should be implemented to meet the requirement?",
        answers: [
            { text: "user login auditing", isCorrect: false },
            { text: "a set of attributes that describes user access rights", isCorrect: true },
            { text: "observations to be provided to all employees", isCorrect: false },
            { text: "a biometric fingerprint reader", isCorrect: false }
        ]
    },
    {
        question: "Alice and Bob use a pre-shared key to exchange a confidential message. If Bob wants to send a confidential message to Carol, what key should he use?",
        answers: [
            { text: "the same pre-shared key he used with Alice", isCorrect: false },
            { text: "the private key of Carol", isCorrect: false },
            { text: "a new pre-shared key", isCorrect: true },
            { text: "the public key of Bob", isCorrect: false }
        ]
    },
    {
        question: "Which access control strategy allows an object owner to determine whether to allow access to the object?",
        answers: [
            { text: "RBAC", isCorrect: false },
            { text: "DAC", isCorrect: true },
            { text: "MAC", isCorrect: false },
            { text: "ACL", isCorrect: false }
        ]
    },
    {
        question: "Which method is used by steganography to hide text in an image file?",
        answers: [
            { text: "data obfuscation", isCorrect: false },
            { text: "data masking", isCorrect: false },
            { text: "least significant bit", isCorrect: true },
            { text: "most significant bit", isCorrect: false }
        ]
    },
    {
        question: "The X.509 standards defines which security technology?",
        answers: [
            { text: "digital certificates", isCorrect: true },
            { text: "biometrics", isCorrect: false },
            { text: "strong passwords", isCorrect: false },
            { text: "security tokens", isCorrect: false }
        ]
    },
    {
        question: "Which hashing algorithm is recommended for the protection of sensitive, unclassified information?",
        answers: [
            { text: "MD5", isCorrect: false },
            { text: "AES-256", isCorrect: false },
            { text: "3DES", isCorrect: false },
            { text: "SHA-256", isCorrect: true }
        ]
    },
      {
          question: "Technicians are testing the security of an authentication system that uses passwords. When a technician examines the password tables, the technician discovers the passwords are stored as hash values. However, after comparing a simple password hash, the technician then discovers that the values are different from those on other systems. What are two causes of this situation? (Choose two.)",
          answers: [
              { text: "Both systems scramble the passwords before hashing.", isCorrect: false },
              { text: "The systems use different hashing algorithms.", isCorrect: true },
              { text: "One system uses hashing and the other uses hashing and salting.", isCorrect: true },
              { text: "Both systems use MD5.", isCorrect: false },
              { text: "One system uses symmetrical hashing and the other uses asymmetrical hashing.", isCorrect: false }
          ]
      },
      {
          question: "You have been asked to work with the data collection and entry staff in your organization in order to improve data integrity during initial data entry and data modification operations. Several staff members ask you to explain why the new data entry screens limit the types and size of data able to be entered in specific fields. What is an example of a new data integrity control?",
          answers: [
              { text: "data encryption operations that prevent any unauthorized users from accessing sensitive data", isCorrect: false },
              { text: "a limitation rule which has been implemented to prevent unauthorized staff from entering sensitive data", isCorrect: false },
              { text: "data entry controls which only allow entry staff to view current data", isCorrect: false },
              { text: "a validation rule which has been implemented to ensure completeness, accuracy, and consistency of data", isCorrect: true }
          ]
      },
      {
          question: "What technology should be implemented to verify the identity of an organization, to authenticate its website, and to provide an encrypted connection between a client and the website?",
          answers: [
              { text: "digital signature", isCorrect: false },
              { text: "salting", isCorrect: false },
              { text: "digital certificate", isCorrect: true },
              { text: "asymmetric encryption", isCorrect: false }
          ]
      },
      {
          question: "Your organization will be handling market trades. You will be required to verify the identity of each customer who is executing a transaction. Which technology should be implemented to authenticate and verify customer electronic transactions?",
          answers: [
              { text: "data hashing", isCorrect: false },
              { text: "asymmetrical encryption", isCorrect: false },
              { text: "symmetrical encryption", isCorrect: false },
              { text: "digital certificates", isCorrect: true }
          ]
      },
      {
          question: "Alice and Bob are using a digital signature to sign a document. What key should Alice use to sign the document so that Bob can make sure that the document came from Alice?",
          answers: [
              { text: "public key from Bob", isCorrect: false },
              { text: "private key from Alice", isCorrect: true },
              { text: "username and password from Alice", isCorrect: false },
              { text: "private key from Bob", isCorrect: false }
          ]
      },
      {
          question: "An organization has determined that an employee has been cracking passwords on administrative accounts in order to access very sensitive payroll information. Which tools would you look for on the system of the employee? (Choose three)",
          answers: [
              { text: "rainbow tables", isCorrect: true },
              { text: "lookup tables", isCorrect: true },
              { text: "algorithm tables", isCorrect: false },
              { text: "password digest", isCorrect: false },
              { text: "rouge access points", isCorrect: false },
              { text: "reverse lookup tables", isCorrect: true }
          ]
      },
      {
          question: "An organization wants to adopt a labeling system based on the value, sensitivity, and criticality of the information. What element of risk management is recommended?",
          answers: [
              { text: "asset classification", isCorrect: true },
              { text: "asset identification", isCorrect: false },
              { text: "asset availability", isCorrect: false },
              { text: "asset standardization", isCorrect: false }
          ]
      },
      {
          question: "An organization has recently adopted a five nines program for two critical database servers. What type of controls will this involve?",
          answers: [
              { text: "stronger encryption systems", isCorrect: false },
              { text: "improving reliability and uptime of the servers", isCorrect: true },
              { text: "remote access to thousands of external users", isCorrect: false },
              { text: "limiting access to the data on these systems", isCorrect: false }
          ]
      },
      {
          question: "Being able to maintain availability during disruptive events describes which of the principles of high availability?",
          answers: [
              { text: "single point of failure", isCorrect: false },
              { text: "system resiliency", isCorrect: true },
              { text: "fault tolerance", isCorrect: false },
              { text: "uninterruptible services", isCorrect: false }
          ]
      },
      {
          question: "Which risk mitigation strategies include outsourcing services and purchasing insurance?",
          answers: [
              { text: "avoidance", isCorrect: false },
              { text: "transfer", isCorrect: true },
              { text: "reduction", isCorrect: false },
              { text: "acceptance", isCorrect: false }
          ]
      },
      {
        question: "The awareness and identification of vulnerabilities is a critical function of a cybersecurity specialist. Which of the following resources can be used to identify specific details about vulnerabilities?",
        answers: [
            { text: "CVE national database", isCorrect: true },
            { text: "NIST/NICE framework", isCorrect: false },
            { text: "ISO/IEC 27000 model", isCorrect: false },
            { text: "Infragard", isCorrect: false }
        ]
    },
    {
        question: "Which technology would you implement to provide high availability for data storage?",
        answers: [
            { text: "N+1", isCorrect: false },
            { text: "software updates", isCorrect: false },
            { text: "RAID", isCorrect: true },
            { text: "hot standby", isCorrect: false }
        ]
    },
    {
        question: "Which two values are required to calculate annual loss expectancy? (Choose two.)",
        answers: [
            { text: "annual rate of occurrence", isCorrect: true },
            { text: "asset value", isCorrect: false },
            { text: "frequency factor", isCorrect: false },
            { text: "exposure factor", isCorrect: false },
            { text: "single loss expectancy", isCorrect: true },
            { text: "quantitative loss value", isCorrect: false }
        ]
    },
    {
        question: "What is it called when an organization only installs applications that meet its guidelines, and administrators increase security by eliminating all other applications?",
        answers: [
            { text: "asset availability", isCorrect: false },
            { text: "asset identification", isCorrect: false },
            { text: "asset classification", isCorrect: false },
            { text: "asset standardization", isCorrect: true }
        ]
    },
    {
        question: "There are many environments that require five nines, but a five nines environment may be cost prohibitive. What is one example of where the five nines environment might be cost prohibitive?",
        answers: [
            { text: "department stores at the local mall", isCorrect: false },
            { text: "the front office of a major league sports team", isCorrect: false },
            { text: "the U.S. Department of Education", isCorrect: false },
            { text: "the New York Stock Exchange", isCorrect: true }
        ]
    },
    {
        question: "Which technology can be used to protect VoIP against eavesdropping?",
        answers: [
            { text: "ARP", isCorrect: false },
            { text: "encrypted voice messages", isCorrect: true },
            { text: "strong authentication", isCorrect: false },
            { text: "SSH", isCorrect: false }
        ]
    },
    {
        question: "Mutual authentication can prevent which type of attack?",
        answers: [
            { text: "wireless poisoning", isCorrect: false },
            { text: "wireless IP spoofing", isCorrect: false },
            { text: "wireless sniffing", isCorrect: false },
            { text: "man-in-the-middle", isCorrect: true }
        ]
    },
    {
        question: "Which of the following products or technologies would you use to establish a baseline for an operating system?",
        answers: [
            { text: "SANS Baselining System (SBS)", isCorrect: false },
            { text: "Microsoft Security Baseline Analyzer", isCorrect: true },
            { text: "MS Baseliner", isCorrect: false },
            { text: "CVE Baseline Analyzer", isCorrect: false }
        ]
    },
    {
        question: "What Windows utility should be used to configure password rules and account lockout policies on a system that is not part of a domain?",
        answers: [
            { text: "Active Directory Security tool", isCorrect: false },
            { text: "Computer Management", isCorrect: false },
            { text: "Local Security Policy tool", isCorrect: true },
            { text: "Event Viewer security log", isCorrect: false }
        ]
    },
    {
        question: "What describes the protection provided by a fence that is 1 meter in height?",
        answers: [
            { text: "It deters casual trespassers only.", isCorrect: true },
            { text: "It prevents casual trespassers because of its height.", isCorrect: false },
            { text: "The fence deters determined intruders.", isCorrect: false },
            { text: "It offers limited delay to a determined intruder.", isCorrect: false }
        ]
    },
      {
        question: "Which wireless standard made AES and CCM mandatory?",
        answers: [
          { text: "WPA2", isCorrect: true },
          { text: "WEP", isCorrect: false },
          { text: "WEP2", isCorrect: false },
          { text: "WPA", isCorrect: false }
        ]
      },
      {
        question: "Which three protocols can use Advanced Encryption Standard (AES)? (Choose three.)",
        answers: [
          { text: "WEP", isCorrect: false },
          { text: "WPA2", isCorrect: true },
          { text: "WPA", isCorrect: true },
          { text: "802.11q", isCorrect: false },
          { text: "802.11i", isCorrect: true },
          { text: "TKIP", isCorrect: false }
        ]
      },
      {
        question: "Which website offers guidance on putting together a checklist to provide guidance on configuring and hardening operating systems?",
        answers: [
          { text: "Internet Storm Center", isCorrect: false },
          { text: "The Advanced Cyber Security Center", isCorrect: false },
          { text: "The National Vulnerability Database website", isCorrect: true },
          { text: "CERT", isCorrect: false }
        ]
      },
      {
        question: "Which law was enacted to prevent corporate accounting-related crimes?",
        answers: [
          { text: "The Federal Information Security Management Act", isCorrect: false },
          { text: "Gramm-Leach-Bliley Act", isCorrect: false },
          { text: "Import/Export Encryption Act", isCorrect: false },
          { text: "Sarbanes-Oxley Act", isCorrect: true }
        ]
      },
      {
        question: "Which cybersecurity weapon scans for use of default passwords, missing patches, open ports, misconfigurations, and active IP addresses?",
        answers: [
          { text: "packet analyzers", isCorrect: false },
          { text: "vulnerability scanners", isCorrect: true },
          { text: "packet sniffers", isCorrect: false },
          { text: "password crackers", isCorrect: false }
        ]
      },
      {
        question: "A cybersecurity specialist is asked to identify the potential criminals known to attack the organization. Which type of hackers would the cybersecurity specialist be least concerned with?",
        answers: [
          { text: "black hat hackers", isCorrect: false },
          { text: "gray hat hackers", isCorrect: false },
          { text: "script kiddies", isCorrect: false },
          { text: "white hat hackers", isCorrect: true }
        ]
      },
      {
        question: "What is an example of early warning systems that can be used to thwart cybercriminals?",
        answers: [
          { text: "Infragard", isCorrect: false },
          { text: "ISO/IEC 27000 program", isCorrect: false },
          { text: "Honeynet project", isCorrect: true },
          { text: "CVE database", isCorrect: false }
        ]
      },
      {
        question: "Which technology should be used to enforce the security policy that a computing device must be checked against the latest antivirus update before the device is allowed to connect to the campus network?",
        answers: [
          { text: "SAN", isCorrect: false },
          { text: "VPN", isCorrect: false },
          { text: "NAC", isCorrect: true },
          { text: "NAS", isCorrect: false }
        ]
      },
      {
        question: "Which data state is maintained in NAS and SAN services?",
        answers: [
          { text: "stored data", isCorrect: true },
          { text: "data in-transit", isCorrect: false },
          { text: "encrypted data", isCorrect: false },
          { text: "data in-process", isCorrect: false }
        ]
      },
      {
        question: "Which technology can be used to ensure data confidentiality?",
        answers: [
          { text: "hashing", isCorrect: false },
          { text: "identity management", isCorrect: false },
          { text: "encryption", isCorrect: true },
          { text: "RAID", isCorrect: false }
        ]
      },
      {
        question: "What is an impersonation attack that takes advantage of a trusted relationship between two systems?",
        answers: [
          { text: "man-in-the-middle", isCorrect: false },
          { text: "spoofing", isCorrect: true },
          { text: "spamming", isCorrect: false },
          { text: "sniffing", isCorrect: false }
        ]
      },
      {
            question: "Users report that the network access is slow. After questioning the employees, the network administrator learned that one employee downloaded a third-party scanning program for the printer. What type of malware might be introduced that causes slow performance of the network?",
            answers: [
                { text: "virus", isCorrect: false },
                { text: "worm", isCorrect: true },
                { text: "spam", isCorrect: false },
                { text: "phishing", isCorrect: false }
            ]
        },
        {
            question: "What type of application attack occurs when data goes beyond the memory areas allocated to the application?",
            answers: [
                { text: "buffer overflow", isCorrect: true },
                { text: "RAM Injection", isCorrect: false },
                { text: "SQL injection", isCorrect: false },
                { text: "RAM spoofing", isCorrect: false }
            ]
        },
        {
            question: "What type of attack has an organization experienced when an employee installs an unauthorized device on the network to view network traffic?",
            answers: [
                { text: "sniffing", isCorrect: true },
                { text: "spoofing", isCorrect: false },
                { text: "phishing", isCorrect: false },
                { text: "spamming", isCorrect: false }
            ]
        },
        {
            question: "A penetration testing service hired by the company has reported that a backdoor was identified on the network. What action should the organization take to find out if systems have been compromised?",
            answers: [
                { text: "Look for policy changes in Event Viewer", isCorrect: false },
                { text: "Scan the systems for viruses", isCorrect: false },
                { text: "Look for unauthorized accounts", isCorrect: true },
                { text: "Look for usernames that do not have passwords", isCorrect: false }
            ]
        },
        {
            question: "Smart cards and biometrics are considered to be what type of access control?",
            answers: [
                { text: "administrative", isCorrect: false },
                { text: "technological", isCorrect: false },
                { text: "logical", isCorrect: true },
                { text: "physical", isCorrect: false }
            ]
        },
        {
            question: "Which access control should the IT department use to restore a system back to its normal state?",
            answers: [
                { text: "compensative", isCorrect: false },
                { text: "preventive", isCorrect: false },
                { text: "corrective", isCorrect: true },
                { text: "detective", isCorrect: false }
            ]
        },
          {
              question: "A user has a large amount of data that needs to be kept confidential. Which algorithm would best meet this requirement?",
              answers: [
                  { text: "3DES", isCorrect: true },
                  { text: "ECC", isCorrect: false },
                  { text: "RSA", isCorrect: false },
                  { text: "Diffie-Hellman", isCorrect: false }
              ]
          },
          {
              question: "What happens as the key length increases in an encryption application?",
              answers: [
                  { text: "Keyspace increases proportionally.", isCorrect: false },
                  { text: "Keyspace decreases exponentially.", isCorrect: false },
                  { text: "Keyspace decreases proportionally.", isCorrect: false },
                  { text: "Keyspace increases exponentially.", isCorrect: true }
              ]
          },
          {
              question: "You have been asked to describe data validation to the data entry clerks in accounts receivable. Which of the following are good examples of strings, integers, and decimals?",
              answers: [
                  { text: "800-900-4560, 4040-2020-8978-0090, 01/21/2013", isCorrect: false },
                  { text: "male, $25.25, veteran", isCorrect: false },
                  { text: "female, 9866, $125.50", isCorrect: true },
                  { text: "yes/no 345-60-8745, TRF562", isCorrect: false }
              ]
          },
          {
              question: "Which hashing technology requires keys to be exchanged?",
              answers: [
                  { text: "salting", isCorrect: false },
                  { text: "AES", isCorrect: false },
                  { text: "HMAC", isCorrect: true },
                  { text: "MD5", isCorrect: false }
              ]
          },
          {
              question: "What is a feature of a cryptographic hash function?",
              answers: [
                  { text: "Hashing requires a public and a private key.", isCorrect: false },
                  { text: "The hash function is a one-way mathematical function.", isCorrect: true },
                  { text: "The output has a variable length.", isCorrect: false },
                  { text: "The hash input can be calculated given the output value.", isCorrect: false }
              ]
          },
          {
              question: "A VPN will be used within the organization to give remote users secure access to the corporate network. What does IPsec use to authenticate the origin of every packet to provide data integrity checking?",
              answers: [
                  { text: "salting", isCorrect: false },
                  { text: "HMAC", isCorrect: true },
                  { text: "CRC", isCorrect: false },
                  { text: "password", isCorrect: false }
              ]
          },
          {
              question: "Your risk manager just distributed a chart that uses three colors to identify the level of threat to key assets in the information security systems. Red represents high level of risk, yellow represents average level of threat and green represents low level of threat. What type of risk analysis does this chart represent?",
              answers: [
                  { text: "quantitative analysis", isCorrect: false },
                  { text: "exposure factor analysis", isCorrect: false },
                  { text: "loss analysis", isCorrect: false },
                  { text: "qualitative analysis", isCorrect: true }
              ]
          },
          {
              question: "Keeping data backups offsite is an example of which type of disaster recovery control?",
              answers: [
                  { text: "management", isCorrect: false },
                  { text: "preventive", isCorrect: true },
                  { text: "detective", isCorrect: false },
                  { text: "corrective", isCorrect: false }
              ]
          },
          {
              question: "What are two incident response phases? (Choose two.)",
              answers: [
                  { text: "detection and analysis", isCorrect: true },
                  { text: "confidentiality and eradication", isCorrect: false },
                  { text: "prevention and containment", isCorrect: false },
                  { text: "mitigation and acceptance", isCorrect: false },
                  { text: "containment and recovery", isCorrect: true },
                  { text: "risk analysis and high availability", isCorrect: false }
              ]
          },
          {
              question: "The team is in the process of performing a risk analysis on the database services. The information collected includes the initial value of these assets, the threats to the assets and the impact of the threats. What type of risk analysis is the team performing by calculating the annual loss expectancy?",
              answers: [
                  { text: "quantitative analysis", isCorrect: true },
                  { text: "qualitative analysis", isCorrect: false },
                  { text: "loss analysis", isCorrect: false },
                  { text: "protection analysis", isCorrect: false }
              ]
          },
          {
              question: "What approach to availability provides the most comprehensive protection because multiple defenses coordinate together to prevent attacks?",
              answers: [
                  { text: "obscurity", isCorrect: false },
                  { text: "limiting", isCorrect: false },
                  { text: "layering", isCorrect: true },
                  { text: "diversity", isCorrect: false }
              ]
          },
            {
                "question": "Which utility uses the Internet Control Messaging Protocol (ICMP)?",
                "answers": [
                    {"text": "NTP", "isCorrect": false},
                    {"text": "ping", "isCorrect": true},
                    {"text": "RIP", "isCorrect": false},
                    {"text": "DNS", "isCorrect": false}
                ]
            },
            {
                "question": "In a comparison of biometric systems, what is the crossover error rate?",
                "answers": [
                    {"text": "rate of false positives and rate of acceptability", "isCorrect": false},
                    {"text": "rate of false negatives and rate of false positives", "isCorrect": true},
                    {"text": "rate of rejection and rate of false negatives", "isCorrect": false},
                    {"text": "rate of acceptability and rate of false negatives", "isCorrect": false}
                ]
            },
            {
                "question": "Which protocol would be used to provide security for employees that access systems remotely from home?",
                "answers": [
                    {"text": "WPA", "isCorrect": false},
                    {"text": "SSH", "isCorrect": true},
                    {"text": "SCP", "isCorrect": false},
                    {"text": "Telnet", "isCorrect": false}
                ]
            },
            {
                "question": "Which threat is mitigated through user awareness training and tying security awareness to performance reviews?",
                "answers": [
                    {"text": "user-related threats", "isCorrect": true},
                    {"text": "device-related threats", "isCorrect": false},
                    {"text": "cloud-related threats", "isCorrect": false},
                    {"text": "physical threats", "isCorrect": false}
                ]
            },
            {
                "question": "HVAC, water system, and fire systems fall under which of the cybersecurity domains?",
                "answers": [
                    {"text": "device", "isCorrect": false},
                    {"text": "network", "isCorrect": false},
                    {"text": "physical facilities", "isCorrect": true},
                    {"text": "user", "isCorrect": false}
                ]
            },
            {
                "question": "Technologies like GIS and IoE contribute to the growth of large data stores. What are two reasons that these technologies increase the need for cybersecurity specialists? (Choose two.)",
                "answers": [
                    {"text": "They require 24-hour monitoring.", "isCorrect": false},
                    {"text": "They collect sensitive information.", "isCorrect": true},
                    {"text": "They contain personal information.", "isCorrect": true},
                    {"text": "They increase processing requirements.", "isCorrect": false},
                    {"text": "They require more equipment.", "isCorrect": false},
                    {"text": "They make systems more complicated.", "isCorrect": false}
                ]
            },
            {
                "question": "Which two groups of people are considered internal attackers? (Choose two.)",
                "answers": [
                    {"text": "ex-employees", "isCorrect": true},
                    {"text": "amateurs", "isCorrect": false},
                    {"text": "black hat hackers", "isCorrect": false},
                    {"text": "hacktivists", "isCorrect": false},
                    {"text": "trusted partners", "isCorrect": true}
                ]
            },
            {
                "question": "Which methods can be used to implement multifactor authentication?",
                "answers": [
                    {"text": "IDS and IPS", "isCorrect": false},
                    {"text": "tokens and hashes", "isCorrect": false},
                    {"text": "VPNs and VLANs", "isCorrect": false},
                    {"text": "passwords and fingerprints", "isCorrect": true}
                ]
            },
            {
                "question": "A security specialist is asked for advice on a security measure to prevent unauthorized hosts from accessing the home network of employees. Which measure would be most effective?",
                "answers": [
                    {"text": "Implement a firewall.", "isCorrect": true},
                    {"text": "Implement intrusion detection systems.", "isCorrect": false},
                    {"text": "Implement a VLAN.", "isCorrect": false},
                    {"text": "Implement RAID.", "isCorrect": false}
                ]
            },
            {
                "question": "What type of attack will make illegitimate websites higher in a web search result list?",
                "answers": [
                    {"text": "DNS poisoning", "isCorrect": false},
                    {"text": "browser hijacker", "isCorrect": false},
                    {"text": "spam", "isCorrect": false},
                    {"text": "SEO poisoning", "isCorrect": true}
                ]
            },
            {
                "question": "What is a nontechnical method that a cybercriminal would use to gather sensitive information from an organization?",
                "answers": [
                    {"text": "man-in-the-middle", "isCorrect": false},
                    {"text": "social engineering", "isCorrect": true},
                    {"text": "pharming", "isCorrect": false},
                    {"text": "ransomeware", "isCorrect": false}
                ]
            },
              {
                  "question": "Which algorithm will Windows use by default when a user intends to encrypt files and folders in an NTFS volume?",
                  "answers": [
                      {"text": "RSA", "isCorrect": false},
                      {"text": "DES", "isCorrect": false},
                      {"text": "AES", "isCorrect": true},
                      {"text": "3DES", "isCorrect": false}
                  ]
              },
              {
                  "question": "Before data is sent out for analysis, which technique can be used to replace sensitive data in nonproduction environments to protect the underlying information?",
                  "answers": [
                      {"text": "data masking substitution", "isCorrect": true},
                      {"text": "steganography", "isCorrect": false},
                      {"text": "software obfuscation", "isCorrect": false},
                      {"text": "steganalysis", "isCorrect": false}
                  ]
              },
              {
                  "question": "An organization plans to implement security training to educate employees about security policies. What type of access control is the organization trying to implement?",
                  "answers": [
                      {"text": "administrative", "isCorrect": true},
                      {"text": "technological", "isCorrect": false},
                      {"text": "physical", "isCorrect": false},
                      {"text": "logical", "isCorrect": false}
                  ]
              },
              {
                  "question": "Passwords, passphrases, and PINs are examples of which security term?",
                  "answers": [
                      {"text": "authorization", "isCorrect": false},
                      {"text": "access", "isCorrect": false},
                      {"text": "authentication", "isCorrect": true},
                      {"text": "identification", "isCorrect": false}
                  ]
              },
              {
                  "question": "What technique creates different hashes for the same password?",
                  "answers": [
                      {"text": "SHA-256", "isCorrect": false},
                      {"text": "HMAC", "isCorrect": false},
                      {"text": "CRC", "isCorrect": false},
                      {"text": "salting", "isCorrect": true}
                  ]
              },
              {
                  "question": "You have been asked to implement a data integrity program to protect data files that need to be electronically downloaded by the sales staff. Which hash algorithm would you select?",
                  "answers": [
                      {"text": "SHA-1", "isCorrect": false},
                      {"text": "AES", "isCorrect": false},
                      {"text": "MD5", "isCorrect": false},
                      {"text": "SHA-256", "isCorrect": true}
                  ]
              },
              {
                  "question": "What kind of integrity does a database have when all its rows have a unique identifier called a primary key?",
                  "answers": [
                      {"text": "entity integrity", "isCorrect": true},
                      {"text": "referential integrity", "isCorrect": false},
                      {"text": "domain integrity", "isCorrect": false},
                      {"text": "user-defined integrity", "isCorrect": false}
                  ]
              },
              {
                  "question": "What approach to availability involves using file permissions?",
                  "answers": [
                      {"text": "layering", "isCorrect": false},
                      {"text": "simplicity", "isCorrect": false},
                      {"text": "obscurity", "isCorrect": false},
                      {"text": "limiting", "isCorrect": true}
                  ]
              },
              {
                  "question": "Which national resource was developed as a result of a U.S. Executive Order after a ten-month collaborative study involving over 3,000 security professionals?",
                  "answers": [
                      {"text": "ISO OSI model", "isCorrect": false},
                      {"text": "NIST Framework", "isCorrect": true},
                      {"text": "ISO/IEC 27000", "isCorrect": false},
                      {"text": "the National Vulnerability Database (NVD)", "isCorrect": false}
                  ]
              },
              {
                  "question": "Which two protocols pose switching threats? (Choose two.)",
                  "answers": [
                      {"text": "RIP", "isCorrect": false},
                      {"text": "IP", "isCorrect": false},
                      {"text": "ICMP", "isCorrect": false},
                      {"text": "WPA2", "isCorrect": false},
                      {"text": "STP", "isCorrect": true},
                      {"text": "ARP", "isCorrect": true}
                  ]
              },
              {
                  "question": "What is the most difficult part of designing a cryptosystem?",
                  "answers": [
                      {"text": "encryption algorithm", "isCorrect": false},
                      {"text": "reverse engineering", "isCorrect": false},
                      {"text": "key length", "isCorrect": false},
                      {"text": "key management", "isCorrect": true}
                  ]
              },
              {
                  "question": "What technology should you implement to ensure that an individual cannot later claim that he or she did not sign a given document?",
                  "answers": [
                      {"text": "asymmetric encryption", "isCorrect": false},
                      {"text": "digital certificate", "isCorrect": false},
                      {"text": "digital signature", "isCorrect": true},
                      {"text": "HMAC", "isCorrect": false}
                  ]
              },
              {
                  "question": "Which type of cybercriminal attack would interfere with established network communication through the use of constructed packets so that the packets look like they are part of the normal communication?",
                  "answers": [
                      {"text": "packet sniffing", "isCorrect": false},
                      {"text": "DNS spoofing", "isCorrect": false},
                      {"text": "packet forgery", "isCorrect": true},
                      {"text": "rogue Wi-Fi AP", "isCorrect": false}
                  ]
              },
                {
                    "question": "An organization just completed a security audit. Your division was cited for not conforming to X.509 requirements. What is the first security control you need to examine?",
                    "answers": [
                        {"text": "VPNs and encryption services", "isCorrect": false},
                        {"text": "hashing operations", "isCorrect": false},
                        {"text": "data validation rules", "isCorrect": false},
                        {"text": "digital certificates", "isCorrect": true}
                    ]
                },
                {
                    "question": "What technology can be implemented as part of an authentication system to verify the identification of employees?",
                    "answers": [
                        {"text": "a virtual fingerprint", "isCorrect": false},
                        {"text": "a smart card reader", "isCorrect": true},
                        {"text": "SHA-1 hash", "isCorrect": false},
                        {"text": "a Mantrap", "isCorrect": false}
                    ]
                },
                {
                    "question": "Which technology can be used to prevent a cracker from launching a dictionary or brute-force attack of a hash?",
                    "answers": [
                        {"text": "AES", "isCorrect": false},
                        {"text": "MD5", "isCorrect": false},
                        {"text": "HMAC", "isCorrect": true},
                        {"text": "rainbow tables", "isCorrect": false}
                    ]
                },
                {
                  "question": "Which technology can be implemented as part of an authentication system to verify the identification of employees?",
                  "answers": [
                      {"text": "a smart card reader", "isCorrect": true},
                      {"text": "SHA-1 hash", "isCorrect": false},
                      {"text": "a virtual fingerprint", "isCorrect": false},
                      {"text": "a Mantrap", "isCorrect": false}
                  ]
              },
                {
                    "question": "Netbus belongs to which malware type?",
                    "answers": [
                        {"text": "backdoor", "isCorrect": true},
                        {"text": "logic bomb", "isCorrect": false},
                        {"text": "keylogger", "isCorrect": false},
                        {"text": "grayware", "isCorrect": false}
                    ]
                },
                {
                    "question": "A user complains about frequently receiving messages on the smartphone that urges the user to visit different insurance websites. If the user clicks the link to visit, a user login message will pop up and ask the user to register first. Which wireless and mobile device attack has the user experienced?",
                    "answers": [
                        {"text": "Grayware", "isCorrect": false},
                        {"text": "SMiShing", "isCorrect": true},
                        {"text": "Bluejacking", "isCorrect": false},
                        {"text": "Bluesnarfing", "isCorrect": false}
                    ]
                }
            ]           

  export default questions;
  