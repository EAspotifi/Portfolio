import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle.jsx';
import Badge from '../ui/Badge.jsx';
import { useLang } from '../../context/LanguageContext.jsx';
import { translations } from '../../i18n/translations.js';

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-10 pb-12 last:pb-0">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />
      <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-500 ring-4 ring-brand-50 dark:ring-slate-900" />
      <div className="card-base p-6">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.role}</h3>
            <p className="text-brand-600 dark:text-brand-400 font-semibold text-sm">{item.company}</p>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg block">{item.period}</span>
            <span className="text-xs text-slate-400 dark:text-slate-500 mt-1 block">{item.location}</span>
          </div>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{item.description}</p>
        <ul className="space-y-1.5 mb-4">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
              {b}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {item.tech.map(t => <Badge key={t} variant="tech">{t}</Badge>)}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { lang } = useLang();
  const t = translations[lang].experience;

  return (
    <section id="experience" className="section-padding section-alt dark:bg-slate-950">
      <div className="container-max">
        <SectionTitle eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
        <div className="max-w-3xl">
          {t.items.map((item, i) => <TimelineItem key={item.id} item={item} index={i} />)}
        </div>
      </div>
    </section>
  );
}
