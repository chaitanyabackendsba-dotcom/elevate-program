import { motion } from 'framer-motion'
import { Users, Hand, LifeBuoy, Award } from 'lucide-react'
import { fadeUp, stagger, viewport } from './anim'
import { howItWorks } from '../data/content'

const ICONS = [Users, Hand, LifeBuoy, Award]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-cream py-24 sm:py-32">
      <div className="section-shell">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow justify-center">
            How it works
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-forest sm:text-5xl"
          >
            How The Elevate Program works
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-forest/70">
            A structured, mentorship-led path designed to turn potential into real surgical expertise.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {howItWorks.map((step, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="group relative rounded-3xl border border-forest/10 bg-white p-7 shadow-[0_14px_36px_-18px_rgba(8,67,30,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:border-leaf/40 hover:shadow-[0_22px_48px_-20px_rgba(8,67,30,0.26)]"
              >
                <span className="absolute right-6 top-6 font-serif text-5xl font-semibold text-sage/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sage/40 text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
                  <Icon size={24} />
                </span>
                <h3 className="mt-6 font-serif text-xl font-semibold text-forest">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-forest/70">{step.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-12 flex justify-center"
        >
          <a href="#courses" className="btn-primary">
            View Courses
          </a>
        </motion.div>
      </div>
    </section>
  )
}
