import { useState, useEffect } from 'react'

const links = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev)
  const closeMenu = () => setMobileMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('nav') && !event.target.closest('#mobile-menu')) {
        closeMenu()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'border-b border-slate-800/80 bg-base/90 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="group flex items-center gap-1 font-mono text-lg font-semibold text-slate-100 transition-colors hover:text-white"
        >
          <span className="text-accent">&lt;</span>
          <span className="text-accent group-hover:underline">sj</span>
          <span className="text-slate-300">.dev</span>
          <span className="text-accent">/&gt;</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group font-mono text-sm text-slate-400 transition-colors hover:text-accent flex items-center gap-1"
              >
                <span className="text-accent/70 text-xs">0{i + 1}.</span>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="btn-primary py-1.5 px-4 text-xs font-mono"
            >
              Get In Touch
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-slate-300 hover:text-accent transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 border-b border-slate-800 bg-base/95 backdrop-blur-xl px-6 py-8 md:hidden shadow-2xl"
        >
          <ul className="flex flex-col gap-5 text-center">
            {links.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block font-mono text-base font-medium text-slate-200 hover:text-accent transition-colors py-2"
                >
                  <span className="text-accent/80 text-sm mr-2">0{i + 1}.</span>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={closeMenu}
                className="btn-primary w-full justify-center py-2.5 text-sm font-mono"
              >
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}