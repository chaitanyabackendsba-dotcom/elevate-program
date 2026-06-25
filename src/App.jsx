import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import BookOnline from './components/BookOnline'

// Reset scroll to the top on route change, but leave in-page
// anchor navigation (e.g. /#courses) to the browser.
// Note: /webinar is a standalone static page (webinar/index.html),
// served outside the React app, so it has no route here.
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-online" element={<BookOnline />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
