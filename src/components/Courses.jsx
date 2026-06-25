import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, GraduationCap } from 'lucide-react'
import { fadeUp, stagger, viewport } from './anim'
import { courses, eligibility } from '../data/content'

// Animated react-router Link so course cards keep the stagger reveal
// while routing internally to the booking page.
const MotionLink = motion.create(Link)

export default function Courses() {
  return (
    <section id="courses" className="relative bg-leaf/[0.06] py-24 sm:py-32">
      <div className="section-shell">
        {/* Heading */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-2xl"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            Specialised tracks
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-forest sm:text-5xl"
          >
            Six focused courses to master
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-forest/70">
            Each track blends structured theory, live demonstrations and intensive hands-on practice,
            so you build both skill and judgment.
          </motion.p>
        </motion.div>

        {/* Course grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {courses.map((course) => (
            <MotionLink
              key={course.n}
              to={`/book-online?course=${encodeURIComponent(course.title)}`}
              variants={fadeUp}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-forest/10 bg-cream shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-forest/10"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={course.image}
                  alt={`${course.title} training`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/90 font-serif text-base font-semibold text-forest backdrop-blur">
                  {course.n}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-xl font-semibold text-forest">{course.title}</h3>
                  <ArrowUpRight
                    size={20}
                    className="mt-1 shrink-0 text-leaf transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-forest/70">{course.blurb}</p>
                <span className="mt-5 text-sm font-semibold text-leaf">Enquire about this track</span>
              </div>
            </MotionLink>
          ))}
        </motion.div>

        {/* Eligibility */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-12 grid gap-5 rounded-3xl border border-forest/10 bg-forest p-8 text-cream sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8 sm:p-10"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream/10">
              <GraduationCap size={22} className="text-sage" />
            </span>
            <span className="font-serif text-2xl font-semibold">Eligibility</span>
          </motion.div>
          <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
            {eligibility.map((e) => (
              <div key={e.track} className="rounded-2xl bg-cream/5 p-5">
                <p className="text-sm font-semibold text-sage">{e.track}</p>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">{e.requirement}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
