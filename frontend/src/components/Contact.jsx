import { useState } from 'react'
import { sendContactMessage } from '../lib/api.js'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setFeedback(null)
    try {
      await sendContactMessage(form)
      setStatus('success')
      setFeedback("Thank you! Your message has been sent successfully. I'll get back to you shortly.")
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setFeedback(err.message || 'Failed to send message. Please reach out to shubhamjadhav7705@gmail.com directly.')
    }
  }

  return (
    <section id="contact" className="section pb-24">
      <h2 className="section-title">
        <span className="text-accent">04.</span> Get In Touch
      </h2>

      <div className="grid gap-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-5">
          <p className="leading-relaxed text-slate-700 dark:text-slate-300 transition-colors">
            I am actively seeking software engineering internships, research opportunities, and collaborations in Generative AI, LLM systems, and backend development.
          </p>
          <p className="leading-relaxed text-slate-600 dark:text-slate-400 text-sm transition-colors">
            Whether you have a question about my projects, want to collaborate, or just want to connect, feel free to drop a message!
          </p>

          <div className="space-y-3 pt-2 font-mono text-sm">
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 transition-colors">
              <span className="text-accent font-bold">✉</span>
              <a
                href="mailto:shubhamjadhav7705@gmail.com"
                className="transition-colors hover:text-accent underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4"
              >
                shubhamjadhav7705@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 transition-colors">
              <span className="text-accent font-bold">☏</span>
              <span>+91 8208374138</span>
            </div>

            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 transition-colors">
              <span className="text-accent font-bold">⌂</span>
              <a
                href="https://github.com/shubh7705"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                github.com/shubh7705
              </a>
            </div>

            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 transition-colors">
              <span className="text-accent font-bold">in</span>
              <a
                href="https://linkedin.com/in/shubh7705"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                linkedin.com/in/shubh7705
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-4 lg:col-span-7">
          <div>
            <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-slate-700 dark:text-slate-300 font-medium transition-colors">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              minLength={2}
              maxLength={100}
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Alex Johnson"
              className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-base px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:bg-white dark:focus:bg-base focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-slate-700 dark:text-slate-300 font-medium transition-colors">
              Your Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="alex@company.com"
              className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-base px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:bg-white dark:focus:bg-base focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-slate-700 dark:text-slate-300 font-medium transition-colors">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              minLength={10}
              maxLength={2000}
              value={form.message}
              onChange={handleChange}
              placeholder="Let's build something impactful together..."
              className="w-full resize-none rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-base px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:bg-white dark:focus:bg-base focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
            />
          </div>

          {feedback && (
            <div
              role="alert"
              className={`rounded-md p-3 text-xs leading-relaxed ${
                status === 'success'
                  ? 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300'
                  : 'border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-200'
              }`}
            >
              {feedback}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary w-full justify-center py-2.5 font-mono text-sm disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === 'sending' ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="h-4 w-4 animate-spin text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  )
}