const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/shubh7705',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
        />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/shubh7705',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:shubhamjadhav7705@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section id="top" className="section relative flex min-h-[92vh] flex-col justify-center pt-24 pb-16">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
        <div className="h-[380px] w-[550px] rounded-full bg-accent/10 blur-[130px]" />
      </div>

      <div className="flex flex-col gap-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-mono text-accent w-fit">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for AI/ML &amp; Backend Roles</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl lg:text-7xl transition-colors">
              Shubham Pravin Jadhav
            </h1>
            <h2 className="mt-3 text-xl font-semibold text-slate-700 dark:text-slate-300 sm:text-3xl lg:text-4xl transition-colors">
              AI/ML &amp; Backend Developer
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg transition-colors">
              B.Tech in Computer Science &amp; Engineering student at{' '}
              <span className="text-slate-900 dark:text-slate-200 font-medium">IIIT Nagpur</span> building high-throughput Multi-LLM gateways,
              multi-agent RAG architectures, and custom Transformer models from scratch with{' '}
              <span className="font-mono text-accent">PyTorch</span>,{' '}
              <span className="font-mono text-accent">FastAPI</span>, and{' '}
              <span className="font-mono text-accent">LangGraph</span>.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary">
                Explore Projects
                <span aria-hidden="true">&rarr;</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-surface px-5 py-2.5 font-mono text-sm font-medium text-slate-800 dark:text-slate-200 shadow-sm transition-all duration-200 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/shubh7705"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-base px-4 py-2.5 font-mono text-sm font-medium text-slate-700 dark:text-slate-300 transition-all duration-200 hover:border-accent/40 hover:text-accent"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Code badge display card */}
          <div className="w-full lg:w-80 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-surface/90 p-5 font-mono text-xs shadow-xl dark:shadow-2xl backdrop-blur-sm transition-colors">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] text-slate-500">developer.json</span>
            </div>
            <div className="mt-4 space-y-1.5 text-slate-700 dark:text-slate-300">
              <p><span className="text-pink-600 dark:text-pink-400">const</span> <span className="text-blue-600 dark:text-blue-400">engineer</span> = &#123;</p>
              <p className="pl-4"><span className="text-slate-500 dark:text-slate-400">name:</span> <span className="text-emerald-600 dark:text-emerald-300">'Shubham Jadhav'</span>,</p>
              <p className="pl-4"><span className="text-slate-500 dark:text-slate-400">institute:</span> <span className="text-emerald-600 dark:text-emerald-300">'IIIT Nagpur'</span>,</p>
              <p className="pl-4"><span className="text-slate-500 dark:text-slate-400">cgpa:</span> <span className="text-amber-600 dark:text-amber-300">7.76</span>,</p>
              <p className="pl-4"><span className="text-slate-500 dark:text-slate-400">batch:</span> <span className="text-amber-600 dark:text-amber-300">'2023 - 2027'</span>,</p>
              <p className="pl-4"><span className="text-slate-500 dark:text-slate-400">codechef:</span> <span className="text-emerald-600 dark:text-emerald-300">'3-Star (1614)'</span>,</p>
              <p className="pl-4"><span className="text-slate-500 dark:text-slate-400">dsaSolved:</span> <span className="text-amber-600 dark:text-amber-300">'400+'</span>,</p>
              <p>&#125;;</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex items-center gap-6 border-t border-slate-200 dark:border-slate-800/80 pt-6">
          <span className="font-mono text-xs text-slate-500">Connect:</span>
          <ul className="flex items-center gap-5">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.label === 'Email' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="block text-slate-500 dark:text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
                >
                  {s.icon}
                  <span className="sr-only">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}