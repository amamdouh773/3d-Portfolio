import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import WorkExperience from './sections/WorkExperience'

const App = () => {
  return (
    <main className='mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <WorkExperience /> */}
      <Contact />
      <Footer />
    </main>
  )
}

export default App