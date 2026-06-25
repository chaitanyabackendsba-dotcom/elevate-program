import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { brand, hero, contact } from '../data/content'

const EASE = [0.22, 1, 0.36, 1]

export default function Hero() {
  const reduce = useReducedMotion()

  const wordReveal = {
    hidden: { y: '110%' },
    show: (i) => ({
      y: '0%',
      transition: { duration: 0.85, ease: EASE, delay: 0.15 + i * 0.12 },
    }),
  }

  const floatA = reduce
    ? {}
    : { y: [0, -16, 0], transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }
  const floatB = reduce
    ? {}
    : { y: [0, 18, 0], transition: { duration: 7.5, repeat: Infinity, ease: 'easeInOut' } }
  const floatC = reduce
    ? {}
    : { y: [0, -12, 0], transition: { duration: 6.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 } }

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-forest pt-24 pb-16 text-cream"
    >
      {/* Soft moving green blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-[34rem] w-[34rem] rounded-full bg-leaf/30 blur-3xl"
        animate={reduce ? {} : { x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-sage/20 blur-3xl"
        animate={reduce ? {} : { x: [0, -30, 0], y: [0, -24, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />

      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-sage"
          >
            {hero.kicker}
          </motion.span>

          <h1 className="mt-6 font-serif text-[3.25rem] font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.5rem]">
            {hero.headlineLines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.16em] -mb-[0.16em]">
                <motion.span
                  custom={i}
                  variants={wordReveal}
                  initial="hidden"
                  animate="show"
                  className="block pb-[0.02em]"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
          >
            {hero.subline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.62 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#courses"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-forest transition-all duration-300 hover:bg-sage active:scale-[0.98]"
            >
              {hero.primaryCta}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:border-cream hover:bg-cream/10 active:scale-[0.98]"
            >
              <MessageCircle size={18} />
              {hero.secondaryCta}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.78 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-cream/15 pt-7"
          >
            {hero.stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-3xl font-semibold text-cream sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-cream/60">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating image collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
          className="relative mx-auto hidden h-[30rem] w-full max-w-md md:block"
        >
          <motion.div
            animate={floatA}
            className="absolute left-0 top-4 w-[58%] overflow-hidden rounded-[1.75rem] border border-cream/10 shadow-2xl shadow-black/40"
          >
            <img src={hero.images[0]} alt="Hands-on cosmetic surgery training" className="h-72 w-full object-cover" loading="eager" />
          </motion.div>
          <motion.div
            animate={floatB}
            className="absolute right-0 top-24 w-[52%] overflow-hidden rounded-[1.75rem] border border-cream/10 shadow-2xl shadow-black/40"
          >
            <img src={hero.images[1]} alt="Clinical aesthetics workshop" className="h-64 w-full object-cover" loading="eager" />
          </motion.div>
          <motion.div
            animate={floatC}
            className="absolute bottom-0 left-10 w-[50%] overflow-hidden rounded-[1.75rem] border border-cream/10 shadow-2xl shadow-black/40"
          >
            <img src={hero.images[2]} alt="Body contouring demonstration" className="h-56 w-full object-cover" loading="eager" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-cream/30 p-1">
          <motion.span
            className="h-2 w-1 rounded-full bg-cream/70"
            animate={reduce ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
