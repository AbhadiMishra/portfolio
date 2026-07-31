import type { SkillCategory } from "../types";

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming",
    skills: [
      {
        name: "Python",
        level: "Expert",
        description: "Data Analysis, ML Pipelines, Agentic AI, Scripting, Django",
      },
      {
        name: "JavaScript (ES6+)",
        level: "Advanced",
        description: "Async Logic, ReactJS, NodeJS, NextJS, ExpressJS",
      },
      {
        name: "SQL",
        level: "Advanced",
        description: "Complex Queries, Aggregations, MySQL, SQL Server",
      },
    ],
  },
  {
    id: "ai-ml",
    title: "AI / Machine Learning",
    skills: [
      {
        name: "PyTorch",
        level: "Proficient",
        description: "Neural Networks & Deep Learning Model Architecture",
      },
      {
        name: "Scikit-Learn",
        level: "Advanced",
        description: "Classification, Regression, Clustering, EDA, Evaluation",
      },
      {
        name: "TensorFlow & Keras",
        level: "Proficient",
        description: "Deep Learning & Model Training Pipelines",
      },
      {
        name: "OpenCV",
        level: "Intermediate",
        description: "Computer Vision & Image Processing",
      },
      {
        name: "Agentic AI Workflows",
        level: "Advanced",
        description: "n8n, Relevance, Relay, Autonomous Automation Pipelines",
      },
    ],
  },
  {
    id: "data-analysis",
    title: "Data Analysis & Visualization",
    skills: [
      {
        name: "Pandas & NumPy",
        level: "Expert",
        description: "Data Wrangling, Preprocessing, Feature Engineering",
      },
      {
        name: "Power BI & Tableau",
        level: "Advanced",
        description: "Business Intelligence Dashboards & Visual Analytics",
      },
      {
        name: "Matplotlib & Seaborn",
        level: "Advanced",
        description: "Exploratory Data Analysis & Statistical Plotting",
      },
    ],
  },
  {
    id: "web-dev",
    title: "Web Development",
    skills: [
      {
        name: "ReactJS & NextJS",
        level: "Advanced",
        description: "Component Architecture, UI Design, Hooks, SSR",
      },
      {
        name: "NodeJS & ExpressJS",
        level: "Advanced",
        description: "REST APIs, Auth Middleware, Server Operations",
      },
      {
        name: "Django",
        level: "Proficient",
        description: "Python Full-Stack Web Development & ORM Services",
      },
      {
        name: "MongoDB & MongoDB Atlas",
        level: "Advanced",
        description: "Document Storage, JSON Schemas, Aggregation Pipelines",
      },
      {
        name: "MySQL & SQL Server",
        level: "Proficient",
        description: "Relational Schemas & Stored Procedures",
      },
    ],
  },
  {
    id: "cloud-tools",
    title: "Cloud & Tools",
    skills: [
      {
        name: "AWS (S3, EC2)",
        level: "Coursework Certified",
        description: "Cloud Storage Bucket Integration & Virtual Instance Hosting",
      },
      {
        name: "MinIO",
        level: "Advanced",
        description: "Self-Hosted S3-Compatible Encrypted Object Storage",
      },
      {
        name: "Vercel & Render",
        level: "Advanced",
        description: "Multi-Service Deployment Pipelines for Full-Stack Apps",
      },
      {
        name: "Git / GitHub",
        level: "Advanced",
        description: "Version Control, Feature Branching, Open Source",
      },
    ],
  },
];
