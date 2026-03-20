import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personal, social } from '../../data/portfolio.js';
import { useLang } from '../../context/LanguageContext.jsx';
import { translations } from '../../i18n/translations.js';

const iconMap = { FaGithub, FaLinkedin, FaEnvelope };

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang].footer;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="container-max px-6 md:px-12 lg:px-24 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} {personal.name}. {t.built}
        </p>
        <div className="flex items-center gap-3">
          {social.map(({ platform, url, icon }) => {
            const Icon = iconMap[icon];
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform}
                className="w-9 h-9 flex items-center justify-center rounded-lg
                  text-slate-400 hover:text-brand-600 dark:hover:text-brand-400
                  hover:bg-slate-100 dark:hover:bg-slate-800
                  transition-all duration-200"
              >
                {Icon && <Icon className="w-4 h-4" />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
