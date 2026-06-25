# The Elevate Program — React Website

A modern, single-page React site for **The Elevate Program**, a cosmetic surgery and hair transplant training program led by Dr. Ashutosh Misra in New Delhi. This rebuilds the existing Wix site in React with a richer animated hero and smoother scroll-triggered reveals, while keeping the same dark-green and cream brand identity.

## Tech stack

- **Vite 5 + React 18** (single-page app)
- **Tailwind CSS 3.4** with a custom brand theme
- **Framer Motion 11** for hero and scroll animations
- **lucide-react** for icons
- Google Fonts: **Fraunces** (headings) and **Manrope** (body)

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build into /dist
npm run preview  # preview the production build locally
```

## Project structure

```
index.html              SEO meta, fonts, JSON-LD, app mount point
src/
  main.jsx              React entry
  index.css             Tailwind layers + brand tokens + helpers
  App.jsx               Page composition (section order)
  data/content.js       Single source of truth for all copy/courses/contact
  components/
    anim.js             Shared Framer Motion variants
    Navbar.jsx          Sticky, scroll-aware nav + mobile menu
    Hero.jsx            Animated hero (word reveal, floating images, blobs)
    About.jsx           About the program + founder card
    Courses.jsx         Six course cards + eligibility
    HowItWorks.jsx      Four-step process
    Videos.jsx          YouTube embeds
    Contact.jsx         Contact details + enquiry form
    Footer.jsx          Footer with links and contact
```

## Editing content

All copy, course details, contact info and image URLs live in **`src/data/content.js`**. Update that one file to change text across the whole site.

## A note on images

Images currently point to the existing brand assets hosted on the Wix CDN
(`https://static.wixstatic.com/...`) so the site renders complete out of the box.
For production you should **self-host** these:

1. Download the images and place them in a `public/images/` folder.
2. Replace the `CDN` URLs in `src/data/content.js` (and the logo/favicon in `index.html`)
   with local paths like `/images/hair-transplant.jpg`.

This removes the dependency on Wix and improves load reliability.

## Contact form

The enquiry form has no backend; on submit it opens the visitor's email client
with a pre-filled message to the program inbox. To capture submissions directly,
connect a form service (Formspree, Web3Forms, a serverless function, etc.) inside
`src/components/Contact.jsx`.

## Fonts

The site uses **Manrope** as a free substitute for the original site's proprietary
Avenir. Swap the font links in `index.html` and the `fontFamily` in
`tailwind.config.js` if you license Avenir.
