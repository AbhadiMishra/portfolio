import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { profileData } from "../data/profile";
import { projectsData } from "../data/projects";
import { skillsData } from "../data/skills";
import { SectionHeader } from "../components/common/SectionHeader";
import { Badge } from "../components/common/Badge";
import { GithubIcon, LinkedinIcon } from "../components/common/BrandIcons";
import {
    ArrowRight,
    Download,
    Mail,
    Sparkles,
    Terminal,
    Brain,
    Layers,
    Award,
    ChevronRight,
} from "lucide-react";

export const HomePage: React.FC = () => {
    const [headlineIndex, setHeadlineIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setHeadlineIndex(
                (prev) => (prev + 1) % profileData.headline.length,
            );
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const featuredProjects = projectsData.filter((p) => p.featured);

    return (
        <div className='space-y-24 pt-12 pb-16 relative'>
            {/* Hero Section */}
            <section className='relative min-h-[85vh] flex items-center justify-center overflow-hidden py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full'>
                    <div className='text-center space-y-8 max-w-4xl mx-auto'>
                        {/* Status Pill */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-blue-500/50 text-xs font-black text-blue-900 dark:text-blue-300 shadow-xl'>
                            <span className='relative flex h-2.5 w-2.5'>
                                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75' />
                                <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500' />
                            </span>
                            <span>
                                Open for Full-Stack & AI/ML Engineering Roles
                            </span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className='space-y-4'>
                            <h1 className='text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-black dark:text-white'>
                                Hi, I'm{" "}
                                <span className='gradient-text'>
                                    {profileData.name}
                                </span>
                            </h1>
                            <div className='h-12 sm:h-16 flex items-center justify-center'>
                                <span className='text-2xl sm:text-4xl font-black text-black dark:text-slate-100 font-mono tracking-tight'>
                                    <span className='text-blue-600 dark:text-blue-400'>
                                        &gt;{" "}
                                    </span>
                                    {profileData.headline[headlineIndex]}
                                </span>
                            </div>
                        </motion.div>

                        {/* Summary */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='text-base sm:text-lg text-black dark:text-slate-200 max-w-2xl mx-auto leading-relaxed font-black'>
                            {profileData.summary}
                        </motion.p>

                        {/* Hero CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className='flex flex-wrap items-center justify-center gap-4 pt-4'>
                            <Link
                                to='/projects'
                                className='px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2'>
                                <span>View Projects</span>
                                <ArrowRight className='w-4 h-4' />
                            </Link>
                            <Link
                                to='/resume'
                                className='px-6 py-3.5 rounded-xl glass-card text-black dark:text-white font-black text-sm hover:border-blue-500/50 transition-all flex items-center gap-2'>
                                <Download className='w-4 h-4 text-blue-600 dark:text-blue-400' />
                                <span>Resume</span>
                            </Link>
                            <a
                                href={profileData.socials.github}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='p-3.5 rounded-xl glass-card text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/50 transition-all'
                                aria-label='GitHub Profile'>
                                <GithubIcon className='w-5 h-5' />
                            </a>
                            <a
                                href={profileData.socials.linkedin}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='p-3.5 rounded-xl glass-card text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/50 transition-all'
                                aria-label='LinkedIn Profile'>
                                <LinkedinIcon className='w-5 h-5' />
                            </a>
                            <Link
                                to='/contact'
                                className='p-3.5 rounded-xl glass-card text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/50 transition-all'
                                aria-label='Contact Form'>
                                <Mail className='w-5 h-5' />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Metrics Bar */}
            <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    <div className='glass-panel p-6 rounded-2xl text-center space-y-1'>
                        <div className='flex justify-center text-blue-600 dark:text-blue-400 mb-2'>
                            <Layers className='w-6 h-6' />
                        </div>
                        <div className='text-2xl sm:text-3xl font-black text-black dark:text-white'>
                            MERN & Python
                        </div>
                        <div className='text-xs text-black dark:text-slate-300 font-black'>
                            Dual Specialization
                        </div>
                    </div>
                    <div className='glass-panel p-6 rounded-2xl text-center space-y-1'>
                        <div className='flex justify-center text-purple-600 dark:text-purple-400 mb-2'>
                            <Brain className='w-6 h-6' />
                        </div>
                        <div className='text-2xl sm:text-3xl font-black text-black dark:text-white'>
                            AI / ML / NLP
                        </div>
                        <div className='text-xs text-black dark:text-slate-300 font-black'>
                            Applied Data Systems
                        </div>
                    </div>
                    <div className='glass-panel p-6 rounded-2xl text-center space-y-1'>
                        <div className='flex justify-center text-cyan-600 dark:text-cyan-400 mb-2'>
                            <Terminal className='w-6 h-6' />
                        </div>
                        <div className='text-2xl sm:text-3xl font-black text-black dark:text-white'>
                            6+ Key Repos
                        </div>
                        <div className='text-xs text-black dark:text-slate-300 font-black'>
                            Production Architecture
                        </div>
                    </div>
                    <div className='glass-panel p-6 rounded-2xl text-center space-y-1'>
                        <div className='flex justify-center text-emerald-600 dark:text-emerald-400 mb-2'>
                            <Award className='w-6 h-6' />
                        </div>
                        <div className='text-2xl sm:text-3xl font-black text-black dark:text-white'>
                            Child Scientist
                        </div>
                        <div className='text-xs text-black dark:text-slate-300 font-black'>
                            National NCSTC Honor
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <SectionHeader
                    badge='Featured Engineering Work'
                    title='Architected for Scale & Accuracy'
                    subtitle='Explore flagship projects spanning Full Stack Web Portals, Agentic AI multi-agent workflows, and NLP textual sentiment analytics.'
                />

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {featuredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{ y: -6 }}
                            className='glass-panel rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all shadow-xl group'>
                            <div className='space-y-4'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex flex-wrap gap-1.5'>
                                        {project.category.map((cat) => (
                                            <Badge
                                                key={cat}
                                                variant='blue'
                                                size='sm'>
                                                {cat}
                                            </Badge>
                                        ))}
                                    </div>
                                    <span className='text-xs text-blue-700 dark:text-blue-400 font-mono font-black'>
                                        Featured
                                    </span>
                                </div>

                                <h3 className='text-xl font-black text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                                    {project.title}
                                </h3>

                                <p className='text-xs text-black dark:text-slate-200 leading-relaxed font-bold line-clamp-3'>
                                    {project.shortDescription}
                                </p>

                                <div className='space-y-2 pt-2'>
                                    <div className='text-[11px] font-black uppercase tracking-wider text-black dark:text-slate-400'>
                                        Key Tech
                                    </div>
                                    <div className='flex flex-wrap gap-1.5'>
                                        {project.technologies
                                            .slice(0, 4)
                                            .map((tech) => (
                                                <span
                                                    key={tech}
                                                    className='px-2 py-0.5 rounded bg-slate-200 dark:bg-white/5 text-black dark:text-slate-200 text-[11px] font-mono font-black border border-slate-400 dark:border-white/10'>
                                                    {tech}
                                                </span>
                                            ))}
                                    </div>
                                </div>
                            </div>

                            <div className='pt-6 mt-6 border-t border-slate-300 dark:border-white/10 flex items-center justify-between'>
                                <Link
                                    to={`/projects/${project.slug}`}
                                    className='text-xs font-black text-blue-700 dark:text-blue-400 hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform'>
                                    <span>Read Case Study</span>
                                    <ChevronRight className='w-3.5 h-3.5' />
                                </Link>

                                <a
                                    href={project.githubUrl}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-black dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors'
                                    aria-label='GitHub Repository'>
                                    <GithubIcon className='w-4 h-4' />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className='text-center pt-8'>
                    <Link
                        to='/projects'
                        className='inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-black dark:text-white text-xs font-black hover:border-blue-500/40 transition-all'>
                        <span>Explore All Projects</span>
                        <ArrowRight className='w-3.5 h-3.5' />
                    </Link>
                </div>
            </section>

            {/* Tech Stack Summary */}
            <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <SectionHeader
                    badge='Core Skillset'
                    title='Technology Stack & Ecosystem'
                    subtitle='Equally strong competence in MERN web engineering and Python data science & machine learning.'
                />

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {skillsData.slice(0, 4).map((cat) => (
                        <div
                            key={cat.id}
                            className='glass-panel p-6 rounded-2xl space-y-4'>
                            <h3 className='text-base font-black text-black dark:text-white flex items-center gap-2'>
                                <Sparkles className='w-4 h-4 text-blue-600 dark:text-blue-400' />
                                {cat.title}
                            </h3>
                            <ul className='space-y-2'>
                                {cat.skills.map((skill) => (
                                    <li
                                        key={skill.name}
                                        className='flex items-center justify-between text-xs py-1 border-b border-slate-300 dark:border-white/10 text-black dark:text-slate-200 font-black'>
                                        <span>{skill.name}</span>
                                        <span className='text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-900 dark:text-blue-300 border border-blue-500/30 font-mono font-black'>
                                            {skill.level}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quick Contact Banner */}
            <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='glass-panel rounded-3xl p-8 sm:p-12 border border-blue-500/30 bg-linear-to-r from-blue-600/15 via-indigo-600/15 to-purple-600/15 text-center space-y-6'>
                    <h2 className='text-2xl sm:text-4xl font-black text-black dark:text-white'>
                        Let's Build Something Exceptional
                    </h2>
                    <p className='text-sm sm:text-base text-black dark:text-slate-200 font-extrabold max-w-2xl mx-auto'>
                        Whether you are evaluating my profile for a Full-Stack
                        MERN role, Python Engineering position, or AI/ML
                        Specialist team, I'd love to connect.
                    </p>
                    <div className='flex flex-wrap justify-center gap-4 pt-2'>
                        <Link
                            to='/contact'
                            className='px-6 py-3.5 rounded-xl bg-blue-600 text-white text-xs font-black hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30'>
                            Send a Message
                        </Link>
                        <a
                            href={`mailto:${profileData.socials.email}`}
                            className='px-6 py-3.5 rounded-xl glass-card text-black dark:text-white text-xs font-black hover:border-black/30 dark:hover:border-white/30 transition-colors'>
                            Direct Email
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
