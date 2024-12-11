import React from 'react'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import TechStack from './components/TechStack'
// import CarScroll from './components/CarScroll'
import ScrollImageSequence from './components/CarScroll'
import Testgsap from './components/Testgsap'
import Projects from './components/Projects'
import Grid from './components/Grid'
import Experience from './components/Experience'
import OffGrid from './components/OffGrid'
import Bye from './components/Bye'
import Footer from './components/Footer'
import Contact from './components/Contact'
import ScrollUp from './components/ScrollUp'


function App() {


  return (
    <div className=' grad-bg min-h-[100vh] '>
      <Navbar />
      <div className='w-full place-content-center flex flex-col' id='section1'>
        <Introduction />
      </div>
      <div className='backdrop-blur-lg backdrop-hue-rotate-60'>
        <div id='section2'>
          <TechStack />
        </div>
        <div id='exp'>
          <Experience />
        </div>
      </div>
      <div id='section3' className='pt-30  bg-black'>
        <Testgsap />
      </div>
      <div id='proj'>
        <Projects />
      </div>
      <div id='3d' className='bg-purple-500/30'>
        <Grid />
      </div>
      <div className='bg-white'>
        <OffGrid/>
      </div>
      <div>
        <Bye/>
      </div>
      <div id='contact'>
        <Footer/>
      </div>
      <div className='fixed -right-12 md:top-48 xs:top-60 z-50'>
        <Contact/>
      </div>
      <div onClick={()=>{window.scrollTo(0, 0)}} className='fixed bottom-4 md:right-4 xs:right-2 md:scale-75 xs:scale-50 '>
        <ScrollUp/>
      </div>
    </div>
  )
}

export default App