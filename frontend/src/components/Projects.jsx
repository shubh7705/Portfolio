import { useEffect, useState } from 'react'
import { fetchProjects } from '../lib/api.js'

const DEFAULT_PROJECTS = [
  {
    id: 1,
    name: 'Adaptive AI Assistant (Multi-LLM Gateway)',
    description:
      'A Multi-LLM routing gateway with a 10-stage evaluation pipeline that dynamically selects Gemini, Llama, and DeepSeek models based on query complexity, reducing token cost by 85%.',
    github_url: 'https://github.com/shubh7705/Adaptive-AI-Assistant',
    highlights: [
      'Designed 10-stage evaluation pipeline dynamically routing Gemini, Llama, and DeepSeek (85% token cost reduction)',
      'Engineered asynchronous FastAPI backend with Redis caching reducing API latency by 90%+ (2.5s → <50ms)',
      'Developed scalable REST APIs with Server-Sent Events (SSE), PostgreSQL, and React/Next.js dashboard for real-time token streaming & analytics',
    ],
    tech: [
      'Python', 'FastAPI', 'React', 'Next.js', 'JavaScript',
      'PostgreSQL', 'Redis', 'Docker', 'LangChain', 'Google Gemini API', 'REST APIs',
    ],
  },
  {
    id: 2,
    name: 'GIT AI',
    description:
      'Multi-agent AI platform built with LangGraph and LangChain to automate code reviews, repository understanding, security analysis, and software documentation across 20+ source files using a high-precision RAG pipeline.',
    github_url: 'https://github.com/shubh7705/GIT-AI',
    highlights: [
      'Implemented RAG pipeline with semantic code chunking, MiniLM embeddings, and ChromaDB (85% context usage reduction)',
      'Enhanced indexing and retrieval strategies, cutting latency by 70% and boosting issue detection coverage by 30%',
      'Developed FastAPI backend services integrated with PostgreSQL to support model inference, experiment tracking, and REST APIs',
    ],
    tech: [
      'Python', 'FastAPI', 'LangGraph', 'LangChain',
      'ChromaDB', 'PostgreSQL', 'REST APIs', 'PyTorch',
    ],
  },
  {
    id: 3,
    name: 'TorchGPT: Decoder-Only Transformer from Scratch',
    description:
      'A 15M-parameter decoder-only Transformer built from scratch in PyTorch using multi-head self-attention, RoPE embeddings, causal masking, LayerNorm, and autoregressive text generation — trained on 8M+ tokens.',
    github_url: 'https://github.com/shubh7705/TorchGPT',
    highlights: [
      'Trained on 8M+ tokens across multiple context lengths and attention configs, reaching 16.2 validation perplexity',
      'Optimized inference using mixed precision, KV caching, and decoding strategies (41% lower latency, 34% GPU memory reduction)',
      'Benchmarked multiple model configurations, documenting experimental results and performance trade-offs',
    ],
    tech: [
      'Python', 'PyTorch', 'CUDA', 'NumPy',
      'TensorBoard', 'SentencePiece', 'Mixed Precision Training',
    ],
  },
]

export default function Projects() {
  const [projects, setProjects] = useState(DEFAULT_PROJECTS)
  const [loading, setLoading] = useState(false)
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    let active = true
    setLoading(true)
    fetchProjects()
      .then((data) => {
        if (active && Array.isArray(data) && data.length > 0) {
          setProjects(data)
        }
      })
      .catch(() => {
        // Gracefully keep DEFAULT_PROJECTS
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [activeProject])

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveProject(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section id="projects" className="section">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="section-title !mb-2">
            <span className="text-accent">02.</span> Featured Projects
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl transition-colors">
            Selected projects showcasing multi-LLM orchestration, agentic RAG architectures, and custom neural models.
          </p>
        </div>
        <a
          href="https://github.com/shubh7705"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-accent hover:underline flex items-center gap-1.5 w-fit"
        >
          <span>View all on GitHub</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      {/* Equal-height grid for cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="card group flex flex-col justify-between h-full hover:border-accent/50 hover:shadow-glow transition-all duration-300 relative overflow-hidden cursor-pointer"
          >
            <div className="flex flex-col flex-1">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-accent font-semibold">0{project.id}</span>
                  <span className="h-px w-4 bg-accent/40" />
                </div>
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${project.name} GitHub Repository`}
                  className="shrink-0 rounded-md border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-base p-1.5 text-slate-600 dark:text-slate-400 transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
                    />
                  </svg>
                </a>
              </div>

              <h3 className="text-lg font-bold leading-snug text-slate-900 dark:text-slate-100 group-hover:text-accent transition-colors">
                {project.name}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 transition-colors flex-1 line-clamp-3">
                {project.description}
              </p>
            </div>

            <div className="mt-6">
              {/* Tech Stack */}
              <div className="border-t border-slate-200 dark:border-slate-800/80 pt-4 transition-colors">
                <ul className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t) => (
                    <li
                      key={t}
                      className="rounded bg-slate-100 dark:bg-base/90 px-2 py-0.5 font-mono text-[11px] text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-800 transition-colors"
                    >
                      {t}
                    </li>
                  ))}
                  {project.tech.length > 4 && (
                    <li className="rounded bg-slate-100 dark:bg-base/90 px-2 py-0.5 font-mono text-[11px] text-accent border border-accent/30 font-medium">
                      +{project.tech.length - 4} more
                    </li>
                  )}
                </ul>
              </div>

              {/* View Full Project Details CTA */}
              <div className="mt-4 flex items-center justify-between font-mono text-xs text-slate-500 dark:text-slate-400 group-hover:text-accent transition-colors pt-2.5 border-t border-dashed border-slate-200 dark:border-slate-800/60">
                <span className="text-[11px] font-medium">View Full Details</span>
                <span className="text-accent transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                  &rarr;
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal Popup Window with Blurred Background */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          onClick={() => setActiveProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto no-scrollbar rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface p-6 sm:p-8 shadow-2xl transition-all duration-300"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-0.5 text-xs font-mono text-accent mb-2">
                  <span>Featured Project · 0{activeProject.id}</span>
                </div>
                <h3 id="modal-project-title" className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {activeProject.name}
                </h3>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close Project Details Modal"
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-5 space-y-6">
              <div>
                <h4 className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Overview
                </h4>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {activeProject.description}
                </p>
              </div>

              {/* Key Technical Highlights */}
              <div>
                <h4 className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                  Key Architecture &amp; Impact
                </h4>
                <ul className="space-y-2.5">
                  {activeProject.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 rounded-lg border border-slate-100 dark:border-slate-800/60 bg-slate-50/80 dark:bg-base/60 p-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300"
                    >
                      <span className="font-mono text-accent font-bold text-sm shrink-0">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* All Technologies */}
              <div>
                <h4 className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                  Technologies &amp; Frameworks
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {activeProject.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-slate-300/80 dark:border-slate-700/60 bg-slate-100/90 dark:bg-base/80 px-2.5 py-1 text-xs font-mono text-slate-800 dark:text-slate-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="mt-8 flex items-center justify-end gap-3 border-t border-slate-200 dark:border-slate-800 pt-5">
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-surface px-4 py-2 font-mono text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
              <a
                href={activeProject.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-2 px-4 text-xs inline-flex items-center gap-2"
              >
                <span>View on GitHub</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}