import type { Project } from "../types";

export const projectsData: Project[] = [
    {
        id: "shieldpics",
        title: "ShieldPics — Secure Image Sharing System",
        slug: "shieldpics",
        shortDescription:
            "Zero-knowledge, privacy-first image storage platform featuring client-side AES-GCM encryption, Google OAuth + JWT authentication, AWS S3 / MinIO storage, and real-time event notifications.",
        category: ["MERN", "Python"],
        featured: true,
        problemSolved:
            "Centralized cloud storage platforms often store images in plaintext, making user media vulnerable to server data breaches, unauthorized access, and privacy leaks.",
        architectureOverview:
            "Designed a multi-service, zero-knowledge architecture where client-side AES-GCM encryption ensures the backend server never accesses plaintext image data. Multi-tier infrastructure deployed with backend on Vercel, frontend on Render, MongoDB Atlas database, and AWS S3 / MinIO for encrypted object storage.",
        features: [
            "Zero-knowledge privacy-first storage using client-side AES-GCM encryption",
            "Google OAuth + JWT authentication with access tokens stored in memory and refresh tokens in HTTP-only cookies to mitigate XSS and session hijacking",
            "Layered backend architecture (routes, controllers, services, repositories)",
            "Real-time WebSocket notifications for image lifecycle events",
            "Cloud-integrated encrypted storage pipeline using AWS S3 and MinIO",
        ],
        technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB Atlas",
            "AWS S3",
            "MinIO",
            "AES-GCM",
            "JWT",
            "OAuth",
            "WebSockets",
        ],
        githubUrl: "https://github.com/AbhadiMishra/ShieldPics",
        overview:
            "Built as a solo project over ~3 months, ShieldPics represents a production-grade secure image distribution platform designed to protect media privacy using modern cryptography and layered cloud architecture.",
        workflow: [
            "1. User authenticates via Google OAuth and receives JWT credentials stored securely",
            "2. Images are encrypted client-side using AES-GCM prior to network transmission",
            "3. Encrypted binary streams are stored on AWS S3 / MinIO via backend service layer",
            "4. Real-time sockets notify subscribers of access events while metadata persists on MongoDB Atlas",
        ],
        challenges: [
            "Performing AES-GCM client-side encryption efficiently without freezing browser main thread",
            "Securing token storage against XSS and session hijacking threats",
        ],
        solutions: [
            "Leveraged Web Crypto API streams for fast, non-blocking browser encryption",
            "Stored access tokens in memory and refresh tokens inside HTTP-only secure cookies",
        ],
        lessonsLearned: [
            "Zero-knowledge architecture significantly elevates security by removing backend data exposure",
            "Clean layered backend separation (controller-service-repository) simplifies cloud object storage integration",
        ],
        futureImprovements: [
            "Add ephemeral self-destructing links for time-limited image sharing",
            "Build native mobile companion app using React Native",
        ],
    },
    {
        id: "agentic-ai-automation",
        title: "Agentic AI Automation Workflows",
        slug: "agentic-ai-automation",
        shortDescription:
            "Autonomous multi-agent orchestration workflows built across n8n, Relevance, and Relay, featuring a production Dubai-based logistics pipeline replacing manual coordination.",
        category: ["AI", "Python"],
        featured: true,
        problemSolved:
            "Manual coordination in supply chain logistics creates communication delays, tracking errors, and high operational costs when handling client booking requests.",
        architectureOverview:
            "Event-driven agentic workflow architecture deployed across n8n, Relevance, and Relay platforms. Ingests raw client data, runs automated decision logic via LLM agents, and executes automated pipeline actions.",
        features: [
            "Built and deployed multiple agentic AI workflows across n8n, Relevance, and Relay",
            "Logistics automation pipeline built for a Dubai-based logistics service",
            "Replaced manual multi-step coordination with automated pipeline triggers",
            "Real-time webhook routing and automated task delegation",
            "Intelligent prompt routing and exception fallback handling",
        ],
        technologies: [
            "n8n",
            "Relevance",
            "Relay",
            "Python",
            "Agentic AI",
            "LLM Workflows",
            "Webhooks",
            "Automation",
        ],
        overview:
            "Production agentic AI automation system engineered for enterprise client operations. Replaced multi-person manual tracking steps for a Dubai logistics client with an automated n8n pipeline.",
        workflow: [
            "1. Webhook trigger receives logistics tracking or booking request payload",
            "2. n8n agent workflow parses intent and validates client parameters",
            "3. Automated AI agents execute sub-tasks (status queries, notifications, document updates)",
            "4. Processed response dispatches automatically to client communication channels",
        ],
        challenges: [
            "Handling edge-case exceptions in unstructured client booking messages",
            "Maintaining execution reliability across multi-platform integrations",
        ],
        solutions: [
            "Configured AI prompt guardrails and structural validation checks",
            "Engineered automated retry queues and fallback alerts inside n8n",
        ],
        lessonsLearned: [
            "Agentic workflows drastically reduce manual operational overhead for logistics services",
            "Proper webhook structuring is vital for seamless low-code platform integration",
        ],
        futureImprovements: [
            "Add multi-language translation agents for international client support",
            "Integrate automated WhatsApp business messaging triggers",
        ],
    },
    {
        id: "mern-admin-portal",
        title: "Admin Panel for a Web Portal",
        slug: "mern-admin-portal",
        shortDescription:
            "Production Store & Product Management System engineered for the Admin Panel of a live web portal using React, Node.js, Express, and MongoDB.",
        category: ["MERN"],
        featured: true,
        problemSolved:
            "E-commerce web portals require centralized, reliable administration tools to manage complex store inventories, product catalogs, and JSON content structures without code redeployment.",
        architectureOverview:
            "Decoupled MERN stack portal architecture. Features a responsive React dashboard, RESTful Node.js/Express API services, and MongoDB Atlas database schemas.",
        features: [
            "Store and Product Management module for live web portal administration",
            "JSON-driven content architecture in MongoDB for dynamic UI content modification without code redeployment",
            "Secure user authentication, role authorization, and document verification services",
            "REST APIs generating dynamic reports and catalog metrics",
            "Responsive UI built with React and Tailwind CSS",
        ],
        technologies: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "MongoDB Atlas",
            "REST APIs",
            "Tailwind CSS",
            "JavaScript",
        ],
        overview:
            "Delivered for StartApps System Pvt Ltd, this production MERN admin panel module enables non-technical administrators to manage stores, update products, and alter UI content via API endpoints.",
        workflow: [
            "1. Admin logs into secure dashboard session",
            "2. React state fetches store catalog and JSON UI schemas from Express backend",
            "3. Product listings are filtered, edited, or updated in real-time",
            "4. Database updates persist atomically on MongoDB Atlas",
        ],
        challenges: [
            "Allowing non-developers to modify page content without risk of UI breakdown",
            "Optimizing response time for store catalog queries",
        ],
        solutions: [
            "Engineered a structured JSON content schema in MongoDB with strict validation",
            "Implemented MongoDB database indexing on store and product IDs",
        ],
        lessonsLearned: [
            "JSON-driven content models eliminate the overhead of code redeployments for routine updates",
            "Modular admin UI components significantly accelerate back-office operations",
        ],
        futureImprovements: [
            "Add bulk CSV product upload and export tools",
            "Implement role-based granular permission controls",
        ],
    },
    {
        id: "whatsapp-chat-analytics",
        title: "WhatsApp Chat Analysis & Web App",
        slug: "whatsapp-chat-analytics",
        shortDescription:
            "Interactive NLP analytics platform featuring feature engineering, behavioral insight extraction, and an 87% accuracy sentiment classification model trained on 78,000 lines of Hinglish sentences.",
        category: ["Python", "AI", "Data Science"],
        featured: true,
        problemSolved:
            "Conversational textual exports contain valuable sentiment data and communication trends, but unstructured Hinglish text is difficult to parse using traditional NLP tools.",
        architectureOverview:
            "Python NLP data pipeline built with Pandas, NLTK, and Scikit-learn. Cleans raw chat export text, extracts conversational features, trains a sentiment analysis model, and renders an interactive Streamlit application.",
        features: [
            "Sentiment analysis ML model with 87% accuracy trained on 78,000 lines of Hinglish sentences",
            "Linguistic feature engineering & behavioral pattern extraction",
            "Regex-based raw chat log parser handling multi-line message structures",
            "Interactive analytics dashboard deployed on Cloud Streamlit",
            "Visual timeline distributions, heatmap analysis, and word frequency reports",
        ],
        technologies: [
            "Python",
            "Pandas",
            "Streamlit",
            "Scikit-learn",
            "NLTK",
            "Matplotlib",
            "Seaborn",
            "Regex",
        ],
        githubUrl:
            "https://github.com/AbhadiMishra/WhatsApp_Chat_Analysis_WebApp",
        overview:
            "End-to-end Machine Learning & NLP application designed to parse raw WhatsApp text exports and compute deep sentiment insights for Hinglish conversational datasets.",
        workflow: [
            "1. Raw chat export `.txt` file uploaded into Streamlit web interface",
            "2. Python regex pipeline extracts timestamps, authors, and message bodies",
            "3. NLP model evaluates sentiment polarity across 78k Hinglish trained lines",
            "4. Interactive Streamlit web app renders communication heatmaps and sentiment charts",
        ],
        challenges: [
            "Handling Hinglish code-mixed grammar variations and non-standard spellings",
            "Parsing complex timestamp patterns across different device exports",
        ],
        solutions: [
            "Trained sentiment model on a specialized 78,000-line Hinglish dataset",
            "Built resilient date-time regex parsers covering 10+ locale formats",
        ],
        lessonsLearned: [
            "Training models on domain-specific code-mixed text yields dramatic accuracy gains (87%)",
            "Streamlit enables rapid deployment of data science models into interactive user tools",
        ],
        futureImprovements: [
            "Incorporate Transformer models (mBERT) for multi-language contextual embeddings",
            "Add automated PDF analytical report generation",
        ],
    },
    {
        id: "predictive-sales-analysis",
        title: "Sales Data Analysis & Prediction",
        slug: "predictive-sales-analysis",
        shortDescription:
            "End-to-end sales prediction pipeline covering exploratory data analysis (EDA), data pre-processing, feature engineering, ML model training, and performance evaluation.",
        category: ["Python", "Machine Learning", "Data Science"],
        featured: false,
        problemSolved:
            "Businesses face sales unpredictability due to unanalyzed historical data and unoptimized feature selection across marketing and retail channels.",
        architectureOverview:
            "Modular machine learning pipeline using Python, Scikit-learn, Pandas, NumPy, Seaborn, and Matplotlib. Preprocesses raw sales metrics, performs EDA, and evaluates regression models.",
        features: [
            "End-to-end sales prediction pipeline (preprocessing, EDA, training, evaluation)",
            "Exploratory Data Analysis with Seaborn correlation matrices & distribution plots",
            "Feature scaling, missing value imputation, and outlier detection",
            "Multiple regression algorithm benchmark comparison",
            "Visual actual vs. predicted revenue diagnostic plots",
        ],
        technologies: [
            "Python",
            "Scikit-learn",
            "Pandas",
            "NumPy",
            "Seaborn",
            "Matplotlib",
            "Jupyter Notebook",
        ],
        githubUrl:
            "https://github.com/AbhadiMishra/Sales_Data_Analysis_Prediction",
        overview:
            "Machine learning analytical system built to forecast revenue trends and optimize sales channel decisions using historical feature data.",
        workflow: [
            "1. Ingestion and auditing of raw sales dataset",
            "2. Preprocessing pipeline cleans data, handles missing values, and performs EDA",
            "3. Model selection and hyperparameter tuning with Scikit-learn",
            "4. Model evaluation using standard regression metrics (R², RMSE, MAE)",
        ],
        challenges: [
            "Multicollinearity between sales features distorting model weights",
        ],
        solutions: [
            "Applied regularization techniques and feature selection filtering",
        ],
        lessonsLearned: [
            "Thorough EDA and preprocessing are essential for building reliable ML prediction models",
        ],
        futureImprovements: [
            "Deploy predictive API service using FastAPI and Docker",
        ],
    },
];
