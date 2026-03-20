import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from '../ui/SectionTitle.jsx';
import { personal, social, education, certifications } from '../../data/portfolio.js';
import { useLang } from '../../context/LanguageContext.jsx';
import { translations } from '../../i18n/translations.js';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const iconMap = { FaGithub, FaLinkedin, FaEnvelope };

function StatCard({ value, label, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-base p-5 text-center">
      <div className="text-3xl font-bold text-brand-600 dark:text-brand-400 mb-1">{value}</div>
      <div className="text-sm text-slate-500 dark:text-slate-400">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const { lang } = useLang();
  const t = translations[lang].about;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const stats = [
    { value: '3+',   label: t.statsExperience },
    { value: '5+',   label: t.statsProjects   },
    { value: '15+',  label: t.statsTech       },
    { value: '500+', label: t.statsCommits     },
  ];

  return (
    <section id="about" className="section-padding dark:bg-slate-900">
      <div className="container-max">
        <SectionTitle eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14" ref={ref}>
          {/* Avatar */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start">
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-400 to-brand-600 rotate-6 opacity-20" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-300 to-brand-500 rotate-3 opacity-30" />
              <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-2xl shadow-brand-500/30">
                <span className="text-7xl md:text-8xl font-bold text-white/90 select-none">EV</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{t.openToWork}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio + info */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">{t.bio}</p>
            <div className="space-y-2 mb-6">
              {[
                { label: t.location, value: personal.location },
                { label: t.email,   value: personal.email, href: `mailto:${personal.email}` },
                { label: t.phone,   value: personal.phone, href: `tel:${personal.phone}` },
              ].map(({ label, value, href }) => (
                <div key={label} className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                  <strong className="text-slate-700 dark:text-slate-200">{label}:</strong>
                  {href
                    ? <a href={href} className="text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">{value}</a>
                    : <span className="text-slate-500 dark:text-slate-400">{value}</span>}
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mb-5">
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-2">{t.certTitle}</p>
              <div className="flex flex-wrap gap-2">
                {certifications.map(c => (
                  <span key={c.name}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 border border-brand-100 dark:border-brand-800">
                    {c.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-3">{t.langTitle}</p>
              <div className="space-y-3">
                {t.languages.map(lang => (
                  <div key={lang.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200 flex items-center gap-2">
                        <span className="text-base leading-none">{lang.flag}</span>
                        {lang.name}
                      </span>
                      <span className="text-xs font-semibold text-brand-600 dark:text-brand-400">{lang.level}</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-brand-500 to-brand-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${lang.percent}%` } : { width: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, i) => <StatCard key={stat.label} {...stat} index={i} />)}
        </div>

        {/* Education */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-4">{t.eduTitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map(ed => (
              <div key={ed.id} className="card-base p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center shrink-0 text-brand-600 dark:text-brand-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.711 47.87 47.87 0 00-8.105 4.342.75.75 0 01-.832 0 47.87 47.87 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white text-sm">{ed.degree}</p>
                  <p className="text-brand-600 dark:text-brand-400 text-xs font-medium">{ed.institution}</p>
                  <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">{ed.period} · {ed.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
