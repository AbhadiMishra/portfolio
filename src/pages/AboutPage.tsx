import React from "react";
import { profileData } from "../data/profile";
import { SectionHeader } from "../components/common/SectionHeader";
import { User, Target, Compass, Award, Code, CheckCircle2 } from "lucide-react";

export const AboutPage: React.FC = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16'>
            <SectionHeader
                badge='About Abhinav Mishra'
                title='MERN | Full Stack Developer | Python & AI Enthusiast'
                subtitle='Bridging modern full-stack web engineering with applied machine learning and data science.'
            />

            {/* Overview & Bio Card */}
            <div className='glass-panel p-8 sm:p-10 rounded-3xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center'>
                <div className='lg:col-span-2 space-y-6'>
                    <h3 className='text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2'>
                        <User className='w-6 h-6 text-blue-600 dark:text-blue-400' />
                        Professional Journey & Background
                    </h3>
                    <p className='text-slate-900 dark:text-slate-200 font-bold leading-relaxed text-sm sm:text-base'>
                        {profileData.summary}
                    </p>
                    <p className='text-slate-900 dark:text-slate-300 leading-relaxed text-sm font-semibold'>
                        Recently completed my Master of Computer Application
                        (MCA) at ABES Engineering College (AKTU), I have
                        developed enterprise store management portals using the
                        MERN stack while instructing professionals on Python,
                        AI/ML, and Agentic AI workflow automation.
                    </p>
                    <div className='pt-2 flex flex-wrap gap-4'>
                        <div className='glass-card px-4 py-3 rounded-xl space-y-0.5'>
                            <div className='text-xs text-slate-900 dark:text-slate-400 font-extrabold'>
                                Current Role
                            </div>
                            <div className='text-sm font-black text-slate-900 dark:text-white'>
                                MERN Stack Intern @ StartApps System
                            </div>
                            <div className='text-xs text-slate-900 dark:text-slate-300 font-semibold mt-1'>
                                Working on • ERP Development • Backend Operations • React & Next.js • Node.js APIs
                            </div>
                        </div>
                        <div className='glass-card px-4 py-3 rounded-xl space-y-0.5'>
                            <div className='text-xs text-slate-900 dark:text-slate-400 font-extrabold'>
                                Location
                            </div>
                            <div className='text-sm font-black text-slate-900 dark:text-white'>
                                {profileData.location}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Highlight Card */}
                <div className='glass-panel p-6 rounded-2xl border border-blue-500/30 bg-gradient-to-b from-blue-600/10 to-indigo-600/10 space-y-4'>
                    <div className='flex items-center gap-2 text-blue-700 dark:text-blue-400 font-black text-sm'>
                        <Award className='w-5 h-5' />
                        <span>National Recognition</span>
                    </div>
                    <h4 className='text-lg font-black text-slate-900 dark:text-white'>
                        National Child Scientist Award
                    </h4>
                    <p className='text-xs text-slate-900 dark:text-slate-300 font-extrabold leading-relaxed'>
                        Honored by NCSTC, Department of Science and Technology,
                        Govt. of India for scientific research and
                        problem-solving initiative.
                    </p>
                    <div className='text-[11px] text-blue-800 dark:text-blue-300 font-mono font-black'>
                        NCSTC / Dept of Science & Technology
                    </div>
                </div>
            </div>

            {/* Core Strengths Grid */}
            <div className='space-y-6'>
                <h3 className='text-xl font-black text-slate-900 dark:text-white flex items-center gap-2'>
                    <CheckCircle2 className='w-5 h-5 text-blue-600 dark:text-blue-400' />
                    Core Engineering Strengths
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {profileData.coreStrengths.map((strength, index) => (
                        <div
                            key={index}
                            className='glass-panel p-5 rounded-2xl flex items-start gap-3.5 hover:border-blue-500/40 transition-colors'>
                            <div className='p-2 rounded-xl bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20 shrink-0'>
                                <Code className='w-4 h-4' />
                            </div>
                            <p className='text-xs sm:text-sm text-slate-900 dark:text-slate-200 font-black leading-relaxed'>
                                {strength}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Technical Interests & Career Goals */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='glass-panel p-8 rounded-3xl space-y-4'>
                    <h3 className='text-xl font-black text-slate-900 dark:text-white flex items-center gap-2'>
                        <Compass className='w-5 h-5 text-purple-600 dark:text-purple-400' />
                        Technical Interests
                    </h3>
                    <ul className='space-y-3 text-xs sm:text-sm text-slate-900 dark:text-slate-200 font-bold'>
                        <li className='flex items-start gap-2 text-slate-900 dark:text-slate-200'>
                            <span className='text-purple-600 dark:text-purple-400 mt-1 font-black'>
                                •
                            </span>
                            <span className='text-slate-900 dark:text-slate-200'>
                                <strong className='text-slate-900 dark:text-white font-black'>Agentic AI & LLM Systems:</strong>{" "}
                                Autonomous multi-agent coordination, prompt
                                routing, and tool-augmented AI workflows.
                            </span>
                        </li>
                        <li className='flex items-start gap-2 text-slate-900 dark:text-slate-200'>
                            <span className='text-purple-600 dark:text-purple-400 mt-1 font-black'>
                                •
                            </span>
                            <span className='text-slate-900 dark:text-slate-200'>
                                <strong className='text-slate-900 dark:text-white font-black'>Full Stack MERN Systems:</strong> REST
                                API development using Express.js, MongoDB and
                                JWT Authentication, Building responsive React
                                applications with reusable components and
                                efficient state management, and MongoDB
                                aggregation optimizations.
                            </span>
                        </li>
                        <li className='flex items-start gap-2 text-slate-900 dark:text-slate-200'>
                            <span className='text-purple-600 dark:text-purple-400 mt-1 font-black'>
                                •
                            </span>
                            <span className='text-slate-900 dark:text-slate-200'>
                                <strong className='text-slate-900 dark:text-white font-black'>Applied Data Science:</strong> Natural
                                language processing (NLP), time-series
                                forecasting, and interactive data visualization
                                apps.
                            </span>
                        </li>
                    </ul>
                </div>

                <div className='glass-panel p-8 rounded-3xl space-y-4'>
                    <h3 className='text-xl font-black text-slate-900 dark:text-white flex items-center gap-2'>
                        <Target className='w-5 h-5 text-emerald-600 dark:text-emerald-400' />
                        Career Aspirations
                    </h3>
                    <p className='text-xs sm:text-sm text-slate-900 dark:text-slate-200 font-extrabold leading-relaxed'>
                        {profileData.careerGoals}
                    </p>
                    <div className='pt-4 flex flex-wrap gap-2'>
                        {[
                            "Google",
                            "Microsoft",
                            "Amazon",
                            "Atlassian",
                            "NVIDIA",
                            "OpenAI",
                            "Anthropic",
                            "Meta",
                            "Oracle",
                            "IBM",
                        ].map((company) => (
                            <span
                                key={company}
                                className='px-2.5 py-1 rounded-lg glass-card text-[11px] font-mono text-slate-900 dark:text-slate-200 font-black border border-black/20 dark:border-white/10'>
                                {company}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
