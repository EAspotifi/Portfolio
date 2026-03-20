import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiPaperAirplane, HiPhone } from 'react-icons/hi2';
import SectionTitle from '../ui/SectionTitle.jsx';
import Button from '../ui/Button.jsx';
import { personal, social } from '../../data/portfolio.js';
import { useLang } from '../../context/LanguageContext.jsx';
import { translations } from '../../i18n/translations.js';

const iconMap = { FaGithub, FaLinkedin, FaEnvelope };

export default function Contact() {
  const { lang } = useLang();
  const t = translations[lang].contact;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = field => e => setForm(prev => ({ ...prev, [field]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm
    bg-white dark:bg-slate-800
    border border-slate-200 dark:border-slate-700
    text-slate-900 dark:text-white
    placeholder-slate-400 dark:placeholder-slate-500
    focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent
    transition-all duration-200`;

  const contactItems = [
    { icon: FaEnvelope, label: personal.email, href: `mailto:${personal.email}` },
    { icon: HiPhone,    label: personal.phone,  href: `tel:${personal.phone}`   },
  ];

  return (
    <section id="contact" className="section-padding dark:bg-slate-900">
      <div className="container-max">
        <SectionTitle eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} center />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t.heading}</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">{t.description}</p>
            <div className="space-y-4 mb-8">
              {contactItems.map(({ icon: Icon, label, href }) => (
                <a key={href} href={href}
                  className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center group-hover:bg-brand-100 dark:group-hover:bg-brand-900/50 transition-colors">
                    <Icon className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-3">{t.socialLabel}</p>
              <div className="flex gap-3">
                {social.map(({ platform, url, icon }) => {
                  const Icon = iconMap[icon];
                  return Icon ? (
                    <a key={platform} href={url} target="_blank" rel="noopener noreferrer" aria-label={platform}
                      className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-brand-400 dark:hover:border-brand-600 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-all duration-200">
                      <Icon className="w-4 h-4" />
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}>
            {sent ? (
              <div className="card-base p-8 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                  <HiPaperAirplane className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t.formSentTitle}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{t.formSentDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-base p-6 space-y-4">
                {[
                  { id: 'name',    label: t.formName,    type: 'text',  ph: t.namePlaceholder,    val: form.name    },
                  { id: 'email',   label: t.formEmail,   type: 'email', ph: t.emailPlaceholder,   val: form.email   },
                ].map(({ id, label, type, ph, val }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                      {label} <span className="text-brand-500">*</span>
                    </label>
                    <input id={id} type={type} required placeholder={ph} className={inputClass}
                      value={val} onChange={handleChange(id)} />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                    {t.formMessage} <span className="text-brand-500">*</span>
                  </label>
                  <textarea id="message" rows={5} required placeholder={t.messagePlaceholder}
                    className={`${inputClass} resize-none`} value={form.message} onChange={handleChange('message')} />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
                  <HiPaperAirplane className="w-4 h-4" />
                  {t.formSend}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
