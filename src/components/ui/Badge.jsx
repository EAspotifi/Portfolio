export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300',
    brand:   'bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800',
    tech:    'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-mono text-xs border border-slate-200 dark:border-slate-700',
  };

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
