import type { Experience } from '../types';

export const experienceData: Experience[] = [
  {
    id: "startapps",
    company: "StartApps System Pvt Ltd",
    role: "Software Developer (MERN / Django)",
    location: "Greater Noida",
    duration: "Jan 2026 – Present",
    type: "Onsite",
    description: [
      "Promoted from MERN intern to Software Developer after delivering production-ready features.",
      "Designed and implemented the Store and Product Management module for the Admin Panel of a live web portal, using React, Node.js, and MongoDB.",
      "Built a backend MVP (Node.js, Express.js, REST APIs) for a financial services client, covering user authentication, document verification, and dynamically generated reports.",
      "Designed a JSON-driven content architecture in MongoDB where UI elements (menus, buttons, page titles) are stored as structured data, and built an admin-level API to modify this content — eliminating the need for code redeployment on content changes."
    ],
    achievements: [
      "Promoted from Intern to Software Developer for high production delivery",
      "Designed JSON-driven content architecture in MongoDB eliminating code redeployments for UI updates",
      "Built backend MVP for financial services client covering auth, verification, and dynamic reports"
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Django", "REST APIs", "JavaScript", "TypeScript"]
  },
  {
    id: "mashdemy",
    company: "Mashdemy Universal",
    role: "Python Instructor (AI/ML)",
    location: "Bangalore (Remote)",
    duration: "May 2024 – Jan 2026",
    type: "Remote",
    description: [
      "Taught Python and AI/ML fundamentals to advanced concepts to students aged 18–30, translating complex ML concepts into practical, hands-on learning.",
      "Built and deployed agentic AI workflows (n8n) for a Dubai-based logistics client, automating manual coordination tasks into a working automation pipeline."
    ],
    achievements: [
      "Mentored students & professionals aged 18–30 in practical Python and AI/ML modeling",
      "Deployed automated n8n agentic AI workflow pipeline for a Dubai-based logistics client"
    ],
    technologies: ["Python", "AI/ML", "Agentic AI", "n8n", "Data Science", "Machine Learning"]
  },
  {
    id: "leopardruns",
    company: "Leopard Runs Technology",
    role: "Python Development Intern",
    location: "Bhopal (Remote)",
    duration: "Mar 2024 (1 Month)",
    type: "Remote",
    description: [
      "Assisted in development, debugging, and testing of Python source code to streamline execution and reduce runtime errors."
    ],
    achievements: [
      "Streamlined Python script execution and reduced runtime errors through structured debugging"
    ],
    technologies: ["Python", "Debugging", "Testing", "Code Optimization", "Git"]
  },
  {
    id: "desirewebworld",
    company: "Desire Web World",
    role: "Front-End Development Intern",
    location: "Prayagraj (Onsite)",
    duration: "Dec 2023 (1 Month)",
    type: "Onsite",
    description: [
      "Deployed a website using Bootstrap, PHP, and Django for a healthcare client's expansion project."
    ],
    achievements: [
      "Successfully deployed healthcare client expansion project website on schedule"
    ],
    technologies: ["Bootstrap", "PHP", "Django", "HTML5", "CSS3", "JavaScript"]
  }
];
