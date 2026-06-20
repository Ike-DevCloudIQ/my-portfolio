import React, { createContext, useContext } from "react";

// --- Import Images ---
import img_5 from "../assets/images/dev_proj_logo.gif";
import img_10 from "../assets/images/AWS.png";
import splashAnimation from "../assets/lottie/splashAnimation";
import emoji from "react-easy-emoji";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const data = {
    splashScreen: { enabled: true, animation: splashAnimation, duration: 2000 },
    illustration: { animated: true },
    greeting: {
      username: "Ikenna",
      title: "Hi there 👋, I'm Ikenna",
      subTitleHeading: "🚀 Platform Engineer | DevOps | Cloud Automation",
      subTitle: emoji("Platform Engineer with 5+ years' experience building and operating scalable, secure cloud infrastructure across AWS and Azure. Specialising in Kubernetes platforms, Infrastructure as Code (Terraform), and CI/CD automation, I transform complex systems into resilient, self-healing solutions. Passionate about platform engineering and empowering teams through automation, self-service capabilities, and modern cloud-native practices."),
      resumeLink: "https://ike-devcloudiq.github.io/my-portfolio/Resume.pdf",
      displayGreeting: true
    },
    socialMediaLinks: {
      github: "https://github.com/Ike-DevCloudIQ",
      linkedin: "https://www.linkedin.com/in/ikenna2/",
      gmail: "ikennaubah2@yahoo.com",
      display: true
    },
    skillsSection: {
      title: "Core Expertise",
      subTitle: "DEVOPS ENGINEER | CLOUD INFRASTRUCTURE | AUTOMATION & RELIABILITY ENGINEERING",
      skills: [
        emoji("⚡ Architect, provision, and manage scalable cloud infrastructure using AWS (EKS, EC2, Lambda, RDS, S3) and Terraform"),
        emoji("⚡ Design and implement end-to-end CI/CD pipelines with GitHub Actions, Jenkins, and ArgoCD for automated deployments"),
        emoji("⚡ Build and maintain containerized microservices with Docker, Helm, and Kubernetes for high availability and scalability"),
        emoji("⚡ Establish observability with Prometheus, Grafana, Loki, and Alertmanager for proactive monitoring and alerting"),
        emoji("⚡ Automate system configuration and environment provisioning using Ansible, Bash, and Python scripting"),
        emoji("⚡ Manage secure secrets and configurations with GitOps workflows")
      ],
      softwareSkills: [
        { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
        { skillName: "Terraform", fontAwesomeClassname: "fas fa-cogs" },
        { skillName: "Ansible", fontAwesomeClassname: "fas fa-server" },
        { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
        { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-network-wired" },
        { skillName: "Helm", fontAwesomeClassname: "fas fa-anchor" },
        { skillName: "GitHub Actions", fontAwesomeClassname: "fab fa-github" },
        { skillName: "Jenkins", fontAwesomeClassname: "fas fa-tools" },
        { skillName: "Prometheus", fontAwesomeClassname: "fas fa-chart-line" },
        { skillName: "Grafana", fontAwesomeClassname: "fas fa-chart-pie" },
        { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
        { skillName: "Bash", fontAwesomeClassname: "fas fa-terminal" }
      ],
      display: true
    },
    educationInfo: {
      display: true,
      title: "Education",
      schools: [
        {
          schoolName: "Nnamdi Azikiwe University, Awka",
          subHeader: "B.Eng. Chemical Engineering",
          duration: "2008 – 2013",
          desc: "Built a strong analytical and problem-solving foundation through engineering principles, process design, and systems thinking — later channelled into cloud infrastructure, automation, and platform engineering.",
          logo: img_5
        }
      ]
    },
    techStack: {
      title: "Proficiency",
      viewSkillBars: true,
      experience: [
        { Stack: "CI/CD & Deployment Automation (GitHub Actions, Jenkins, ArgoCD)", progressPercentage: "90%" },
        { Stack: "Cloud Infrastructure & IaC (AWS, Terraform, Ansible, Helm)", progressPercentage: "88%" },
        { Stack: "Scripting & Automation (Bash, Python, Node.js)", progressPercentage: "85%" },
        { Stack: "Observability & Monitoring (Prometheus, Grafana, Loki)", progressPercentage: "87%" },
        { Stack: "Containerization & Microservices (Docker, Kubernetes)", progressPercentage: "90%" }
      ],
      displayCodersrank: false
    },
    workExperiences: {
      title: "Experiences",
      display: true,
      experience: [
        {
          role: "DevOps Engineer",
          company: "Capital One",
          date: "Apr 2023 – Present",
          desc: "Birmingham, United Kingdom — Designed and delivered scalable cloud platforms across Azure and AWS using Terraform, improving provisioning efficiency by 60%, and built CI/CD pipelines with GitHub Actions and Jenkins that reduced deployment failures by 40%. Led technical architecture reviews across POD teams, enhanced observability with Prometheus and Grafana, strengthened cloud security through IAM/RBAC redesigns and secrets management, and productionized AI/RAG workloads (FastAPI, LLMs, vector databases) on Kubernetes.",
          companylogo: img_5
        },
        {
          role: "Cloud / Platform Engineer",
          company: "Alcatel Submarine Networks",
          date: "Nov 2021 – Mar 2023",
          desc: "London, United Kingdom — Automated Azure infrastructure with Terraform and ARM templates, reducing manual configuration by 50%, and developed reusable IaC patterns for compute, networking, and storage across environments. Implemented cloud monitoring, cost optimisation, and operational dashboards, strengthened security via RBAC design and governance policies, and provided engineering leadership across Azure, AWS, DevOps tooling, MLOps, and cloud architecture.",
          companylogo: img_5
        },
        {
          role: "DevOps Engineer",
          company: "United Nations (IOM)",
          date: "Feb 2020 – Nov 2021",
          desc: "London, United Kingdom — Built and maintained CI/CD pipelines with Jenkins, GitHub Actions, and Maven for secure application delivery, and automated server configuration with Ansible and Python to improve reliability. Managed Kubernetes clusters for high-demand containerised workloads, optimised GPU utilisation with quantization to cut inference latency and cost, automated UNIX system patching for compliance, and supported Agile teams with scalable environments.",
          companylogo: img_5
        }
      ]
    },
    openSource: { showGithubProfile: "false", display: false },
    bigProjects: {
      title: "DevOps Projects",
      subtitle: "End-to-end CI/CD, cloud, and automation projects from my GitHub.",
      projects: [
        {
          image: "https://raw.githubusercontent.com/Ike-DevCloudIQ/end-to-end-devops-aws/main/Images/Ultimate%20Project%20Architecture.gif",
          projectName: "End-to-End DevOps on AWS: Microservices, CI/CD, GitOps & Observability",
          projectDesc: "Production-grade DevOps platform for a 16-service microservices application on AWS. Terraform provisions the VPC, EKS cluster, and remote state backend (S3 + DynamoDB); GitHub Actions automates container builds and manifest updates; ArgoCD drives GitOps continuous delivery with auto-sync, drift detection, and self-healing; and Jaeger, Prometheus, and Grafana provide end-to-end observability.",
          footerLink: [{ name: "View on GitHub", url: "https://github.com/Ike-DevCloudIQ/end-to-end-devops-aws" }]
        },
        {
          image: "https://raw.githubusercontent.com/Ike-DevCloudIQ/3-Tier-Architecture/main/images/14-architecture-diagram.gif",
          projectName: "Enterprise 3-Tier AWS Architecture with Terraform",
          projectDesc: "Production-ready, highly available 3-tier web architecture deployed on AWS with Terraform. Features multi-AZ Auto Scaling web and app tiers behind external and internal Application Load Balancers, an RDS MySQL Multi-AZ database, and defense-in-depth security groups with least-privilege access, following AWS Well-Architected Framework principles.",
          footerLink: [{ name: "View on GitHub", url: "https://github.com/Ike-DevCloudIQ/3-Tier-Architecture" }]
        },
        {
          image: "https://raw.githubusercontent.com/Ike-DevCloudIQ/Healthcare-Application/main/screenshots/App-Sigin.png",
          projectName: "Healthcare Consultation Assistant",
          projectDesc: "Full-stack AI SaaS for medical professionals that turns consultation notes into professional summaries, action items, and patient-friendly email drafts. Built with Next.js, TypeScript, and Tailwind CSS on the frontend and a FastAPI + OpenAI GPT backend with real-time streaming, Clerk authentication and billing, and Docker-based deployment to AWS App Runner.",
          footerLink: [{ name: "View on GitHub", url: "https://github.com/Ike-DevCloudIQ/Healthcare-Application" }]
        }
      ],
      display: true
    },
    achievementSection: {
      title: emoji("Achievements & Certifications 🏆"),
      subtitle: "Professional milestones, certifications, and continuous learning highlights from my DevOps journey.",
      achievementsCards: [
        {
          title: "Microsoft Certified: DevOps Engineer Expert (AZ-400)",
          subtitle: "Validated expertise in designing and implementing DevOps practices, CI/CD pipelines, and infrastructure automation across Azure environments.",
          image: img_10,
          imageAlt: "Microsoft Certified Logo",
          footerLink: [{ name: "AZ-400 Certification", url: "https://learn.microsoft.com/credentials/certifications/devops-engineer/" }]
        },
        {
          title: "Microsoft Certified: Azure Security Engineer Associate (AZ-500)",
          subtitle: "Demonstrated skills in implementing security controls, identity and access management, and threat protection across Azure workloads.",
          image: img_10,
          imageAlt: "Microsoft Certified Logo",
          footerLink: [{ name: "AZ-500 Certification", url: "https://learn.microsoft.com/credentials/certifications/azure-security-engineer/" }]
        },
        {
          title: "Microsoft Certified: Azure Developer Associate (AZ-204)",
          subtitle: "Certified in designing, building, and maintaining cloud applications and services on Microsoft Azure.",
          image: img_10,
          imageAlt: "Microsoft Certified Logo",
          footerLink: [{ name: "AZ-204 Certification", url: "https://learn.microsoft.com/credentials/certifications/azure-developer/" }]
        },
        {
          title: "HashiCorp Certified: Terraform Associate",
          subtitle: "Validated proficiency in Infrastructure as Code, provisioning, and managing cloud resources with Terraform.",
          image: img_5,
          imageAlt: "HashiCorp Logo",
          footerLink: [{ name: "Terraform Associate", url: "https://www.hashicorp.com/certification/terraform-associate" }]
        }
      ],
      display: true
    },
    blogSection: { title: "Articles & Blog Posts", subtitle: "In-depth notes, how-tos, and reflections on DevOps.", displayMediumBlogs: "false", blogs: [], display: true },
    talkSection: { title: "Talks & Meetups", subtitle: emoji("Tech talks, internal knowledge-sharing sessions, and community events will be added here soon 🎤"), talks: [], display: true },
    podcastSection: { title: emoji("Podcast 🎙️"), subtitle: "Planning future episodes about real-world DevOps challenges, cloud architectures, and career growth.", podcast: [], display: true },
    resumeSection: { title: "Resume", subtitle: "Download my resume to get a full overview of my DevOps experience, skills, and professional background.", display: true },
    contactInfo: { title: "Contact Me", subtitle: "I'm always open to exciting DevOps opportunities, cloud projects, or collaborations. Feel free to reach out — let's build something great together!", number: "07456341662", email_address: "ikennaubah2@yahoo.com" },
    twitterDetails: { userName: "", display: false },
    isHireable: false
  };

  return (
    <PortfolioContext.Provider value={data}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  return useContext(PortfolioContext);
};
