import img_0 from "./assets/images/Elbit-logo.png";
import img_1 from "./assets/images/firewave_earth_logo.jpeg";
import img_2 from "./assets/images/Matrix_logo.jpg";
import img_3 from "./assets/images/logisticare.png";
import img_4 from "./assets/images/IDF.png";
import img_5 from "./assets/images/dev_proj_logo.gif";
import img_6 from "./assets/images/dev_proj_logo.gif";
import img_7 from "./assets/images/dev_proj_logo.gif";
import img_8 from "./assets/images/dev_proj_logo.gif";
import img_9 from "./assets/images/AWS.png";
import img_10 from "./assets/images/AWS.png";
import img_11 from "./assets/images/real_time_logo.png";
import img_12 from "./assets/images/netcraft_logo.jpeg";
/* Ikenna Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Ikenna",
  title: "Hi there 👋, I'm Ikenna",
subTitle: emoji(
  "🚀 DevOps Engineer | Cloud Automation | Reliability Enthusiast 🌍 Passionate about building cloud-native, scalable, and self-healing infrastructure. I transform complex challenges into elegant, automated solutions using AWS, Kubernetes, Docker, and Terraform. Focused on CI/CD pipelines, observability, and collaboration — helping organizations deliver software faster, safer, and smarter through automation and innovation."
),
resumeLink: "https://ike-devcloudiq.github.io/my-portfolio/Resume.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Ike-DevCloudIQ",
  linkedin: "https://www.linkedin.com/in/ikenna2/",
  gmail: "ikennaubah2@yahoo.com",
  display: true
};

const skillsSection = {
  title: "Core Expertise",
  subTitle: "DEVOPS ENGINEER | CLOUD INFRASTRUCTURE | AUTOMATION & RELIABILITY ENGINEERING",
  skills: [
    emoji("⚡ Architect, provision, and manage scalable cloud infrastructure using AWS (EKS, EC2, Lambda, RDS, S3) and Terraform"),
    emoji("⚡ Design and implement end-to-end CI/CD pipelines with GitHub Actions, Jenkins, and ArgoCD for automated deployments"),
    emoji("⚡ Build and maintain containerized microservices with Docker, Helm, and Kubernetes for high availability and scalability"),
    emoji("⚡ Establish observability with Prometheus, Grafana, Loki, and Alertmanager for proactive monitoring and alerting"),
    emoji("⚡ Automate system configuration and environment provisioning using Ansible, Bash, and Python scripting"),
    emoji("⚡ Manage secure secrets and configurations with AWS Secrets Manager and GitOps workflows"),
    emoji("⚡ Integrate automated testing, vulnerability scanning, and code-quality checks (SonarQube, Trivy, OWASP) into CI/CD pipelines"),
    emoji("⚡ Collaborate cross-functionally with developers, QA, and operations to accelerate delivery and improve reliability"),
    emoji("⚡ Optimize cost, performance, and resilience of cloud workloads through data-driven monitoring and continuous improvement")
  ],

  softwareSkills: [
    // ☁️ Cloud & Infrastructure
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Terraform", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "Ansible", fontAwesomeClassname: "fas fa-server" },

    // 🧱 Containers & Orchestration
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Helm", fontAwesomeClassname: "fas fa-anchor" },

    // 🔁 CI/CD & Automation
    { skillName: "GitHub Actions", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Jenkins", fontAwesomeClassname: "fas fa-tools" },
    { skillName: "ArgoCD", fontAwesomeClassname: "fas fa-code-branch" },

    // 📊 Monitoring & Observability
    { skillName: "Prometheus", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "Grafana", fontAwesomeClassname: "fas fa-chart-pie" },
    { skillName: "Loki", fontAwesomeClassname: "fas fa-eye" },

    // 💻 Development & Scripting
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Bash", fontAwesomeClassname: "fas fa-terminal" },

    // 🗄️ Databases & Data Tools
    { skillName: "MSSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" },
  ],

  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Your College / Bootcamp",
      subHeader: "DevOps / Cloud Program",
      duration: "Year - Year",
      desc: "Hands-on program focused on cloud infrastructure, automation, and observability. Gained practical experience with AWS, Kubernetes, Docker, Terraform, Jenkins, GitHub Actions, and monitoring stacks such as Prometheus and Grafana."
    },
    {
      schoolName: "Your University",
      subHeader: "Degree / Certification",
      duration: "Year – Year",
      desc: "Replace with your education background, degree, and key skills gained."
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "CI/CD & Deployment Automation (GitHub Actions, Jenkins, ArgoCD, DockerHub)", progressPercentage: "90%" },
    { Stack: "Cloud Infrastructure & IaC (AWS, Terraform, Ansible, Helm)", progressPercentage: "88%" },
    { Stack: "Scripting & Automation (Bash, Python, Node.js)", progressPercentage: "85%" },
    { Stack: "Observability & Monitoring (Prometheus, Grafana, Loki, Alertmanager)", progressPercentage: "87%" },
    { Stack: "Containerization & Microservices (Docker, Kubernetes, Multi-stage builds, EKS)", progressPercentage: "90%" },
    { Stack: "Version Control & Collaboration (Git, GitHub, GitOps workflows)", progressPercentage: "92%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "DevOps Engineer",
      company: "Company Name",
      date: "Year – Present",
      desc: "Describe your role: design, implement, and maintain CI/CD pipelines and cloud-native infrastructure to support reliable, secure software delivery across environments.",
      companylogo: img_5
    },
    {
      role: "Cloud / DevOps Engineer",
      company: "Previous Company",
      date: "Year – Year",
      desc: "Automated AWS infrastructure with Terraform, designed CI/CD pipelines in GitHub Actions, and deployed containerized microservices on Kubernetes. Integrated Prometheus and Grafana for observability.",
      companylogo: img_5
    },
    {
      role: "Junior DevOps / SysAdmin",
      company: "Earlier Company",
      date: "Year – Year",
      desc: "Supported infrastructure operations, scripting and automation with Bash/Python, and CI/CD tooling. Replace this with your own experience.",
      companylogo: img_5
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: false
};

// const bigProjects = {
//   title: "Projects",
//   subtitle: "Some personal and professional projects I've worked on.",
//   projects: [],
//   display: false
// };

const bigProjects = {
  title: "DevOps Projects",
  subtitle: "End-to-end CI/CD, cloud, and automation projects from my GitHub.",
  projects: [
    {
      image: img_5,
      projectName: "My Portfolio – Full DevOps Pipeline",
      projectDesc:
        "Personal portfolio application with a complete CI/CD pipeline: GitHub Actions build, Docker image build & push to DockerHub, and automatic deployment to GitHub Pages.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Ike-DevCloudIQ/my-portfolio"
        },
        {
          name: "Live Demo",
          url: "https://ike-devcloudiq.github.io/my-portfolio/"
        }
      ]
    },
    {
      image: img_6,
      projectName: "Full DevOps Project – AWS EKS",
      projectDesc:
        "Architecture and implementation of a full DevOps pipeline for containerized microservices: Terraform-provisioned AWS EKS, Docker, GitHub Actions CI/CD, JFrog & DockerHub registries, and monitoring with Prometheus, Grafana, and Loki.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Ike-DevCloudIQ"
        }
      ]
    },
    {
      image: img_7,
      projectName: "Jenkins CI/CD on RedHat UBI8",
      projectDesc:
        "Custom Jenkins image based on RedHat UBI8 with Docker CLI and Java 17. Implements CI/CD pipelines to build Docker images for the portfolio app and push them to DockerHub and JFrog with environment-based promotion (DEV/PROD).",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Ike-DevCloudIQ"
        }
      ]
    },
    {
      image: img_8,
      projectName: "YAML-Powered Resume Automation",
      projectDesc:
        "Infrastructure-as-text resume: data stored in YAML, converted to Markdown and PDF using Python and Pandoc, automated with GitHub Actions so every change in YAML generates a fresh resume PDF.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Ike-DevCloudIQ"
        }
      ]
    }
  ],
  display: true
};

// const achievementSection = {
//   title: emoji("Achievements and Certifications 🏆"),
//   subtitle: "Certifications and accomplishments along my journey.",
//   achievementsCards: [
//     {
//       title: "AWS Certification Journey",
//       subtitle: "Working and learning AWS certification - my goal is to pass it by the end of 2025",
//       image: img_9, // אם אין לך תמונה, אפשר לשים לוגו כללי
//       imageAlt: "AWS Logo",
//       footerLink: [
//         {
//           name: "AWS Certification Info",
//           url: "https://aws.amazon.com/certification/"
//         }
//       ]
//     }
//   ],
//   display: true
// };

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Professional milestones, certifications, and continuous learning highlights from my DevOps journey.",
  achievementsCards: [
    {
      title: "AWS Certification Journey",
      subtitle:
        "Currently advancing through the AWS certification path with hands-on experience in cloud infrastructure, automation, and security. Targeting AWS Certified DevOps Engineer by the end of 2025.",
      image: img_10,
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "AWS Certification Info",
          url: "https://aws.amazon.com/certification/"
        }
      ]
    },
    {
      title: "DevOps Engineering Program",
      subtitle:
        "Completed an intensive DevOps program focused on AWS, Kubernetes, Terraform, Jenkins, and Prometheus/Grafana — applying real-world automation and CI/CD practices.",
      image: img_11,
      imageAlt: "DevOps Program Logo",
      footerLink: [
        {
          name: "View Program",
          url: "#" // optional: replace with your actual program link
        }
      ]
    },
    {
      title: "Full-Stack Developer Certification",
      subtitle:
        "Earned certification in full-stack web development, mastering JavaScript, React, Node.js, and SQL through hands-on projects.",
      image: img_12,
      imageAlt: "Certification Logo",
      footerLink: [
        {
          name: "Learn More",
          url: "#" // optional: replace with official link
        }
      ]
    }
  ],
  display: true
};

// const blogSection = {
//   title: "Blogs",
//   subtitle: "Sharing knowledge and insights about DevOps and cloud technologies.",
//   displayMediumBlogs: "false",
//   blogs: [],
//   display: false
// };

// const talkSection = {
//   title: "Talks",
//   subtitle: emoji("Coming soon!"),
//   talks: [],
//   display: false
// };

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "Coming soon!",
//   podcast: [],
//   display: false
// };

// const resumeSection = {
//   title: "Resume",
//   subtitle: "Feel free to download my resume",
//   display: true
// };

const blogSection = {
  title: "Articles & Blog Posts",
  subtitle: "In-depth notes, how-tos, and reflections on DevOps, cloud infrastructure, and automation (coming soon).",
  displayMediumBlogs: "false",
  blogs: [],
  display: true
};

const talkSection = {
  title: "Talks & Meetups",
  subtitle: emoji("Tech talks, internal knowledge-sharing sessions, and community events will be added here soon 🎤"),
  talks: [],
  display: true
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Planning future episodes about real-world DevOps challenges, cloud architectures, and career growth.",
  podcast: [],
  display: true
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume to get a full overview of my DevOps experience, skills, and professional background.",
  display: true
};

// const contactInfo = {
//   title: emoji("Contact Me ☎️"),
//   subtitle: "Open for opportunities and collaborations!",
//   number: "+972-52-5381655",
//   email_address: "Costa84@gmail.com"
// };

const contactInfo = {
  title: emoji("Let's Connect ☎️"),
  subtitle:
    "I'm always open to exciting DevOps opportunities, cloud projects, or collaborations. Feel free to reach out — let's build something great together!",
  number: "07456341662",
  email_address: "ikennaubah2@yahoo.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
