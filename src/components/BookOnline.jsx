import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  CheckCircle2,
  CalendarCheck,
  ArrowLeft,
  Send,
} from 'lucide-react'
import { fadeUp, stagger, viewport } from './anim'
import { contact, courses, eligibility, forms } from '../data/content'

const QUALIFICATIONS = [
  'MS / MCh / DNB – Plastic Surgeon',
  'MD / DNB – Dermatologist',
  'Other',
]

const STEPS = [
  {
    icon: Send,
    title: 'Send your application',
    desc: 'Fill the form and we receive your details by email instantly.',
  },
  {
    icon: Phone,
    title: 'We reach out',
    desc: 'Our team calls you within one business day to confirm eligibility and dates.',
  },
  {
    icon: CalendarCheck,
    title: 'Reserve your seat',
    desc: 'Once confirmed, we hold your place in the next available batch.',
  },
]

export default function BookOnline() {
  // Pre-select the track when arriving from a course card (/book-online?course=...).
  const [searchParams] = useSearchParams()
  const presetCourse =
    courses.find((c) => c.title === searchParams.get('course'))?.title || ''

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    qualification: '',
    course: presetCourse,
    batch: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    document.title = 'Book Online | The Elevate Program'
    return () => {
      document.title =
        'The Elevate Program | Cosmetic Surgery & Hair Transplant Training in India | Delhi'
    }
  }, [])

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  // Fallback used when the Sheets endpoint is not configured or a request
  // fails: compose a pre-filled email to the program inbox.
  const sendViaEmail = () => {
    const subject = encodeURIComponent('Booking application – The Elevate Program')
    const body = encodeURIComponent(
      'New booking application from the website\n\n' +
        `Name: ${form.firstName} ${form.lastName}\n` +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone}\n` +
        `City: ${form.city || '-'}\n` +
        `Qualification: ${form.qualification}\n` +
        `Course track: ${form.course}\n` +
        `Preferred batch: ${form.batch || '-'}\n\n` +
        `Notes:\n${form.message || '-'}\n`,
    )
    window.location.href = `${contact.emailHref}?subject=${subject}&body=${body}`
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!forms.endpoint) {
      sendViaEmail()
      setSubmitted(true)
      return
    }
    setSending(true)
    try {
      // no-cors: fire the request to the Apps Script web app and treat a
      // resolved promise as success (the response is not readable).
      await fetch(forms.endpoint, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams({
          formType: 'booking',
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          city: form.city,
          qualification: form.qualification,
          course: form.course,
          batch: form.batch,
          message: form.message,
        }),
      })
      setSubmitted(true)
    } catch (err) {
      // Network failure: fall back to a pre-filled email.
      sendViaEmail()
      setSubmitted(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* Dark hero banner (sits under the fixed navbar) */}
      <section className="relative overflow-hidden bg-forest pt-32 pb-16 text-cream sm:pt-36 sm:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(70% 60% at 50% 0%, rgba(212,233,207,0.10), transparent 70%)',
          }}
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="section-shell relative"
        >
          <motion.div variants={fadeUp}>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-cream/70 transition-colors hover:text-cream"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>
          </motion.div>
          <motion.span variants={fadeUp} className="eyebrow mt-6 text-sage">
            Book your seat
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
          >
            Reserve your place in the next batch
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            Share a few details and our team will confirm eligibility, upcoming dates and the right
            track for your practice. Seats are limited to keep batches small and hands-on.
          </motion.p>
        </motion.div>
      </section>

      {/* Form + sidebar */}
      <section className="relative bg-cream py-20 sm:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
            {submitted ? (
              <div className="rounded-3xl border border-leaf/30 bg-forest p-8 text-cream shadow-xl shadow-forest/10 sm:p-10">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sage/20 text-sage">
                  <CheckCircle2 size={28} />
                </span>
                <h2 className="mt-6 font-serif text-2xl font-semibold">Application received</h2>
                <p className="mt-3 text-sm leading-relaxed text-cream/80">
                  Thank you. We have your details and our team will reach out within one business day
                  to confirm eligibility and dates. For anything urgent, message us on WhatsApp.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className="btn-primary bg-sage text-forest hover:bg-cream">
                    <MessageCircle size={18} />
                    Message on WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:border-cream hover:bg-cream/10"
                  >
                    Edit my details
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="rounded-3xl border border-forest/10 bg-forest p-7 text-cream shadow-xl shadow-forest/10 sm:p-9"
              >
                <h2 className="font-serif text-2xl font-semibold">Application details</h2>
                <p className="mt-2 text-sm text-cream/70">Fields marked with * are required.</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="First name" required value={form.firstName} onChange={update('firstName')} />
                  <Field label="Last name" required value={form.lastName} onChange={update('lastName')} />
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Field label="Email" type="email" required value={form.email} onChange={update('email')} />
                  <Field label="Phone" type="tel" required value={form.phone} onChange={update('phone')} />
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Field label="City" value={form.city} onChange={update('city')} />
                  <Select label="Qualification" required value={form.qualification} onChange={update('qualification')}>
                    <option value="" disabled>
                      Select your qualification
                    </option>
                    {QUALIFICATIONS.map((q) => (
                      <option key={q} value={q} className="text-forest">
                        {q}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Select label="Course track" required value={form.course} onChange={update('course')}>
                    <option value="" disabled>
                      Choose a course
                    </option>
                    {courses.map((c) => (
                      <option key={c.title} value={c.title} className="text-forest">
                        {c.title}
                      </option>
                    ))}
                  </Select>
                  <Field
                    label="Preferred batch / month"
                    placeholder="e.g. August 2026"
                    value={form.batch}
                    onChange={update('batch')}
                  />
                </div>
                <div className="mt-4">
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-cream/70">
                    Anything else we should know?
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    className="w-full resize-none rounded-xl border border-cream/15 bg-cream/5 px-4 py-3 text-sm text-cream placeholder-cream/40 outline-none transition focus:border-sage focus:bg-cream/10"
                    placeholder="Your experience level, questions about a track, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sage px-7 py-3.5 text-sm font-semibold text-forest transition-all duration-300 hover:bg-cream active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Send size={18} />
                  {sending ? 'Sending...' : 'Submit application'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="lg:pt-2"
          >
            <motion.span variants={fadeUp} className="eyebrow">
              What happens next
            </motion.span>
            <motion.div variants={fadeUp} className="mt-5 space-y-4">
              {STEPS.map((s, i) => (
                <div key={s.title} className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage/40 text-forest">
                    <s.icon size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-forest">
                      {i + 1}. {s.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-forest/70">{s.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 rounded-2xl border border-forest/10 bg-white/50 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf">Eligibility</p>
              <ul className="mt-3 space-y-2.5">
                {eligibility.map((e) => (
                  <li key={e.track} className="flex gap-2.5 text-sm text-forest/80">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-leaf" />
                    <span>
                      <span className="font-medium text-forest">{e.track}:</span> {e.requirement}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf">
                Prefer to talk first?
              </p>
              <a href={contact.phoneHref} className="flex items-center gap-3 text-sm font-medium text-forest transition-colors hover:text-leaf">
                <Phone size={18} className="text-leaf" />
                {contact.phone}
              </a>
              <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-medium text-forest transition-colors hover:text-leaf">
                <MessageCircle size={18} className="text-leaf" />
                WhatsApp us
              </a>
              <a href={contact.emailHref} className="flex items-center gap-3 text-sm font-medium text-forest transition-colors hover:text-leaf">
                <Mail size={18} className="text-leaf" />
                {contact.email}
              </a>
              <a href={contact.mapHref} target="_blank" rel="noreferrer" className="flex items-start gap-3 text-sm font-medium text-forest transition-colors hover:text-leaf">
                <MapPin size={18} className="mt-0.5 shrink-0 text-leaf" />
                {contact.address}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function Field({ label, required, type = 'text', value, onChange, placeholder }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-cream/70">
        {label} {required && <span className="text-sage">*</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-cream/15 bg-cream/5 px-4 py-3 text-sm text-cream placeholder-cream/40 outline-none transition focus:border-sage focus:bg-cream/10"
      />
    </label>
  )
}

function Select({ label, required, value, onChange, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-cream/70">
        {label} {required && <span className="text-sage">*</span>}
      </span>
      <select
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-cream/15 bg-cream/5 px-4 py-3 text-sm text-cream outline-none transition focus:border-sage focus:bg-cream/10"
      >
        {children}
      </select>
    </label>
  )
}
