import React, { useState } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from '../components/common/BrandIcons';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, ExternalLink } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject || 'Inquiry'}`);
    const mailtoBody = encodeURIComponent(
      `Hello Abhinav,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent via Abhinav Mishra Portfolio`
    );

    // Open mailto link directly to user's email client
    window.location.href = `mailto:${profileData.socials.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setStatus('success');
  };

  const handleCopyDetails = () => {
    const textToCopy = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <SectionHeader
        badge="Get in Touch"
        title="Contact & Collaboration"
        subtitle="Reach out directly to Abhinav Mishra for Software Engineering roles, AI/ML projects, or technical inquiries."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info Cards */}
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-3xl border border-black/10 dark:border-white/10 space-y-4">
            <h3 className="text-lg font-black text-slate-900 dark:text-white">Direct Communication</h3>
            
            <div className="space-y-3 text-xs">
              <a
                href={`mailto:${profileData.socials.email}`}
                className="flex items-center gap-3 glass-card p-3.5 rounded-xl border border-black/10 dark:border-white/10 text-slate-900 dark:text-slate-200 hover:border-blue-500/50 transition-colors"
              >
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-700 dark:text-slate-400 text-[10px] font-bold">Email Address</div>
                  <div className="font-black text-slate-900 dark:text-white">{profileData.socials.email}</div>
                </div>
              </a>

              <a
                href={`tel:${profileData.socials.phone}`}
                className="flex items-center gap-3 glass-card p-3.5 rounded-xl border border-black/10 dark:border-white/10 text-slate-900 dark:text-slate-200 hover:border-blue-500/50 transition-colors"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-700 dark:text-slate-400 text-[10px] font-bold">Phone Number</div>
                  <div className="font-black text-slate-900 dark:text-white">{profileData.socials.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 glass-card p-3.5 rounded-xl border border-black/10 dark:border-white/10 text-slate-900 dark:text-slate-200">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-700 dark:text-purple-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-700 dark:text-slate-400 text-[10px] font-bold">Primary Location</div>
                  <div className="font-black text-slate-900 dark:text-white">{profileData.socials.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-black/10 dark:border-white/10 space-y-4">
            <h3 className="text-lg font-black text-slate-900 dark:text-white">Social Connections</h3>
            <div className="flex gap-3">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 glass-card p-4 rounded-xl border border-black/10 dark:border-white/10 text-center text-slate-900 dark:text-slate-200 hover:border-blue-500/50 transition-colors space-y-1"
              >
                <GithubIcon className="w-5 h-5 mx-auto text-blue-600 dark:text-blue-400" />
                <div className="text-xs font-black">GitHub</div>
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 glass-card p-4 rounded-xl border border-black/10 dark:border-white/10 text-center text-slate-900 dark:text-slate-200 hover:border-blue-500/50 transition-colors space-y-1"
              >
                <LinkedinIcon className="w-5 h-5 mx-auto text-blue-600 dark:text-blue-400" />
                <div className="text-xs font-black">LinkedIn</div>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 glass-panel p-8 sm:p-10 rounded-3xl border border-black/10 dark:border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black text-slate-900 dark:text-white">Send Message Direct to Email</h3>
            <a
              href={`mailto:${profileData.socials.email}`}
              className="text-xs font-black text-blue-700 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <span>{profileData.socials.email}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {status === 'success' && (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-300 text-xs flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm font-black">Email Application Launched!</strong>
                Your default email application has opened pre-filled with your message. Click send in your mail app to deliver it directly to {profileData.socials.email}.
              </div>
            </div>
          )}

          <form onSubmit={handleSendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-black text-slate-900 dark:text-slate-200">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-3 rounded-xl glass-card border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-xs font-bold focus:outline-none focus:border-blue-500/60 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-black text-slate-900 dark:text-slate-200">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. sarah@company.com"
                  className="w-full px-4 py-3 rounded-xl glass-card border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-xs font-bold focus:outline-none focus:border-blue-500/60 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-black text-slate-900 dark:text-slate-200">Subject *</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Full-Stack / AI ML Engineering Opportunity"
                className="w-full px-4 py-3 rounded-xl glass-card border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-xs font-bold focus:outline-none focus:border-blue-500/60 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-black text-slate-900 dark:text-slate-200">Message *</label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message details here..."
                className="w-full px-4 py-3 rounded-xl glass-card border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-xs font-bold focus:outline-none focus:border-blue-500/60 transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xs flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send Email to {profileData.socials.email}</span>
              </button>

              <button
                type="button"
                onClick={handleCopyDetails}
                className="px-5 py-3.5 rounded-xl glass-card text-slate-900 dark:text-white font-black text-xs flex items-center justify-center gap-2 hover:border-blue-500/50 transition-all"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Details Copied!' : 'Copy Form Content'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
