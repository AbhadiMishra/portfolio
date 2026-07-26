import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <FaGithub className={className} />
);

export const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <FaLinkedin className={className} />
);
