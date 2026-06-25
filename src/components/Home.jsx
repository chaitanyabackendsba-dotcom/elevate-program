import Hero from './Hero'
import About from './About'
import Courses from './Courses'
import HowItWorks from './HowItWorks'
import Videos from './Videos'
import Contact from './Contact'

// The marketing homepage: all sections that previously lived in App.
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <HowItWorks />
      <Videos />
      <Contact />
    </>
  )
}
