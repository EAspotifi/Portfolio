export default function Button({ children, variant = 'primary', size = 'md', className = '', as: Tag = 'button', ...props }) {
  const base = 'inline-flex items-center gap-2 font-medium rounded-xl transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 cursor-pointer';

  const variants = {
    primary: 'bg-brand-600 hover:bg-brand-700 text-white shadow-sm shadow-brand-500/30 hover:shadow-md hover:shadow-brand-500/40',
    secondary: 'bg-brand-50 dark:bg-brand-900/30 hover:bg-brand-100 dark:hover:bg-brand-900/50 text-brand-700 dark:text-brand-300',
    outline: 'border border-slate-300 dark:border-slate-600 hover:border-brand-400 dark:hover:border-brand-500 text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 bg-transparent',
    ghost: 'text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 bg-transparent',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  return (
    <Tag className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
