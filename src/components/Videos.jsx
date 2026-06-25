import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from './anim'
import { videos } from '../data/content'

export default function Videos() {
  return (
    <section id="videos" className="relative bg-forest py-24 text-cream sm:py-32">
      <div className="section-shell">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-2xl"
        >
          <motion.span variants={fadeUp} className="eyebrow text-sage">
            Inside the program
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
          >
            Our videos
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-cream/75">
            Watch demonstrations, technique walkthroughs and moments from the training floor.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {videos.map((id) => (
            <motion.div
              key={id}
              variants={fadeUp}
              className="group overflow-hidden rounded-2xl border border-cream/10 bg-black/30 shadow-xl shadow-black/30"
            >
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${id}`}
                  title="The Elevate Program video"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
