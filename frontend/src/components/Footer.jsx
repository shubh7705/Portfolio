export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 py-10 bg-base/50">
      <div className="mx-auto flex max-w-5xl flex-col sm:flex-row items-center justify-between gap-4 px-6 text-center sm:text-left">
        <div>
          <p className="font-mono text-xs text-slate-400 font-medium">
            Designed &amp; built by <span className="text-slate-200">Shubham Pravin Jadhav</span>
          </p>
          <p className="font-mono text-[11px] text-slate-600 mt-1">
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
