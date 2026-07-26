import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { Badge } from '../components/common/Badge';
import { GithubIcon } from '../components/common/BrandIcons';
import {
  ArrowLeft,
  ExternalLink,
  Cpu,
  Workflow,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  TrendingUp,
  Code
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Project Case Study Not Found</h2>
        <p className="text-gray-400 text-sm">The project specified could not be located.</p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Top Breadcrumb */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors glass-card px-3 py-1.5 rounded-xl border border-white/10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Header Banner */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.category.map((cat) => (
              <Badge key={cat} variant="blue" size="md">
                {cat}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repo</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl">
          {project.shortDescription}
        </p>

        <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-gray-400 block font-medium">Problem Statement:</span>
            <span className="text-gray-200">{project.problemSolved}</span>
          </div>
          <div>
            <span className="text-gray-400 block font-medium">Core Technologies:</span>
            <span className="text-blue-300 font-mono">{project.technologies.join(', ')}</span>
          </div>
        </div>
      </div>

      {/* System Architecture */}
      <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Cpu className="w-5 h-5 text-blue-400" />
          Architecture & Design Decisions
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          {project.architectureOverview}
        </p>
      </div>

      {/* Workflow Steps */}
      <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Workflow className="w-5 h-5 text-purple-400" />
          Execution Workflow
        </h2>
        <ul className="space-y-3">
          {project.workflow.map((step, idx) => (
            <li
              key={idx}
              className="glass-card p-4 rounded-xl border border-white/5 text-xs sm:text-sm text-gray-300 flex items-start gap-3"
            >
              <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 font-mono text-xs font-bold border border-purple-500/20 shrink-0">
                0{idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Features List */}
      <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-emerald-400" />
          Key Features & Capabilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.features.map((feature, idx) => (
            <div
              key={idx}
              className="glass-card p-4 rounded-xl border border-white/5 text-xs text-gray-300 flex items-center gap-2.5"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Engineering Challenges & Solutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            Technical Challenges
          </h2>
          <ul className="space-y-3">
            {project.challenges.map((c, idx) => (
              <li key={idx} className="text-xs text-gray-300 leading-relaxed list-disc list-inside">
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-cyan-400" />
            Engineering Solutions
          </h2>
          <ul className="space-y-3">
            {project.solutions.map((s, idx) => (
              <li key={idx} className="text-xs text-gray-300 leading-relaxed list-disc list-inside">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Lessons Learned & Future Improvements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Code className="w-5 h-5 text-indigo-400" />
            Lessons Learned
          </h2>
          <ul className="space-y-2 text-xs text-gray-300">
            {project.lessonsLearned.map((l, idx) => (
              <li key={idx}>• {l}</li>
            ))}
          </ul>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            Future Roadmap
          </h2>
          <ul className="space-y-2 text-xs text-gray-300">
            {project.futureImprovements.map((imp, idx) => (
              <li key={idx}>• {imp}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
