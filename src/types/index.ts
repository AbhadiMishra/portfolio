export type ProjectCategory =
    | "MERN"
    | "Python"
    | "AI"
    | "Machine Learning"
    | "Data Science"
    | "React"
    | "Backend"
    | "Frontend"
    | "NLP"
    | "Data Analysis"
    | "Full Stack";

export interface Project {
    id: string;
    title: string;
    slug: string;
    shortDescription: string;
    category: ProjectCategory[];
    featured: boolean;
    problemSolved: string;
    architectureOverview: string;
    features: string[];
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    overview: string;
    workflow: string[];
    challenges: string[];
    solutions: string[];
    lessonsLearned: string[];
    futureImprovements: string[];
    screenshotUrl?: string;
}

export interface SkillCategory {
    title: string;
    id: string;
    skills: {
        name: string;
        level: string; // e.g. 'Advanced', 'Proficient'
        icon?: string;
        description?: string;
    }[];
}

export interface Experience {
    id: string;
    company: string;
    role: string;
    location: string;
    duration: string;
    type: "Onsite" | "Remote" | "Online";
    description: string[];
    achievements: string[];
    technologies: string[];
}

export interface Education {
    id: string;
    degree: string;
    institution: string;
    university: string;
    duration: string;
    highlights: string[];
}

export interface Certification {
    id: string;
    title: string;
    provider: string;
    status: "Completed" | "In-Progress";
    date: string;
    credentialUrl?: string;
    badgeText?: string;
}

export interface SocialLinks {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    location: string;
}

export interface Profile {
    name: string;
    headline: string[];
    bio: string;
    summary: string;
    location: string;
    socials: SocialLinks;
    coreStrengths: string[];
    careerGoals: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}
