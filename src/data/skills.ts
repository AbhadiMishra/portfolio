import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    skills: [
      { name: "Python", level: "Expert", description: "Data Analysis, ML Modeling, Scripting, Streamlit Apps" },
      { name: "JavaScript (ES6+)", level: "Advanced", description: "Modern React Async, Event Loop, REST API Integration" },
      { name: "TypeScript", level: "Advanced", description: "Strict Typing, Generic Interfaces, Full-Stack Schema Sharing" },
      { name: "SQL", level: "Advanced", description: "Complex Queries, Aggregations, MySQL, SQL Server" },
      { name: "C++", level: "Intermediate", description: "Data Structures & Algorithms Fundamentals" },
      { name: "Java", level: "Intermediate", description: "Object-Oriented Programming & Core Libraries" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    skills: [
      { name: "React 19", level: "Advanced", description: "Hooks, Server/Client State, Performance Optimization" },
      { name: "Next.js", level: "Advanced", description: "App Router, SSR, Static Site Generation" },
      { name: "Tailwind CSS", level: "Advanced", description: "Responsive Layouts, Glassmorphism, Theme Design" },
      { name: "Framer Motion", level: "Advanced", description: "Micro-animations, Page Transitions, Scroll Effects" },
      { name: "Redux / Zustand", level: "Proficient", description: "Global State Management & Action Handlers" },
      { name: "HTML5 / CSS3", level: "Advanced", description: "Semantic Accessibility, Flexbox, CSS Grid" }
    ]
  },
  {
    id: "backend",
    title: "Backend Engineering",
    skills: [
      { name: "Node.js", level: "Advanced", description: "Non-blocking I/O, Event Emitters, File Systems" },
      { name: "Express.js", level: "Advanced", description: "RESTful Routing, Middleware Pipeline, Error Handling" },
      { name: "REST APIs", level: "Advanced", description: "API Contract Specs, Rate Limiting, JSON Payloads" },
      { name: "JWT & Security", level: "Proficient", description: "Auth tokens, Helmet headers, CORS policies" }
    ]
  },
  {
    id: "databases",
    title: "Database Technologies",
    skills: [
      { name: "MongoDB", level: "Advanced", description: "Document Modeling, Indexing, Aggregation Pipelines" },
      { name: "MongoDB Atlas", level: "Advanced", description: "Cloud Cluster Hosting, Security Rules, Backups" },
      { name: "MySQL", level: "Proficient", description: "Relational Schemas, Primary Key Indexes, Joins" },
      { name: "SQL Server", level: "Proficient", description: "Stored Procedures & Queries" }
    ]
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    skills: [
      { name: "PyTorch", level: "Proficient", description: "Neural Networks, Tensor Computation, Model Training" },
      { name: "Scikit-Learn", level: "Advanced", description: "Classification, Regression, Clustering, Cross-Validation" },
      { name: "TensorFlow / Keras", level: "Proficient", description: "Deep Learning Architectures" },
      { name: "OpenCV", level: "Intermediate", description: "Computer Vision & Image Preprocessing" },
      { name: "Agentic AI", level: "Advanced", description: "n8n, Relay, Relevance AI, Autonomous Agent Workflows" }
    ]
  },
  {
    id: "datascience",
    title: "Data Science & Analytics",
    skills: [
      { name: "Pandas & NumPy", level: "Expert", description: "Data Wrangling, Feature Extraction, Matrix Math" },
      { name: "EDA & Visualization", level: "Advanced", description: "Matplotlib, Seaborn, Insight Extraction" },
      { name: "Streamlit", level: "Advanced", description: "Interactive Data Apps & Dashboard Deployment" },
      { name: "Power BI & Tableau", level: "Proficient", description: "Business Intelligence Dashboards & Metrics" }
    ]
  },
  {
    id: "tools-cloud",
    title: "Developer Tools & Cloud",
    skills: [
      { name: "Git & GitHub", level: "Advanced", description: "Version Control, Feature Branching, Pull Requests" },
      { name: "Jupyter Notebooks", level: "Advanced", description: "Interactive Data Exploration & Experimentation" },
      { name: "Vercel & Render", level: "Advanced", description: "CI/CD Deployment Pipelines for MERN Stack" },
      { name: "Postman", level: "Advanced", description: "API Collection Testing, Environment Variables" }
    ]
  }
];
