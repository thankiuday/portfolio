import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
const App = () => {
  return (
    <div className='overflow-y-hidden text-neutral-300 antialiased selection:bg-slate-500 selection:text-cyan-50'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div class=" bg-black absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
      </div>
      <div className='container mx-auto px-8'>
        <NavBar />
        <Hero />
        <AboutMe />
        <Technologies/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App