const skillGroups = [
  {
    title: 'AI / Machine Learning',
    icon: '⚡',
    description: 'LLM agents, RAG architectures & neural modeling',
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
    icon: '⚙️',
    description: 'High-throughput asynchronous APIs & streaming',
    skills: ['FastAPI', 'REST APIs', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Programming Languages',
    icon: '💻',
    description: 'Core languages for systems, algorithms & scripting',
    skills: ['Python', 'C++', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frontend Development',
    icon: '🎨',
    description: 'Interactive dashboards & modern responsive web apps',
    skills: ['React', 'Next.js', 'HTML5', 'CSS3'],
  },
  {
    title: 'Databases & Storage',
    icon: '🗄️',
    description: 'Relational storage, caching & vector databases',
    skills: ['PostgreSQL', 'SQL', 'Relational Databases', 'ChromaDB', 'Redis'],
  },
  {
    title: 'Developer Tools & Infra',
    icon: '🛠️',
    description: 'Deployment, version control & experiment tracking',
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
            className="card flex flex-col justify-between group hover:border-accent/40 transition-all duration-300"
          >
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-2xl" aria-hidden="true">{group.icon}</span>
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