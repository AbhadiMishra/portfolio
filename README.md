# Abhinav Mishra — Production Software Portfolio

> **Python Developer | AI / ML Engineer | Data Analyst | MERN & Django Developer**  
> 📍 Greater Noida / Prayagraj, UP, India • 📧 [abhinavmishra.smps@gmail.com](mailto:abhinavmishra.smps@gmail.com) • 🌐 [LinkedIn](https://www.linkedin.com/in/abhadimishra/) • 💻 [GitHub](https://github.com/AbhadiMishra)

---

## 🌟 Overview & Introduction

Welcome to the production portfolio of **Abhinav Mishra**. This application is engineered as a high-performance, serverless Single Page Application (SPA) designed to showcase full-stack web engineering, applied machine learning pipelines, agentic AI workflow automation, and visual data analytics.

The application features a modern glassmorphism design system, high-contrast dark/light dual-theme support, interactive project case studies, an interactive rendered CV, and an interactive GitHub Universe-inspired animated background canvas.

---

## 🗺️ Interactive Portfolio Sitemap

| Route                   | Section                 | Description & Features                                                                                                                                    |
| :---------------------- | :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`/#/`**               | **Home**                | Hero section with dynamic typewriter headline, open-to-work status indicator, quick metrics bar, featured engineering projects, and core skill summaries. |
| **`/#/about`**          | **About**               | Professional journey bio, National Child Scientist recognition, core engineering strengths grid, technical interests, and career target goals.            |
| **`/#/skills`**         | **Technical Stack**     | Interactive filterable skills categorized into Programming, AI/ML, Data Analysis & Visualization, Web Development, and Cloud & Tools.                     |
| **`/#/projects`**       | **Projects Showcase**   | Filterable project catalog (_All_, _MERN_, _Python_, _AI_, _Machine Learning_, _Data Science_) with problem statements, tech tags, and links.             |
| **`/#/projects/:slug`** | **Case Studies**        | In-depth project case studies detailing problem statement, system architecture, workflow steps, challenges, solutions, and future roadmap.                |
| **`/#/experience`**     | **Experience Timeline** | Professional experience timeline detailing roles at StartApps System Pvt Ltd, Mashdemy Universal, Leopard Runs Technology, and Desire Web World.          |
| **`/#/education`**      | **Education**           | Academic background detailing Master of Computer Application (MCA @ ABES / AKTU) and Bachelor of Computer Application (BCA @ ECC / UoA).                  |
| **`/#/certifications`** | **Certifications**      | Verified certifications including IBM Data Science (Coursera), AWS Cloud Practitioner, Python & Django, and NCSTC National Child Scientist Award.         |
| **`/#/github`**         | **GitHub Activity**     | Public open-source activity, pinned repositories (`ShieldPics`, `WhatsApp_Chat_Analysis_WebApp`, `Sales_Data_Analysis_Prediction`), and metrics.          |
| **`/#/resume`**         | **Interactive Resume**  | Rendered interactive CV matching official PDF resume, complete with a 1-click **Print / Save PDF** functionality.                                         |
| **`/#/contact`**        | **Contact & Inquiries** | Direct email contact interface with pre-formatted `mailto:` triggers and 1-click message copy functionality.                                              |

---

## ⚡ Technology Stack

### **1. Core Frontend & Web Architecture**

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + Glassmorphism UI Design Tokens
- **Animations**: Framer Motion + Custom HTML5 Canvas GitHub Universe Particle Background
- **Icons**: Lucide React + Custom Brand Icons
- **Routing**: React Router (`HashRouter` for zero-config GitHub Pages compatibility)

### **2. AI, Machine Learning & Data Science**

- **ML Frameworks**: PyTorch, Scikit-learn, TensorFlow, Keras, OpenCV
- **Data Processing & Analytics**: Pandas, NumPy, SciPy, Regex Preprocessing
- **Data Visualization & BI**: Power BI, Tableau, Matplotlib, Seaborn
- **Interactive Data Apps**: Streamlit Cloud
- **Agentic AI & Workflow Automation**: n8n, Relevance AI, Relay, Webhooks, LLM Prompt Routing

### **3. Full-Stack & Database Engineering**

- **Languages**: Python, JavaScript (ES6+), SQL
- **Web Frameworks**: Node.js, Express.js, Next.js, Django
- **Database Systems**: MongoDB, MongoDB Atlas, MySQL, SQL Server
- **Security & Cryptography**: Client-Side AES-GCM Encryption, Web Crypto API, Google OAuth, JWT Authentication, HTTP-only Cookie Rules
- **Cloud & Infrastructure**: AWS (S3, EC2), MinIO Encrypted Object Storage, Vercel, Render, Git / GitHub

---

## 📁 Repository Structure

```text
portfolio/
├── frontend/
│   ├── public/                 # Static assets, favicon, robots.txt, sitemap.xml
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── common/         # SectionHeader, Badge, BrandIcons, UniverseBackground
│   │   │   └── layout/         # Navbar, Footer
│   │   ├── data/               # Static TypeScript data modules
│   │   │   ├── profile.ts      # Profile, summary, social links, core strengths
│   │   │   ├── projects.ts     # Detailed project case studies
│   │   │   ├── experience.ts   # Work experience timeline data
│   │   │   ├── education.ts    # Academic qualifications
│   │   │   ├── certifications.ts # Certifications & honors
│   │   │   └── skills.ts       # Categorized skill primitive data
│   │   ├── hooks/              # Custom hooks (useTheme)
│   │   ├── pages/              # Application views & pages
│   │   ├── types/              # TypeScript interfaces & types
│   │   ├── App.tsx             # Main App layout & route definitions
│   │   ├── main.tsx            # React entry point
│   │   └── index.css           # Global Tailwind CSS v4 styles & theme overrides
│   ├── package.json            # Frontend dependencies & build scripts
│   └── vite.config.ts          # Vite configuration & path aliases
├── package.json                # Root package configuration & convenience scripts
└── README.md                   # Project documentation
```

---

## 🛠️ Local Development & Deployment

### **1. Run Locally**

```bash
# Clone the repository
git clone https://github.com/AbhadiMishra/portfolio.git
cd portfolio

# Install dependencies and start local dev server
cd frontend
npm install
npm run dev
```

> 🚀 Open `http://localhost:5173` in your browser.

---

### **2. Build for Production**

```bash
npm run build:frontend
```

> ⚡ Generates an optimized, minified static production bundle in `frontend/dist/`.

---

### **3. Deploy to GitHub Pages**

```bash
npm run deploy
```

> 🌐 Automatically builds and publishes the production SPA to GitHub Pages at **`https://AbhadiMishra.github.io/portfolio/`**.

---

## 📄 License & Attribution

Designed and engineered by **Abhinav Mishra** (© 2026). Open source under the MIT License.
