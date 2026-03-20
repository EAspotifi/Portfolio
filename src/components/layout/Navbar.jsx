import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import ThemeToggle from '../ui/ThemeToggle.jsx';
import { personal } from '../../data/portfolio.js';
import { useLang } from '../../context/LanguageContext.jsx';
import { translations } from '../../i18n/translations.js';

const navIds = ['about', 'skills', 'projects', 'experience', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, changeLang } = useLang();
  const t = translations[lang].nav;

  const navLinks = [
    { label: t.about,      to: 'about'      },
    { label: t.skills,     to: 'skills'     },
    { label: t.projects,   to: 'projects'   },
    { label: t.experience, to: 'experience' },
    { label: t.contact,    to: 'contact'    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm shadow-slate-200/50 dark:shadow-slate-950/50'
        : 'bg-transparent'}`}
    >
      <nav className="container-max flex items-center justify-between h-16 px-6 md:px-12 lg:px-24">
        {/* Logo */}
        <Link to="hero" smooth duration={500} className="cursor-pointer">
          <span className="font-mono text-lg font-bold text-brand-600 dark:text-brand-400">
            &lt;Ernesto<span className="text-slate-400 dark:text-slate-500">/</span>&gt;
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={-64}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300
                  hover:text-brand-600 dark:hover:text-brand-400
                  hover:bg-slate-100 dark:hover:bg-slate-800
                  transition-all duration-200 cursor-pointer block"
                activeClass="text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20"
                spy
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-1">
          {/* Language toggle */}
          <div className="flex items-center rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 mr-1">
            {['es', 'en'].map((l) => (
              <button
                key={l}
                onClick={() => changeLang(l)}
                aria-label={l === 'es' ? 'Español' : 'English'}
                className={`px-2.5 py-1.5 text-xs font-semibold uppercase transition-all duration-200 cursor-pointer
                  ${lang === l
                    ? 'bg-brand-600 text-white'
                    : 'text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400'}`}
              >
                {l}
              </button>
            ))}
          </div>

          <ThemeToggle />

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl
              text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800
              transition-colors duration-200"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX className="w-5 h-5" /> : <HiMenuAlt3 className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-6 py-4 flex flex-col gap-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-64}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-3 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300
                hover:text-brand-600 dark:hover:text-brand-400
                hover:bg-slate-100 dark:hover:bg-slate-800
                transition-all duration-200 cursor-pointer block"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
