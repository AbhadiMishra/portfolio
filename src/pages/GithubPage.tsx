import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { profileData } from '../data/profile';
import { GithubIcon } from '../components/common/BrandIcons';
import { Star, BookOpen, ExternalLink, Code2 } from 'lucide-react';

const pinnedRepos = [
  {
    name: "Sales_Data_Analysis_Prediction",
    description: "Sales prediction with Python using Scikit-learn, Pandas, Seaborn, and Matplotlib. Complete EDA, preprocessing, model training, and evaluation.",
    language: "Jupyter Notebook",
    stars: 0,
    forks: 0,
    url: "https://github.com/AbhadiMishra/Sales_Data_Analysis_Prediction"
  },
  {
    name: "Sentiment_Classification_Modelling",
    description: "Machine learning repository training multiple models on custom textual data for WhatsApp chat sentiment classification.",
    language: "Jupyter Notebook",
    stars: 0,
    forks: 0,
    url: "https://github.com/AbhadiMishra/Sentiment_Classification_Modelling"
  },
  {
    name: "WhatsApp_Chat_Analysis_WebApp",
    description: "Streamlit Cloud application providing end-to-end NLP conversational feature extraction and interactive visual insights.",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/AbhadiMishra/WhatsApp_Chat_Analysis_WebApp"
  },
  {
    name: "WhatsApp_Chat_Analysis",
    description: "Data exploration and NLP analysis notebook parsing WhatsApp textual conversation exports.",
    language: "Jupyter Notebook",
    stars: 1,
    forks: 0,
    url: "https://github.com/AbhadiMishra/WhatsApp_Chat_Analysis"
  },
  {
    name: "Playing-with-pandas.Dataframe",
    description: "Data wrangling repository exploring advanced Pandas DataFrame manipulation and data cleaning techniques.",
    language: "Jupyter Notebook",
    stars: 0,
    forks: 0,
    url: "https://github.com/AbhadiMishra/Playing-with-pandas.Dataframe"
  },
  {
    name: "Scrap_BS4_Textual_Analysis",
    description: "Automated web scraping pipeline built with BeautifulSoup4 for article extraction and textual analysis.",
    language: "Jupyter Notebook",
    stars: 0,
    forks: 0,
    url: "https://github.com/AbhadiMishra/Scrap_BS4_Textual_Analysis"
  }
];

export const GithubPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <SectionHeader
        badge="GitHub Activity & Open Source"
        title="Public Code Repositories"
        subtitle="Explore open-source projects, machine learning models, data science pipelines, and web applications."
      />

      {/* GitHub Profile Banner */}
      <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-[2px] shadow-lg shadow-blue-500/20">
            <div className="w-full h-full bg-[#090d16] rounded-[14px] flex items-center justify-center text-white">
              <GithubIcon className="w-8 h-8" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <span>AbhadiMishra</span>
              <span className="text-xs px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-mono border border-blue-500/20">
                15 Repositories
              </span>
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Python Explorer & MERN Developer: Navigating the Basics and Beyond
            </p>
          </div>
        </div>

        <a
          href={profileData.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-xs flex items-center gap-2 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 shrink-0"
        >
          <span>View GitHub Profile</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Pinned Repos Grid */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-400" />
          Featured Repositories
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pinnedRepos.map((repo) => (
            <div
              key={repo.name}
              className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 flex flex-col justify-between hover:border-blue-500/40 transition-colors group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  >
                    <Code2 className="w-4 h-4 text-blue-400" />
                    <span>{repo.name}</span>
                  </a>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                  {repo.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  {repo.language}
                </span>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    {repo.stars}
                  </span>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
