import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';
import SectionTitle from '../ui/SectionTitle.jsx';
import Badge from '../ui/Badge.jsx';
import Button from '../ui/Button.jsx';
import { personal } from '../../data/portfolio.js';
import { useLang } from '../../context/LanguageContext.jsx';
import { translations } from '../../i18n/translations.js';

const statusColor = {
  completed: 'bg-green-500',
  active: 'bg-brand-500 animate-pulse',
  planned: 'bg-slate-400',
};

function ProjectCard({ project, index, t }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const statusLabels = {
    completed: t.statusCompleted,
    active: t.statusActive,
    planned: t.statusPlanned,
  };

  const link = project.github || project.demo || null;
  const Tag = link ? motion.a : motion.div;
  const linkProps = link
    ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Tag ref={ref} {...linkProps}
      initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={link ? { scale: 1.025, transition: { duration: 0.2 } } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className={`card-base p-6 flex flex-col group transition-shadow duration-300
        ${link
          ? 'cursor-pointer hover:shadow-[0_0_0_2px_theme(colors.brand.500/40%),0_8px_32px_-4px_theme(colors.brand.500/20%)] dark:hover:shadow-[0_0_0_2px_theme(colors.brand.400/40%),0_8px_32px_-4px_theme(colors.brand.400/15%)]'
          : 'card-hover'
        }`}>
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          {project.featured && <span className="inline-block mb-2 text-xs font-semibold text-brand-500 dark:text-brand-400 tracking-wider uppercase">{t.featured}</span>}
          <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-200">{project.title}</h3>
          <div className="flex items-center gap-1.5 mt-1">
            <span className={`w-1.5 h-1.5 rounded-full ${statusColor[project.status] || 'bg-slate-400'}`} />
            <span className="text-xs text-slate-400 dark:text-slate-500">{statusLabels[project.status]}</span>
          </div>
        </div>
        <div className="flex gap-1.5 shrink-0">
          {project.github
            ? <span onClick={e => e.stopPropagation()}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-200">
              <FaGithub className="w-4 h-4" />
            </span>
            : <div title={t.privateRepo} className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-300 dark:text-slate-600">
              <FaLock className="w-3.5 h-3.5" />
            </div>
          }
          {project.demo && (
            <span onClick={e => e.stopPropagation()}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-200">
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
            </span>
          )}
        </div>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map(tech => <Badge key={tech} variant="tech">{tech}</Badge>)}
      </div>
    </Tag>
  );
}

function ComingSoonCard({ index, t }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="card-base p-6 flex flex-col items-center justify-center text-center min-h-52 border-dashed border-2 border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30">
      <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center mb-4">
        <HiSparkles className="w-6 h-6 text-brand-400 dark:text-brand-500" />
      </div>
      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">{t.comingSoonTitle}</p>
      <p className="text-xs text-slate-400 dark:text-slate-500">{t.comingSoonDesc}</p>
    </motion.div>
  );
}

export default function Projects() {
  const { lang } = useLang();
  const t = translations[lang].projects;

  return (
    <section id="projects" className="section-padding dark:bg-slate-900">
      <div className="container-max">
        <SectionTitle eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {t.items.map((project, i) => <ProjectCard key={project.id} project={project} index={i} t={t} />)}
          <ComingSoonCard index={t.items.length} t={t} />
          <ComingSoonCard index={t.items.length + 1} t={t} />
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400 dark:text-slate-500 mb-4">{t.githubCTALabel}</p>
          <Button as="a" href={personal.github} target="_blank" rel="noopener noreferrer" variant="outline" size="lg">
            <FaGithub className="w-4 h-4" />
            {t.githubCTA}
          </Button>
        </div>
      </div>
    </section>
  );
}
