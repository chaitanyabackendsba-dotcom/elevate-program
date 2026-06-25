import { motion } from 'framer-motion'
import { fadeUp, stagger, scaleIn, viewport } from './anim'
import { about, founder } from '../data/content'

export default function About() {
  return (
    <section id="about" className="relative bg-cream py-24 sm:py-32">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-2">
        {/* Image side */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative order-1"
        >
          <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-forest/10">
            <img
              src={about.image}
              alt="Dr. Ashutosh Misra leading a training session"
              className="h-[26rem] w-full object-cover sm:h-[32rem]"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-forest/10 bg-cream/95 p-5 shadow-lg backdrop-blur sm:left-8 sm:right-auto sm:w-72">
            <p className="font-serif text-lg font-semibold text-forest">{founder.name}</p>
            <p className="mt-1 text-sm text-leaf">{founder.role}</p>
          </div>
        </motion.div>

        {/* Copy side */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="order-2"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            {about.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-forest sm:text-5xl"
          >
            {about.title}
          </motion.h2>

          <div className="mt-6 space-y-4">
            {about.paragraphs.map((p, i) => (
              <motion.p key={i} variants={fadeUp} className="text-base leading-relaxed text-forest/75">
                {p}
              </motion.p>
            ))}
          </div>

          <motion.a variants={fadeUp} href="#courses" className="btn-primary mt-8">
            Explore Courses
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
