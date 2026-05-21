const portfolioData = {
  profile: {
    name: "KARAN PANCHAL",
    title: "Security Engineer | EDR, XDR & Agent Developer",
    email: "panchalk250@gmail.com",
    phone: "+91-9157786995",
    linkedin: "https://www.linkedin.com/in/karan-panchal-b03863301/",
    profileImage: "/images/profile.jpg",
    totalExperience: "12+ MONTHS",
    currentCompany: "INFOPERCEPT CONSULTING PVT. LTD.",
    location: "Ahmedabad, India",
    bio: "Security Engineering intern turned full contributor — independently acquired expertise across C++, Swift, Ruby, and shell scripting while delivering kernel-level telemetry engines, macOS security agents, and production-grade NATS messaging infrastructure. Starting with zero prior domain experience, now operating across the full stack of modern security engineering.",
    specialInterests: ["Sketch", "Realistic Portraits"]
  },

  stats: {
    months: "12+",
    domains: "6",
    tasks: "35+",
    projects: "4"
  },

  skills: {
    programming: ["C++", "Swift", "Ruby", "Shell", "C", "Java", "Python", "JavaScript", "HTML", "CSS", "SQL"],
    security: ["SIEM Analysis", "MITRE ATT&CK", "Windows ETW", "WDAC", "EDR/XDR", "Threat Hunting", "Active Defense", "Log Analytics", "Wazuh", "Active Response", "Threat Intelligence", "krabsETW"],
    messaging: ["NATS", "NATS JetStream", "JetStream KV", "Pub/Sub", "Durable Consumers", "Multi-tenant Architecture"],
    platforms: ["VSCode", "PyCharm", "MySQL", "Tableau", "Anaconda", "Google Colab", "logman CLI"],
    operatingSystems: ["macOS", "Windows", "Linux"],
    softSkills: ["Cross-Platform Engineering", "Self-driven Learning", "Problem Solving", "Leadership", "Event Management", "Communication", "Logical Thinking"]
  },

  workExperience: [
    {
      role: "SECURITY ENGINEER | SECURITY ANALYTICS",
      company: "INFOPERCEPT CONSULTING PRIVATE LIMITED",
      type: "Internship → Full Contributor",
      duration: "June 2024 - Current",
      highlights: [
        "Built real-time Windows telemetry capture engine in C++ using krabsETW library with multi-threaded event processing at kernel level.",
        "Developed macOS security agent prototype in Swift — covering event detection, active response automation, and NATS-based bidirectional communication.",
        "Implemented NATS JetStream messaging with zero-message-loss guarantees, durable consumers, replay capability, and KV-based configuration management.",
        "Contributed to EPSense Agent (Windows) testing and Vikings project (Ruby detection logic) — dual-project delivery for live clients including Ninja.",
        "Independently mapped 20+ real-world attack techniques to MITRE ATT&CK framework; validated WDAC policy enforcement across 10+ scenarios.",
        "Designed secure NATS Operator/Account/User hierarchy for production multi-tenant agent communication infrastructure."
      ]
    },
    {
      role: "AI WITH MACHINE LEARNING",
      company: "ACMEGRADE PRIVATE LIMITED",
      type: "Internship",
      duration: "July 2024 - Sept 2024",
      highlights: [
        "Built and optimized ML models through data preprocessing, feature engineering, and model selection.",
        "Worked with cross-functional teams to deploy AI solutions using Python, TensorFlow, and Scikit-learn.",
        "Performed data analysis and visualization to deliver actionable insights and support strategic decisions."
      ]
    },
    {
      role: "SOFTWARE ENGINEER",
      company: "CERA SANITARYWARE LIMITED",
      type: "Summer Internship",
      duration: "July 2024",
      highlights: [
        "Performed comprehensive testing and code coverage analysis for production websites.",
        "Identified and resolved critical bugs resulting in 30% enhancement of overall software quality.",
        "Developed Python-based solution for enhanced website efficiency and code reduction.",
        "Utilized Python, XML, Django, MySQL to implement a user-centric testing approach."
      ]
    }
  ],

  workProgressPhases: [
    {
      category: "Security Fundamentals",
      color: "#22d3ee",
      phases: [
        { name: "Security Fundamentals", tech: "SIEM", level: "Foundational", outcome: "Built security monitoring fundamentals enabling hands-on threat detection work" },
        { name: "Log Analysis", tech: "SIEM, Log Analysis", level: "Intermediate", outcome: "Gained practical insight into enterprise alert triage and log interpretation" },
        { name: "Threat Intelligence", tech: "MITRE ATT&CK", level: "Intermediate", outcome: "Independently mapped 20+ attack techniques to detection strategies" },
        { name: "Attack Pattern Mapping", tech: "MITRE ATT&CK", level: "Intermediate", outcome: "Developed structured thinking for threat-to-detection mapping" }
      ]
    },
    {
      category: "ETW & Telemetry",
      color: "#a78bfa",
      phases: [
        { name: "Windows Telemetry", tech: "Windows ETW", level: "Advanced", outcome: "Understood kernel-level telemetry collection architecture" },
        { name: "ETW Exploration", tech: "logman, ETW", level: "Advanced", outcome: "Gained hands-on control over Windows ETW session configuration" },
        { name: "ETW Dev Setup", tech: "krabsETW, C++", level: "Advanced", outcome: "Stood up production-grade telemetry engineering environment" },
        { name: "Provider Analysis", tech: "Windows ETW", level: "Advanced", outcome: "Catalogued security-relevant ETW providers for detection engineering" },
        { name: "Custom ETW Implementation", tech: "C++, ETW", level: "Expert", outcome: "Delivered working real-time telemetry capture engine in C++" },
        { name: "Event Processing", tech: "C++, ETW", level: "Expert", outcome: "Created structured security telemetry extraction pipeline" }
      ]
    },
    {
      category: "macOS Agent Dev",
      color: "#34d399",
      phases: [
        { name: "macOS Transition", tech: "macOS, Swift", level: "Intermediate", outcome: "Successfully stood up cross-platform development capability" },
        { name: "Swift Learning", tech: "Swift, macOS APIs", level: "Intermediate", outcome: "Achieved Swift proficiency enabling immediate agent contribution" },
        { name: "Wazuh Study", tech: "Wazuh, OSSEC", level: "Advanced", outcome: "Built comprehensive understanding of production security agent architecture" },
        { name: "macOS Agent Development", tech: "Swift, macOS", level: "Expert", outcome: "Delivered functional macOS agent prototype for client evaluation" },
        { name: "Active Response", tech: "Swift, Scripting", level: "Expert", outcome: "Automated threat response capability integrated into agent" },
        { name: "Agent Testing", tech: "macOS, QA", level: "Advanced", outcome: "Validated agent correctness across 15+ functional test scenarios" },
        { name: "Response Validation", tech: "Swift, Security", level: "Advanced", outcome: "Confirmed response reliability under adversarial conditions" },
        { name: "Client Testing (Ninja)", tech: "macOS Agent, QA", level: "Advanced", outcome: "Delivered validated agent build for Ninja client deployment" },
        { name: "Bug Investigation", tech: "Debugging", level: "Advanced", outcome: "Resolved critical agent defects ahead of client delivery" }
      ]
    },
    {
      category: "NATS Messaging",
      color: "#fbbf24",
      phases: [
        { name: "NATS Study", tech: "NATS", level: "Advanced", outcome: "Built deep understanding of production-grade messaging infrastructure" },
        { name: "Agent Communications", tech: "NATS, Swift", level: "Expert", outcome: "Delivered bidirectional agent-server communication layer using NATS" },
        { name: "JetStream Implementation", tech: "NATS JetStream", level: "Expert", outcome: "Achieved zero-message-loss telemetry pipeline with JetStream" },
        { name: "KV Storage", tech: "NATS JetStream KV", level: "Expert", outcome: "Built dynamic configuration management system for security agent" },
        { name: "NATS Architecture Design", tech: "NATS, Architecture", level: "Expert", outcome: "Designed production-ready secure multi-tenant NATS architecture" }
      ]
    },
    {
      category: "WDAC & EPSense",
      color: "#f87171",
      phases: [
        { name: "WDAC Research", tech: "WDAC, Windows", level: "Advanced", outcome: "Mastered enterprise application control policy framework" },
        { name: "WDAC Testing", tech: "WDAC, Security", level: "Advanced", outcome: "Validated WDAC policy behavior across 10+ enforcement scenarios" },
        { name: "EPSense Testing", tech: "Windows Security", level: "Expert", outcome: "Contributed to EPSense Agent stability for client release" },
        { name: "Issue Debugging", tech: "Debugging, QA", level: "Advanced", outcome: "Resolved agent-side issues through systematic root cause analysis" }
      ]
    },
    {
      category: "Vikings / Ruby",
      color: "#f472b6",
      phases: [
        { name: "Vikings Knowledge Transfer", tech: "Ruby, Project KT", level: "Intermediate", outcome: "Rapidly onboarded to Vikings project enabling immediate contribution" },
        { name: "Ruby Learning", tech: "Ruby", level: "Intermediate", outcome: "Achieved working Ruby proficiency for detection code contribution" },
        { name: "Codebase Study", tech: "Ruby, Codebase", level: "Intermediate", outcome: "Mapped detection framework architecture enabling safe contributions" },
        { name: "Parallel Projects", tech: "Ruby, Windows", level: "Expert", outcome: "Sustaining dual-project delivery across live client engagements" },
        { name: "Continuous Learning", tech: "Security Eng.", level: "Ongoing", outcome: "Consistent self-driven growth across all technical domains" }
      ]
    }
  ],

  notableHighlights: [
    {
      title: "Cross-Platform Engineering",
      description: "Transitioned between Windows (C++/ETW), macOS (Swift), and Linux/Ruby environments — demonstrating the rare ability to adapt quickly to different OS architectures and toolchains.",
      icon: "globe"
    },
    {
      title: "Independent Language Acquisition",
      description: "Swift, Ruby, and advanced C++ were all self-learned during the internship — each mastered rapidly enough to contribute production-level code within weeks of starting.",
      icon: "book"
    },
    {
      title: "Kernel-Level Development",
      description: "Worked directly with Windows ETW at the kernel level — implemented multi-threaded C++ event capture engines using krabsETW. Typically the domain of experienced engineers.",
      icon: "cpu"
    },
    {
      title: "Production Client Delivery",
      description: "Contributed to client-facing deliverables including agent testing for the Ninja client and EPSense Agent — real product QA and debugging, not internal exercises.",
      icon: "briefcase"
    },
    {
      title: "Distributed Systems Architecture",
      description: "Designed and implemented NATS JetStream messaging with guaranteed delivery and a secure multi-tenant Operator/Account/User hierarchy — work typically performed by mid-senior engineers.",
      icon: "server"
    }
  ],

  projects: [
    {
      title: "AppControl Agent",
      company: "INFOPERCEPT",
      tech: "C++, Swift, Shell, macOS, Windows",
      description: "A high-performance endpoint security agent providing granular application control and real-time threat prevention with cross-platform deployment.",
      features: ["Endpoint Security", "Granular App Control", "System-level Monitoring", "Cross-platform Deployment"]
    },
    {
      title: "macOS Security Agent",
      company: "INFOPERCEPT",
      tech: "Swift, NATS, JetStream, macOS",
      description: "Full macOS security agent with real-time event detection, active response automation, and NATS JetStream bidirectional communication with zero message loss.",
      features: ["Real-time Event Detection", "Active Response", "NATS Communication", "Zero-loss Telemetry"]
    },
    {
      title: "Online Quiz System",
      company: "PERSONAL",
      tech: "HTML, CSS, JavaScript, Google Sheets",
      description: "Web-based examination platform for optimizing handwork usage with real-time timers and dynamic question management.",
      features: ["Timer-based Quiz", "Q&A Management", "Real-time Status"]
    },
    {
      title: "E-Auction Platform",
      company: "CERA SANITARYWARE",
      tech: "HTML, CSS, Python (Django), SQLite",
      description: "Online car E-Auction platform with real-time bidding, transparent pricing mechanism, and diverse vehicle listings.",
      features: ["Real-time Bidding", "Diverse Listings", "Fair Pricing"]
    }
  ],

  education: [
    {
      institution: "INDRASHIL UNIVERSITY",
      location: "Ahmedabad",
      branch: "Computer Science & Engineering",
      score: "8.30 CGPA",
      duration: "2022 - Current"
    },
    {
      institution: "AADARSH HIGH SCHOOL",
      grade: "12th",
      score: "60%",
      duration: "2021 - 2022"
    },
    {
      institution: "AADARSH SCHOOL",
      grade: "10th",
      score: "75%",
      duration: "2019 - 2020"
    }
  ],

  certifications: [
    "Infopercept Consulting Pvt. Ltd Internship Certificate",
    "Acmegrade Internship Completion Certificate — AIML",
    "CERA Sanitaryware Internship Completion Certificate",
    "Anthropic Course Certificate"
  ]
};

module.exports = { portfolioData };