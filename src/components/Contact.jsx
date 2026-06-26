import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, MessageCircle, Send, CheckCircle2 } from 'lucide-react'
import { fadeUp, stagger, viewport } from './anim'
import { contact, forms } from '../data/content'

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  // Fallback used when the Sheets endpoint is not configured or a request fails:
  // compose a pre-filled email to the program inbox.
  const sendViaEmail = () => {
    const subject = encodeURIComponent('Enquiry from The Elevate Program website')
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nPhone: ${form.phone}\n\n${form.message}`,
    )
    window.location.href = `${contact.emailHref}?subject=${subject}&body=${body}`
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!forms.endpoint) {
      sendViaEmail()
      return
    }
    setStatus('sending')
    try {
      // no-cors: the Apps Script web app does not return CORS headers, so we
      // fire the request and treat a resolved promise as success.
      await fetch(forms.endpoint, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams({
          formType: 'contact',
          firstName: form.firstName,
          lastName: form.lastName,
          phone: form.phone,
          message: form.message,
        }),
      })
      setStatus('sent')
      setForm({ firstName: '', lastName: '', phone: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  const details = [
    { icon: Phone, label: 'Call', value: contact.phone, href: contact.phoneHref },
    { icon: MessageCircle, label: 'WhatsApp', value: contact.phone, href: contact.whatsappHref },
    { icon: Mail, label: 'Email', value: contact.email, href: contact.emailHref },
    { icon: MapPin, label: 'Visit', value: contact.address, href: contact.mapHref },
    { icon: Instagram, label: 'Instagram', value: contact.instagramHandle, href: contact.instagram },
  ]

  return (
    <section id="contact" className="relative bg-cream py-24 sm:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Details */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="min-w-0"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            Get in touch
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-forest sm:text-5xl"
          >
            Ready to elevate your skills?
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-md text-base leading-relaxed text-forest/70">
            Reach out to learn about upcoming batches, eligibility and dates. We will help you find the
            right track for your practice.
          </motion.p>

          <div className="mt-8 space-y-3">
            {details.map((d) => (
              <motion.a
                key={d.label}
                variants={fadeUp}
                href={d.href}
                target={d.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-forest/10 bg-white p-4 shadow-[0_8px_24px_-16px_rgba(8,67,30,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-leaf/40 hover:shadow-[0_14px_30px_-16px_rgba(8,67,30,0.24)]"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage/40 text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
                  <d.icon size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wide text-leaf">{d.label}</span>
                  <span className="block truncate text-sm font-medium text-forest">{d.value}</span>
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Form / success */}
        {status === 'sent' ? (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-col justify-center rounded-3xl border border-leaf/30 bg-forest p-8 text-cream shadow-xl shadow-forest/10 sm:p-10"
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sage/20 text-sage">
              <CheckCircle2 size={28} />
            </span>
            <h3 className="mt-6 font-serif text-2xl font-semibold">Thank you, we have your message</h3>
            <p className="mt-3 text-sm leading-relaxed text-cream/80">
              Our team will get back to you within one business day. For anything urgent, message us
              on WhatsApp.
            </p>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-sage px-7 py-3.5 text-sm font-semibold text-forest transition-all duration-300 hover:bg-cream"
            >
              <MessageCircle size={18} />
              Message on WhatsApp
            </a>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={onSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="min-w-0 rounded-3xl border border-forest/10 bg-forest p-7 text-cream shadow-xl shadow-forest/10 sm:p-9"
          >
            <h3 className="font-serif text-2xl font-semibold">Send us a message</h3>
            <p className="mt-2 text-sm text-cream/70">We usually respond within one business day.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="First name" required value={form.firstName} onChange={update('firstName')} />
              <Field label="Last name" required value={form.lastName} onChange={update('lastName')} />
            </div>
            <div className="mt-4">
              <Field label="Phone" type="tel" value={form.phone} onChange={update('phone')} />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-cream/70">
                How can we help you? <span className="text-sage">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={update('message')}
                className="w-full resize-none rounded-xl border border-cream/15 bg-cream/5 px-4 py-3 text-sm text-cream placeholder-cream/40 outline-none transition focus:border-sage focus:bg-cream/10"
                placeholder="Tell us which course you are interested in"
              />
            </div>

            {status === 'error' && (
              <p className="mt-4 text-sm text-sage">
                Something went wrong sending your message.{' '}
                <button type="button" onClick={sendViaEmail} className="font-semibold underline">
                  Send by email instead
                </button>
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sage px-7 py-3.5 text-sm font-semibold text-forest transition-all duration-300 hover:bg-cream active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Send size={18} />
              {status === 'sending' ? 'Sending...' : 'Submit'}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  )
}

function Field({ label, required, type = 'text', value, onChange }) {
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
        className="w-full rounded-xl border border-cream/15 bg-cream/5 px-4 py-3 text-sm text-cream placeholder-cream/40 outline-none transition focus:border-sage focus:bg-cream/10"
      />
    </label>
  )
}
