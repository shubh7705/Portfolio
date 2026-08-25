const coursework = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Operating Systems',
  'Database Management Systems',
  'Machine Learning',
  'Deep Learning',
  'Probability & Statistics',
]

const achievements = [
  {
    title: 'Competitive Programming',
    detail:
      'Solved 400+ coding problems across CodeChef, LeetCode, and GeeksforGeeks; achieved a maximum CodeChef rating of 1614 (3-Star).',
    badge: 'CodeChef 3★ (1614)',
  },
  {
    title: 'Resource Management Lead — E-Summit',
    detail:
      'Led a 15+ member Resource Management Team at E-Summit, IIIT Nagpur, coordinating resource planning, logistics, and vendor management for a 500+ attendee entrepreneurship event.',
    badge: '500+ Attendees',
  },
]

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">
        <span className="text-accent">03.</span> About Me
      </h2>

      <div className="grid gap-10 lg:grid-cols-12">
        {/* Bio & Education */}
        <div className="space-y-6 lg:col-span-7">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed transition-colors">
            I am a Computer Science undergraduate at <strong className="text-slate-900 dark:text-slate-100 font-semibold">IIIT Nagpur</strong> with a strong focus on Generative AI, Multi-LLM Orchestration, and High-Performance Backend Engineering.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm transition-colors">
            I enjoy exploring the intersection of distributed systems and machine learning — from implementing Transformer architectures from scratch in PyTorch to building multi-agent RAG pipelines that automate complex code intelligence tasks.
          </p>

          {/* Education Card */}
          <div className="card rounded-xl border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-surface/90 p-5 mt-6 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-accent font-semibold">Education</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mt-1">
                  B.Tech in Computer Science and Engineering
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Indian Institute of Information Technology, Nagpur (IIIT Nagpur)
                </p>
                <p className="text-xs text-slate-500 mt-0.5">Nagpur, Maharashtra</p>
              </div>
              <div className="text-right">
                <span className="inline-block rounded bg-accent/10 px-2.5 py-1 font-mono text-xs font-semibold text-accent border border-accent/30">
                  CGPA: 7.76
                </span>
                <p className="text-xs font-mono text-slate-500 mt-1.5">2023 – 2027</p>
              </div>
            </div>

            {/* Coursework */}
            <div className="mt-5 border-t border-slate-200 dark:border-slate-800/80 pt-4 transition-colors">
              <p className="text-xs font-mono text-slate-600 dark:text-slate-400 mb-2 font-semibold">
                Relevant Coursework:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded bg-slate-100 dark:bg-base/80 px-2.5 py-1 text-[11px] font-mono text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Leadership & Achievements */}
        <div className="space-y-4 lg:col-span-5">
          <h3 className="font-mono text-sm text-slate-700 dark:text-slate-300 font-semibold mb-2 transition-colors">
            🏆 Leadership &amp; Achievements
          </h3>

          {achievements.map((ach) => (
            <div
              key={ach.title}
              className="card rounded-xl border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-surface/80 p-4 space-y-2 hover:border-accent/40 transition-all"
            >
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                  {ach.title}
                </h4>
                <span className="shrink-0 rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  {ach.badge}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                {ach.detail}
              </p>
            </div>
          ))}

          {/* Quick contact banner */}
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-4 text-xs text-slate-700 dark:text-slate-300 font-mono flex items-center justify-between gap-4 mt-4 transition-colors">
            <div>
              <p className="text-accent font-semibold">Looking for opportunities</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Open to AI/ML &amp; Backend internships</p>
            </div>
            <a href="#contact" className="btn-primary py-1.5 px-3 text-xs shrink-0">
              Reach Out
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}