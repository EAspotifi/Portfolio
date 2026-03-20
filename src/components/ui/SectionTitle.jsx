export default function SectionTitle({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-brand-500 dark:text-brand-400">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-brand-500 to-brand-400 ${center ? 'mx-auto' : ''}`} />
    </div>
  );
}
