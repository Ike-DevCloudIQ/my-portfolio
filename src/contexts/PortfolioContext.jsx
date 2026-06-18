import React, { createContext, useContext } from "react";

// --- Import Images ---
import img_5 from "../assets/images/dev_proj_logo.gif";
import img_6 from "../assets/images/dev_proj_logo.gif";
import img_7 from "../assets/images/dev_proj_logo.gif";
import img_8 from "../assets/images/dev_proj_logo.gif";
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
      subTitle: emoji("🚀 DevOps Engineer | Cloud Automation | Reliability Enthusiast 🌍 Passionate about building cloud-native, scalable, and self-healing infrastructure. I transform complex challenges into elegant, automated solutions using AWS, Kubernetes, Docker, and Terraform. Focused on CI/CD pipelines, observability, and collaboration — helping organizations deliver software faster, safer, and smarter through automation and innovation."),
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
          schoolName: "Your College / Bootcamp",
          subHeader: "DevOps / Cloud Program",
          duration: "Year - Year",
          desc: "Hands-on program focused on cloud infrastructure, automation, and observability. Gained practical experience with AWS, Kubernetes, Docker, Terraform, Jenkins, GitHub Actions, and monitoring stacks such as Prometheus and Grafana.",
          logo: img_5
        },
        {
          schoolName: "Your University",
          subHeader: "Degree / Certification",
          duration: "Year – Year",
          desc: "Replace with your education background, degree, and key skills gained.",
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
    },
    openSource: { showGithubProfile: "false", display: false },
    bigProjects: {
      title: "DevOps Projects",
      subtitle: "End-to-end CI/CD, cloud, and automation projects from my GitHub.",
      projects: [
        {
          image: img_5,
          projectName: "My Portfolio – Full DevOps Pipeline",
          projectDesc: "Personal portfolio application with a complete CI/CD pipeline: GitHub Actions build, Docker image build & push to DockerHub, and automatic deployment to GitHub Pages.",
          footerLink: [{ name: "View on GitHub", url: "https://github.com/Ike-DevCloudIQ/my-portfolio" }, { name: "Live Demo", url: "https://ike-devcloudiq.github.io/my-portfolio/" }]
        },
        {
          image: img_6,
          projectName: "Full DevOps Project – AWS EKS",
          projectDesc: "Architecture and implementation of a full DevOps pipeline for containerized microservices: Terraform-provisioned AWS EKS, Docker, GitHub Actions CI/CD, and monitoring with Prometheus, Grafana, and Loki.",
          footerLink: [{ name: "View on GitHub", url: "https://github.com/Ike-DevCloudIQ" }]
        },
        {
          image: img_7,
          projectName: "Jenkins CI/CD on RedHat UBI8",
          projectDesc: "Custom Jenkins image based on RedHat UBI8 with Docker CLI and Java 17. Implements CI/CD pipelines to build Docker images for the portfolio app.",
          footerLink: [{ name: "View on GitHub", url: "https://github.com/Ike-DevCloudIQ" }]
        },
        {
          image: img_8,
          projectName: "YAML-Powered Resume Automation",
          projectDesc: "Infrastructure-as-text resume: data stored in YAML, converted to Markdown and PDF using Python and Pandoc, automated with GitHub Actions.",
          footerLink: [{ name: "View on GitHub", url: "https://github.com/Ike-DevCloudIQ" }]
        }
      ],
      display: true
    },
    achievementSection: {
      title: emoji("Achievements & Certifications 🏆"),
      subtitle: "Professional milestones, certifications, and continuous learning highlights from my DevOps journey.",
      achievementsCards: [
        {
          title: "AWS Certification Journey",
          subtitle: "Currently advancing through the AWS certification path with hands-on experience in cloud infrastructure, automation, and security.",
          image: img_10,
          imageAlt: "AWS Logo",
          footerLink: [{ name: "AWS Certification Info", url: "https://aws.amazon.com/certification/" }]
        },
        {
          title: "DevOps Engineering Program",
          subtitle: "Completed an intensive DevOps program focused on AWS, Kubernetes, Terraform, Jenkins, and Prometheus/Grafana.",
          image: img_5,
          imageAlt: "DevOps Program Logo",
          footerLink: [{ name: "View Program", url: "#" }]
        },
        {
          title: "Full-Stack Developer Certification",
          subtitle: "Earned certification in full-stack web development, mastering JavaScript, React, Node.js, and SQL.",
          image: img_5,
          imageAlt: "Certification Logo",
          footerLink: [{ name: "Learn More", url: "#" }]
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
