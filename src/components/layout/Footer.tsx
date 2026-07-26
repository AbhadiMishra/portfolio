import React from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../../data/profile';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';
import { Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-black/10 dark:border-white/10 glass-panel mt-24 py-12 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
              {profileData.name}
            </Link>
            <p className="text-sm text-slate-700 dark:text-slate-300 max-w-md leading-relaxed font-medium">
              Full Stack Engineer specializing in production MERN Web Portals & Applied Artificial Intelligence / Machine Learning solutions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/50 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/50 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.socials.email}`}
                className="p-2.5 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/50 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-extrabold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-white transition-colors">About Journey</Link></li>
              <li><Link to="/skills" className="hover:text-blue-600 dark:hover:text-white transition-colors">Technical Stack</Link></li>
              <li><Link to="/projects" className="hover:text-blue-600 dark:hover:text-white transition-colors">Project Portfolio</Link></li>
              <li><Link to="/experience" className="hover:text-blue-600 dark:hover:text-white transition-colors">Career Experience</Link></li>
              <li><Link to="/github" className="hover:text-blue-600 dark:hover:text-white transition-colors">GitHub Repositories</Link></li>
            </ul>
          </div>

          {/* Col 3: Resources & Contact */}
          <div>
            <h4 className="text-xs font-extrabold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4">
              Information
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><Link to="/education" className="hover:text-blue-600 dark:hover:text-white transition-colors">Education (MCA / BCA)</Link></li>
              <li><Link to="/certifications" className="hover:text-blue-600 dark:hover:text-white transition-colors">Certifications</Link></li>
              <li><Link to="/resume" className="hover:text-blue-600 dark:hover:text-white transition-colors">Download Resume</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-white transition-colors">Contact Form</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
          <p>© {new Date().getFullYear()} {profileData.name}. Production-grade MERN + AI Architecture.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/40 transition-all font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
