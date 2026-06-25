// ============================================================
// The Elevate Program — single source of truth for site content
// Edit copy, courses, contact details and images here.
// Images currently point to the existing brand assets (Wix CDN).
// Replace these URLs with self-hosted images in /public when ready.
// ============================================================

// Images are self-hosted from /public/images (no Wix dependency).
// Run `npm run assets` once to download them off the old Wix CDN, then
// commit the public/images folder. See DEPLOYMENT.md.
const CDN = '/images/'

export const brand = {
  name: 'The Elevate Program',
  tagline: 'Crafting the next generation of cosmetic artists',
  logo: `${CDN}0513f9_7933e93c7a4e4005b30523ca2fb0300d~mv2.png`,
  // Internal in-app route for the booking page (handled by react-router).
  bookingPath: '/book-online',
}

export const contact = {
  phone: '+91 9821172740',
  phoneHref: 'tel:+919821172740',
  whatsappHref: 'https://wa.me/919821172740',
  email: 'elevateprogramdelhi@gmail.com',
  emailHref: 'mailto:elevateprogramdelhi@gmail.com',
  address: 'Beau Monde Clinics, E-84, GK-1, New Delhi – 110048',
  mapHref: 'https://maps.app.goo.gl/yZPGE4HP9kUuL6Z19',
  instagram: 'https://www.instagram.com/dr.ashutoshmisra',
  instagramHandle: '@dr.ashutoshmisra',
}

// Form handling.
// The Contact and Book Online forms POST to a Google Apps Script Web App
// that writes each submission to the linked Google Sheet (tabs
// "contact form" and "book online"). The deployed Web App URL is below.
// If this is ever blank, the forms fall back to opening a pre-filled email.
export const forms = {
  endpoint: 'https://script.google.com/macros/s/AKfycbzQwjr_xp2Kv86m-Mj2Pxuvv4Lb0UkmQq6swpNeNuXC_4hbD47qVJUWuQLVguTuhguB/exec',
}

// Section anchors are prefixed with "/" so they also work from the
// /book-online route (a plain anchor sends the browser back to the
// homepage and scrolls to the section).
export const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Courses', href: '/#courses' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Videos', href: '/#videos' },
  // Standalone static page (webinar/index.html), so this is a full-page link.
  { label: 'Webinar', href: '/webinar/' },
  { label: 'Contact', href: '/#contact' },
]

export const hero = {
  kicker: 'Crafting the next generation of cosmetic artists',
  headlineLines: ['Elevate', 'your skills'],
  subline:
    'Specialized, hands-on training in cosmetic surgery and hair transplant techniques — led by one of India’s most experienced plastic surgeons, Dr. Ashutosh Misra, in New Delhi.',
  primaryCta: 'Explore Courses',
  secondaryCta: 'Talk to Us',
  images: [
    `${CDN}0513f9_6f11572364b74bc2ba09b99986a274bb~mv2.png`,
    `${CDN}0513f9_44b4919c6a644e93a73282426895016d~mv2.jpg`,
    `${CDN}0513f9_0a80607d87c04221b8baaa9d5b1347fc~mv2.png`,
  ],
  stats: [
    { value: '6', label: 'Specialised tracks' },
    { value: '1:1', label: 'Hands-on mentorship' },
    { value: 'Small', label: 'Batch sizes' },
  ],
}

export const about = {
  eyebrow: 'About the program',
  title: 'About the Elevate Program',
  image: `${CDN}0513f9_64ab0c98903c475c8468fb6ee35336f4~mv2.jpeg`,
  paragraphs: [
    'The Elevate Program is an initiative designed exclusively for plastic surgeons and dermatologists who want to take their hair transplant and cosmetic surgery skills to the next level.',
    'The goal is to give you high-quality training from one of the most experienced and trusted names in the field, Dr. Ashutosh Misra. Whether you are just starting your aesthetic surgery journey or refining advanced techniques, Elevate offers the mentorship and hands-on exposure that transforms potential into expertise.',
    'We cover basic and advanced hair transplant techniques, facial rejuvenation, facial surgical aesthetics, body contouring, and pre- and post-operative care — with each session combining structured theory, live demonstrations, and intensive hands-on practice.',
    'By the end of this program, you will have the skills and judgment needed to excel in the competitive field of cosmetic surgery.',
  ],
}

export const courses = [
  {
    n: '01',
    title: 'Hair Transplant',
    blurb: 'Basic to advanced FUE & FUT techniques, graft handling, and natural hairline design.',
    image: `${CDN}0513f9_7686d9c8e35441febbf2e30132244444~mv2.jpg`,
  },
  {
    n: '02',
    title: 'Non-surgical Aesthetics',
    blurb: 'Injectables, energy-based devices and facial rejuvenation protocols that scale your practice.',
    image: `${CDN}0513f9_a3ea2972d5df4e82865689cadbf0f541~mv2.jpg`,
  },
  {
    n: '03',
    title: 'Facial Aesthetic Surgeries',
    blurb: 'Surgical facial rejuvenation, lifts and contouring with live demonstrations.',
    image: `${CDN}0513f9_c31bdbf79c034869aa8704f2a34f8028~mv2.jpg`,
  },
  {
    n: '04',
    title: 'Breast Aesthetic Surgeries',
    blurb: 'Augmentation, reduction and reshaping fundamentals with hands-on practice.',
    image: `${CDN}0513f9_19b9c923851a4abd9c07d821cec46a6c~mv2.jpg`,
  },
  {
    n: '05',
    title: 'Liposuction & Body Contouring',
    blurb: 'Modern body sculpting approaches, safety and pre- & post-operative care.',
    image: `${CDN}0513f9_d939f2316f984c148ed7e72c9da3bf62~mv2.jpeg`,
  },
  {
    n: '06',
    title: 'Rhinoplasty',
    blurb: 'Structural and aesthetic nose surgery techniques, planning and execution.',
    image: `${CDN}0513f9_41b54252045a40afa238f795626c07eb~mv2.jpg`,
  },
]

export const eligibility = [
  {
    track: 'Hair Transplant & Non-surgical Aesthetics',
    requirement:
      'M.S., M.Ch., DNB Plastic Surgeon and M.D., DNB Dermatologist',
  },
  {
    track: 'All other courses',
    requirement: 'M.S., M.Ch., DNB Plastic Surgeon only',
  },
]

export const howItWorks = [
  {
    title: 'Small Batch Learning',
    desc: 'Focused training with personalized guidance, so every participant gets real attention.',
  },
  {
    title: 'Hands-on Training',
    desc: 'Practical skill-building in live plastic surgery techniques, not just theory.',
  },
  {
    title: 'Long-term Mentorship',
    desc: 'Continuous support during and after the course as you apply what you’ve learned.',
  },
  {
    title: 'Gold Standard Curriculum',
    desc: 'Monitored progress and a structured path designed to ensure true mastery.',
  },
]

// YouTube video IDs shown in the "Our videos" grid.
// cLLfornq_Hg was age-restricted (only playable on youtube.com, so it failed
// to embed) and has been replaced with j0MibFB3Y0k.
export const videos = ['lgtR2eXAQYk', 'j0MibFB3Y0k', 'f0e0K3_UYSY', 'k3zhueZUlsE']

export const founder = {
  name: 'Dr. Ashutosh Misra',
  role: 'Lead Trainer & Plastic Surgeon',
  bio: 'One of the most experienced and trusted names in cosmetic and plastic surgery in India, mentoring surgeons through structured theory, live demonstrations and intensive hands-on practice.',
}
