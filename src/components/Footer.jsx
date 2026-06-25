import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram } from 'lucide-react'
import { brand, contact, navLinks } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-forest/10 bg-cream">
      <div className="section-shell py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src={brand.logo} alt="The Elevate Program logo" className="h-11 w-auto" />
              <span className="font-serif text-xl font-semibold text-forest">The Elevate Program</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-forest/70">{brand.tagline}.</p>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest/15 text-forest transition-colors hover:bg-forest hover:text-cream"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-forest/75 transition-colors hover:text-forest">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-forest/75">
              <li>
                <a href={contact.phoneHref} className="flex items-start gap-2.5 transition-colors hover:text-forest">
                  <Phone size={16} className="mt-0.5 shrink-0 text-leaf" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={contact.emailHref} className="flex items-start gap-2.5 transition-colors hover:text-forest">
                  <Mail size={16} className="mt-0.5 shrink-0 text-leaf" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.mapHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2.5 transition-colors hover:text-forest"
                >
                  <MapPin size={16} className="mt-0.5 shrink-0 text-leaf" />
                  {contact.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-forest/10 pt-6 text-xs text-forest/55 sm:flex-row">
          <p>© {year} The Elevate Program. All rights reserved.</p>
          <p>Crafting the next generation of cosmetic artists.</p>
        </div>
      </div>
    </footer>
  )
}
