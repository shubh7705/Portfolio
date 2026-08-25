const skillGroups = [
  {
    title: 'AI / Machine Learning',
    description: 'LLM agents, RAG architectures & neural modeling',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    skills: [
      'PyTorch',
      'LangChain',
      'LangGraph',
      'RAG',
      'NLP',
      'Transformer Models',
      'Hugging Face',
    ],
  },
  {
    title: 'Backend Engineering',
    description: 'High-throughput asynchronous APIs & streaming',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
        <line x1="10" x2="18" y1="6" y2="6" />
        <line x1="10" x2="18" y1="18" y2="18" />
      </svg>
    ),
    skills: ['FastAPI', 'REST APIs', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Programming Languages',
    description: 'Core languages for systems, algorithms & scripting',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" x2="10" y1="4" y2="20" />
      </svg>
    ),
    skills: ['Python', 'C++', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frontend Development',
    description: 'Interactive dashboards & modern responsive web apps',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
    skills: ['React', 'Next.js', 'HTML5', 'CSS3'],
  },
  {
    title: 'Databases & Storage',
    description: 'Relational storage, caching & vector databases',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    skills: ['PostgreSQL', 'SQL', 'Relational Databases', 'ChromaDB', 'Redis'],
  },
  {
    title: 'Developer Tools & Infra',
    description: 'Deployment, version control & experiment tracking',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: ['Git', 'Docker', 'Linux', 'TensorBoard'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">
        <span className="text-accent">01.</span> Technical Skills
      </h2>
      <p className="mb-10 max-w-2xl text-slate-600 dark:text-slate-400 text-sm leading-relaxed -mt-6 transition-colors">
        Hands-on experience in building generative AI systems, production-ready backend services,
        and full-stack applications.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="card flex flex-col justify-between h-full group hover:border-accent/50 transition-all duration-300"
          >
            <div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/20 group-hover:shadow-glow">
                  {group.icon}
                </div>
                <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">{group.skills.length} skills</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 group-hover:text-accent transition-colors">
                {group.title}
              </h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 transition-colors">
                {group.description}
              </p>
            </div>

            <ul className="flex flex-wrap gap-2 pt-3 border-t border-slate-200 dark:border-slate-800/80 transition-colors">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-slate-300/80 dark:border-slate-700/60 bg-slate-100/90 dark:bg-base/80 px-2.5 py-1 text-xs font-mono text-slate-800 dark:text-slate-300 transition-colors hover:border-accent/60 hover:text-accent dark:hover:text-white"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}