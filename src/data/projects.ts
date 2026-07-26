import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "agentic-ai-automation",
    title: "Agentic AI Workflow & Multi-Agent Orchestrator",
    slug: "agentic-ai-automation",
    shortDescription: "Autonomous multi-agent orchestration platform integrating n8n, Relay, and Relevance AI for intelligent workflow automation and LLM task execution.",
    category: ["AI", "Python"],
    featured: true,
    problemSolved: "Manual operations across enterprise SaaS platforms create bottlenecks in customer data processing, lead scoring, and automated decision-making. Traditional fixed scripts lack adaptiveness to unstructured inputs.",
    architectureOverview: "Constructed an event-driven agentic framework that connects webhooks to intelligent LLM-powered decision nodes. Integrates n8n execution pipelines, Relay triggers, and custom Python API handlers for context-aware task delegation.",
    features: [
      "Dynamic agent task assignment based on input classification",
      "Low-code/no-code integration bridges with n8n and Relay",
      "Automated prompt routing and context memory persistence",
      "Real-time execution monitoring and retry queue handling",
      "Custom Python webhook endpoints for complex data transformations"
    ],
    technologies: ["Python", "Agentic AI", "n8n", "Relay", "Relevance AI", "REST APIs", "LLM Prompt Engineering"],
    githubUrl: "https://github.com/AbhadiMishra",
    liveUrl: "https://abhadimishra.github.io/abhinavmishra.github.io/",
    overview: "Built as part of advanced AI research and industry training, this Agentic AI platform orchestrates complex multi-step workflows autonomously. It transforms incoming raw data events into structured, actionable business decisions.",
    workflow: [
      "1. Webhook trigger receives unstructured JSON / text payload",
      "2. Router agent categorizes priority and intent via LLM classification",
      "3. Specialist sub-agents process sub-tasks concurrently (extraction, API calls, response synthesis)",
      "4. Final output is formatted, logged, and dispatched to destination endpoints"
    ],
    challenges: [
      "Managing agent state drift during multi-turn asynchronous workflows",
      "Handling API rate limits and non-deterministic response formats from foundational models"
    ],
    solutions: [
      "Implemented strict JSON schema enforcement on model outputs",
      "Built an exponential backoff retry system with fallback agent paths"
    ],
    lessonsLearned: [
      "Deterministic guardrails are crucial when orchestrating non-deterministic AI agents in production",
      "Modular workflow decomposition improves debugging and agent task accuracy"
    ],
    futureImprovements: [
      "Integrate vector database (Pinecone/Qdrant) for long-term semantic agent memory",
      "Build a custom visual execution canvas using React Flow"
    ]
  },
  {
    id: "mern-admin-portal",
    title: "Enterprise MERN Store & Product Admin Portal",
    slug: "mern-admin-portal",
    shortDescription: "Production-grade MERN stack administration suite featuring catalog management, store metrics analytics, role-based access, and real-time inventory updates.",
    category: ["MERN"],
    featured: true,
    problemSolved: "Growing web portals struggle with inefficient store inventory management, fragmented product analytics, and slow back-office operations.",
    architectureOverview: "Decoupled MERN stack architecture utilizing React 19 on Vite for ultra-fast client render cycles, backed by Node.js/Express REST APIs connected to MongoDB Atlas with indexed query optimization.",
    features: [
      "Complete Store & Product CRUD management with image asset mapping",
      "Real-time inventory level indicators & out-of-stock threshold alerts",
      "MongoDB aggregation pipeline for revenue & sales metric summaries",
      "Secure JWT authentication with protected admin route middleware",
      "Responsive glassmorphism dashboard UI tuned for desktop and mobile"
    ],
    technologies: ["React 19", "Node.js", "Express.js", "MongoDB", "MongoDB Atlas", "Tailwind CSS", "TypeScript", "JWT"],
    githubUrl: "https://github.com/AbhadiMishra",
    liveUrl: "https://abhadimishra.github.io/abhinavmishra.github.io/",
    overview: "Developed during engineering work at StartApps System Pvt Ltd, this admin portal provides store managers with an enterprise-ready dashboard to control store listings, monitor product metrics, and streamline administrative workflows.",
    workflow: [
      "1. Administrator authenticates via JWT-backed login interface",
      "2. React state fetches store data asynchronously from Express API endpoints",
      "3. Interactive tables allow searching, sorting, filtering, and inline product edits",
      "4. Database mutations update MongoDB Atlas atomically with instant UI reactivity"
    ],
    challenges: [
      "Optimizing complex product filtering across large MongoDB collections without performance degradation",
      "Preventing unauthorized API requests to administrative endpoints"
    ],
    solutions: [
      "Created compound indexes on frequently queried fields (`category`, `price`, `status`) in MongoDB",
      "Enforced multi-layered Express middleware verifying JWT signatures and user roles"
    ],
    lessonsLearned: [
      "Proper database indexing dramatically reduces query response times in MERN applications",
      "Separating client state from server state keeps the UI clean and responsive"
    ],
    futureImprovements: [
      "Add WebSocket support for live multi-user concurrent inventory editing",
      "Implement automated CSV/Excel inventory import and export capabilities"
    ]
  },
  {
    id: "whatsapp-chat-analytics",
    title: "WhatsApp Chat Sentiment & NLP Analytics Platform",
    slug: "whatsapp-chat-analytics",
    shortDescription: "End-to-end NLP application for parsing textual WhatsApp chat exports, extracting linguistic metrics, and performing sentiment classification deployed on Cloud Streamlit.",
    category: ["Python", "AI", "Data Science"],
    featured: true,
    problemSolved: "Unstructured conversational chat data contains valuable communication insights, sentiment trends, and behavioral patterns that are difficult to analyze manually.",
    architectureOverview: "Python-native data science architecture. Uses regex preprocessing pipelines to parse raw chat exports into structured Pandas DataFrames, followed by NLP feature extraction, VADER/TextBlob sentiment modeling, and interactive Streamlit rendering.",
    features: [
      "Regex-driven multilingual chat log parser (timestamps, users, system notifications)",
      "Sentiment classification modeling across daily, weekly, and monthly timeline distributions",
      "Word cloud generation, stop-word filtering, and top emoji usage frequency analysis",
      "Activity heatmap breakdown showing peak conversation hours and response velocity",
      "Interactive Streamlit cloud web deployment with drag-and-drop file uploaders"
    ],
    technologies: ["Python", "Pandas", "Streamlit", "Scikit-learn", "NLTK", "Matplotlib", "Seaborn", "Regex"],
    githubUrl: "https://github.com/AbhadiMishra/WhatsApp_Chat_Analysis_WebApp",
    liveUrl: "https://abhadimishra.github.io/abhinavmishra.github.io/",
    overview: "Featured project engineered to demonstrate practical Applied NLP and Data Analytics. The app ingests exported WhatsApp text logs and instantly generates high-resolution communication reports.",
    workflow: [
      "1. User uploads export `.txt` file into the Streamlit web interface",
      "2. Python regex engine cleans text, separates datetime tags, and handles multi-line messages",
      "3. Pandas pipeline constructs structured feature vectors (word counts, media shared, links)",
      "4. NLP models calculate sentiment polarity scores and render interactive Matplotlib/Seaborn charts"
    ],
    challenges: [
      "Handling different date formatting styles across 12-hour vs 24-hour phone system locales",
      "Parsing multi-line messages without losing author context"
    ],
    solutions: [
      "Engineered flexible date-time regex patterns matching 10+ standard WhatsApp export formats",
      "Implemented a buffer accumulation strategy in Pandas for line-break concatenation"
    ],
    lessonsLearned: [
      "Regex robustification is the foundation of high-accuracy text preprocessing pipelines",
      "Streamlit enables rapid transition from Jupyter research notebooks to production data apps"
    ],
    futureImprovements: [
      "Upgrade model backbone to Transformer-based BERT/RoBERTa for deeper contextual sentiment",
      "Add comparative analytics mode for multi-group chat benchmark comparisons"
    ]
  },
  {
    id: "predictive-sales-analysis",
    title: "Predictive Sales Analytics & Machine Learning Engine",
    slug: "predictive-sales-analysis",
    shortDescription: "Machine learning platform leveraging Scikit-learn to perform exploratory data analysis, feature engineering, and predictive revenue forecasting.",
    category: ["Python", "Machine Learning", "Data Science"],
    featured: false,
    problemSolved: "Businesses face revenue volatility due to inaccurate demand forecasting and unoptimized marketing budget allocation across channels.",
    architectureOverview: "Modular Scikit-learn workflow comprising data cleaning modules, outlier removal, correlation matrix analysis, regression modeling (Linear, Ridge, Random Forest), and evaluation metrics calculation (R², RMSE, MAE).",
    features: [
      "Comprehensive Exploratory Data Analysis (EDA) with Seaborn correlation heatmaps",
      "Feature scaling, categorical encoding, and missing value imputation pipelines",
      "Multiple model benchmark comparisons (Linear Regression, Decision Trees, Random Forest Regressor)",
      "Hyperparameter tuning using GridSearchCV for maximum predictive accuracy",
      "Visual actual vs. predicted revenue plot diagnostics"
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    githubUrl: "https://github.com/AbhadiMishra/Sales_Data_Analysis_Prediction",
    liveUrl: "https://github.com/AbhadiMishra/Sales_Data_Analysis_Prediction",
    overview: "Built to provide data-backed forecasting for sales operations. The notebook and modular Python scripts demonstrate how machine learning algorithms optimize revenue predictions based on historical feature variables.",
    workflow: [
      "1. Raw sales dataset ingested and audited for missing values and skewness",
      "2. EDA identifies high-correlation predictors and handles outlier distributions",
      "3. Dataset split into 80/20 train-test sets with standard scaling applied",
      "4. Models trained, hyper-tuned, evaluated, and exported via Joblib serialization"
    ],
    challenges: [
      "Multicollinearity among marketing expenditure variables skewing linear regression weights",
      "Overfitting on small training validation splits"
    ],
    solutions: [
      "Applied Ridge/Lasso regularization and Variance Inflation Factor (VIF) filtering",
      "Utilized 5-fold cross-validation during hyperparameter selection"
    ],
    lessonsLearned: [
      "Feature engineering and domain understanding yield greater accuracy boosts than raw algorithm complexity",
      "Model evaluation must always look at RMSE alongside R² score"
    ],
    futureImprovements: [
      "Deploy model serving API using FastAPI/Flask wrapped inside a Docker container",
      "Integrate time-series ARIMA/FBProphet models for temporal seasonality tracking"
    ]
  },
  {
    id: "weather-trend-prediction",
    title: "Weather Dataset Trend Analysis & Predictive System",
    slug: "weather-trend-prediction",
    shortDescription: "Statistical meteorological trend analyzer utilizing Scikit-learn regression models to predict temperature variance and atmospheric condition trends.",
    category: ["Python", "Machine Learning", "Data Science"],
    featured: false,
    problemSolved: "Weather pattern volatility requires data-driven analysis to spot temperature shifts and atmospheric trends for agricultural and event planning applications.",
    architectureOverview: "Data modeling pipeline built with Python, Pandas, and Scikit-learn. Cleans meteorological sensor datasets, detects multi-variable trends, and trains predictive models for variable changes.",
    features: [
      "Atmospheric variable trend visualization (Humidity vs Temperature vs Pressure)",
      "Regression model training for multi-variable weather forecasting",
      "Statistical hypothesis testing and correlation matrix generation",
      "Outlier detection using IQR (Interquartile Range) method",
      "Clean visual plots presenting historic vs predicted climate shifts"
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
    githubUrl: "https://github.com/AbhadiMishra",
    liveUrl: "https://github.com/AbhadiMishra",
    overview: "Analyzes weather trend datasets to find micro-climate patterns and train regression models that predict climate metric variations based on environmental inputs.",
    workflow: [
      "1. Ingestion of multi-station weather metrics",
      "2. Data cleaning, normalization, and outlier removal",
      "3. Feature selection based on correlation metrics",
      "4. Scikit-learn model evaluation and validation reporting"
    ],
    challenges: ["Handling missing sensor data readings across consecutive timestamps"],
    solutions: ["Applied forward-fill and spline interpolation techniques for seamless time-series continuity"],
    lessonsLearned: ["Interpolation techniques prevent data loss while maintaining physical trend accuracy"],
    futureImprovements: ["Incorporate satellite weather imagery processing using PyTorch CNNs"]
  },
  {
    id: "bs4-web-scraper-sentiment",
    title: "Automated Web Scraper & Textual Sentiment Classifier",
    slug: "bs4-web-scraper-sentiment",
    shortDescription: "Web scraping automation script built with BeautifulSoup4 for extracting article content and evaluating sentiment polarities.",
    category: ["Python", "Data Science"],
    featured: false,
    problemSolved: "Extracting readable article content and sentiment signals from arbitrary news and blog websites is difficult due to noisy DOM layouts.",
    architectureOverview: "Python scraping pipeline using Requests and BeautifulSoup4 to target main body content, strip HTML tags, and pass clean text into sentiment scoring models.",
    features: [
      "DOM extraction targeting `<article>` and `<p>` blocks across dynamic sites",
      "Text normalization (lowercase, punctuation stripping, stop-word removal)",
      "Sentiment polarity and subjectivity score calculation",
      "Exporting structured JSON and CSV dataset reports"
    ],
    technologies: ["Python", "BeautifulSoup4", "Requests", "NLTK", "Pandas", "Jupyter"],
    githubUrl: "https://github.com/AbhadiMishra/Scrap_BS4_Textual_Analysis",
    liveUrl: "https://github.com/AbhadiMishra/Scrap_BS4_Textual_Analysis",
    overview: "Designed for web intelligence and market sentiment tracking. Automates article extraction from web sources and generates structured sentiment metrics.",
    workflow: [
      "1. Input URL list processed by Requests with custom user-agent headers",
      "2. BS4 parses DOM hierarchy to isolate headline and primary body text",
      "3. NLP text cleaning pipeline computes sentiment metrics",
      "4. Data saved to structured analytical formats for downstream reporting"
    ],
    challenges: ["Overcoming anti-bot rate limits and varying HTML class names across target domains"],
    solutions: ["Configured session retries with randomized request headers and fallback tag selectors"],
    lessonsLearned: ["Resilient web scraping requires defensive DOM querying and proper header rotation"],
    futureImprovements: ["Upgrade to Playwright for JavaScript SPA dynamic page rendering"]
  }
];
