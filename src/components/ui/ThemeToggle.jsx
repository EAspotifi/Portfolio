import { useTheme } from '../../context/ThemeContext.jsx';
import { HiSun, HiMoon } from 'react-icons/hi2';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
      className={`relative w-10 h-10 rounded-xl flex items-center justify-center
        text-slate-500 dark:text-slate-400
        hover:bg-slate-100 dark:hover:bg-slate-800
        hover:text-brand-600 dark:hover:text-brand-400
        transition-all duration-200 ${className}`}
    >
      <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 
        ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`}>
        <HiSun className="w-5 h-5" />
      </span>
      <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300
        ${theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
        <HiMoon className="w-5 h-5" />
      </span>
    </button>
  );
}
