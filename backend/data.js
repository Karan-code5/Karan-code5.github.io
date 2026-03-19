const portfolioData = {
  profile: {
    name: "KARAN PANCHAL",
    email: "panchalk250@gmail.com",
    phone: "+91-9157786995",
    linkedin: "https://www.linkedin.com/in/karan-panchal-b03863301/", 
    profileImage: "/images/profile.jpg", // Using lowercase jpg for maximum compatibility
    totalExperience: "1+ YEAR EXPERIENCE",
    specialInterests: ["Sketch", "Realistic Portraits"]
  },
  skills: {
    programming: ["Swift", "Shell", "C", "Java", "Python", "HTML", "CSS", "JavaScript", "SQL"],
    platforms: ["VSCode", "PyCharm", "MySQL", "Google Sheets", "Tableau", "Google Colab", "Anaconda"],
    operatingSystems: ["Linux", "Windows", "macOS"],
    databases: ["MySQL"],
    securityOperations: ["Active Defense", "EDR/XDR Security", "Automated Deployment", "Log Analytics", "SIEM Analysis", "Threat Hunting"],
    softSkills: ["Leadership", "Problem Solving", "Event Management", "Communication Skills", "Logical Thinking"]
  },
  workExperience: [
    {
      role: "SECURITY ENGINEER | SECURITY ANALYTICS",
      company: "INFOPERCEPT CONSULTING PRIVATE LIMITED",
      type: "Full-stack Security Developer",
      duration: "June 2024 - Current",
      highlights: [
        "Specializing in EDR, XDR, and SIEM solutions to provide comprehensive threat detection and response.",
        "Developing the 'AppControl' agent, a specialized endpoint security solution providing granular application control.",
        "Implementing system-level security features using C, Swift, and Shell for macOS and Windows environments.",
        "Analyzing security logs and debugging agent workflows to enhance endpoint reliability and threat mitigation."
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
        "Performed data analysis and visualization to deliver actionable insights and support decisions."
      ]
    },
    {
      role: "SOFTWARE ENGINEER",
      company: "CERA SANITARYWARE LIMITED",
      type: "Summer Internship",
      duration: "July 2024",
      highlights: [
        "Performed comprehensive testing and code coverage analysis for Websites.",
        "Identified and resolved critical bugs resulting in 30% enhancement of the overall software quality.",
        "Developed python base solution for enhance website efficiency and reducing the lines of code.",
        "Utilized python, XML, Django, MySQL to implement a user-centric testing approach."
      ]
    }
  ],
  education: [
    {
      institution: "INDRASHIL UNIVERSITY",
      location: "Ahmedabad",
      branch: "Computer Science & Engineering",      score: "8.30 CGPA",
      duration: "2022 - Current"
    },
    {
      institution: "AADARSH SCHOOL",
      grade: "10th",
      score: "75%",
      duration: "2019 - 2020"
    },
    {
      institution: "AADARSH HIGH SCHOOL",
      grade: "12th",
      score: "60%",
      duration: "2021 - 2022"
    }
  ],
  projects: [
    {
      title: "AppControl Agent | INFOPERCEPT",
      tech: "C, Swift, Shell, macOS, Windows",
      description: "A high-performance endpoint security agent providing granular application control and real-time threat prevention.",
      features: ["Endpoint Security", "Granular App Control", "System-level Monitoring", "Cross-platform Deployment"]
    },
    {
      title: "Online Quiz System",
      tech: "HTML, CSS, JavaScript, Google Sheet",
      description: "Created a website for OPTIMIZING handwork usage and enhancing examination cycle.",
      features: ["Timer-based Quiz system", "Manage Question-Answer system", "Examination status"]
    },
    {
      title: "E-Auction | CERA SANITARYWARE LIMITED",
      tech: "HTML, CSS, Python (Django), SQLite",
      description: "Developed an online car E-Auction platform with real-time bidding.",
      features: ["Real-time bidding", "Diverse vehicle listings", "Fair pricing and transparency"]
    }
  ],
  certifications: [
    "Infopercept Consulting Pvt. Ltd Internship Certificate",
    "Acmegrade Internship completion Certificate on AIML",
    "CERA Internship completion Certificate",
    "Anthropic Course Certificate"
  ]
};

module.exports = { portfolioData };