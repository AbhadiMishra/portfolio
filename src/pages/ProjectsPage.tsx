import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import type { ProjectCategory } from '../types';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';
import { GithubIcon } from '../components/common/BrandIcons';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Filter } from 'lucide-react';

const categories: ('All' | ProjectCategory)[] = [
  'All',
  'MERN',
  'Python',
  'AI',
  'Machine Learning',
  'Data Science',
];

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.includes(selectedCategory as ProjectCategory));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <SectionHeader
        badge="Engineering Portfolio"
        title="Project Showcase & Architecture Deep-Dives"
        subtitle="Explore complete case studies detailing technical architecture, problem statement, challenges, solutions, and live source code."
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <div className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-gray-400 mr-2">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter:</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'glass-card text-gray-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="glass-panel rounded-3xl border border-white/10 p-6 flex flex-col justify-between hover:border-blue-500/40 transition-all shadow-xl group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.category.map((c) => (
                    <Badge key={c} variant="blue" size="sm">
                      {c}
                    </Badge>
                  ))}
                </div>
                {project.featured && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-semibold">
                    FEATURED
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                {project.shortDescription}
              </p>

              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                  Problem Solved:
                </span>
                <p className="text-xs text-gray-400 line-clamp-2 italic">
                  "{project.problemSolved}"
                </p>
              </div>

              <div className="pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-white/5 text-gray-300 text-[11px] font-mono border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
              <Link
                to={`/projects/${project.slug}`}
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon className="w-4.5 h-4.5" />
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Live Application"
                  >
                    <ExternalLink className="w-4.5 h-4.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
