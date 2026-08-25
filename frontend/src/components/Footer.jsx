export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 py-10 bg-slate-100/60 dark:bg-base/50 transition-colors">
      <div className="mx-auto flex max-w-5xl flex-col sm:flex-row items-center justify-between gap-4 px-6 text-center sm:text-left">
        <div>
          <p className="font-mono text-xs text-slate-600 dark:text-slate-400 font-medium">
            Designed &amp; built by <span className="text-slate-900 dark:text-slate-200 font-semibold">Shubham Pravin Jadhav</span>
          </p>
          <p className="font-mono text-[11px] text-slate-500 dark:text-slate-500 mt-1">
            React · Tailwind CSS · FastAPI · PostgreSQL
          </p>
        </div>
        <a
          href="#top"
          className="font-mono text-xs text-slate-500 hover:text-accent transition-colors flex items-center gap-1.5"
        >
          <span>Back to Top</span>
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}
