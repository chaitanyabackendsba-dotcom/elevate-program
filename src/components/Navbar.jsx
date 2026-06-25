import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { brand, navLinks } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  // Over the dark hero (not scrolled, menu closed) we use light text;
  // once scrolled onto the cream background we switch to forest text.
  const onDark = !scrolled && !open

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-cream/85 shadow-[0_1px_0_rgba(8,67,30,0.08)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={close}>
          <img
            src={brand.logo}
            alt="The Elevate Program logo"
            className="h-10 w-auto"
            width="40"
            height="53"
          />
          <span
            className={`hidden font-serif text-lg font-semibold tracking-tight transition-colors sm:block ${
              onDark ? 'text-cream' : 'text-forest'
            }`}
          >
            The Elevate Program
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative text-sm font-medium transition-colors ${
                onDark ? 'text-cream/85 hover:text-cream' : 'text-forest/80 hover:text-forest'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                  onDark ? 'bg-cream' : 'bg-forest'
                }`}
              />
            </a>
          ))}
          <Link
            to={brand.bookingPath}
            className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 active:scale-[0.98] ${
              onDark
                ? 'bg-cream text-forest hover:bg-sage'
                : 'bg-forest text-cream hover:bg-leaf hover:shadow-lg hover:shadow-forest/20'
            }`}
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
            onDark ? 'border-cream/25 text-cream' : 'border-forest/15 text-forest'
          }`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-forest/10 bg-cream/95 backdrop-blur-md lg:hidden"
          >
            <div className="section-shell flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="rounded-xl px-4 py-3 text-base font-medium text-forest/85 transition-colors hover:bg-sage/40"
                >
                  {link.label}
                </a>
              ))}
              <Link to={brand.bookingPath} onClick={close} className="btn-primary mt-2 w-full">
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
