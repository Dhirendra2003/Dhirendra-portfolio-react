import React from 'react'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import TechStack from './components/TechStack'
// import CarScroll from './components/CarScroll'
import ScrollImageSequence from './components/CarScroll'
import Testgsap from './components/Testgsap'
import Projects from './components/Projects'
import Grid from './components/Grid'


function App() {


  return (
    <div className=' grad-bg min-h-[100vh] '>
      <Navbar />
      <div className='w-full place-content-center flex flex-col' id='section1'>
        <Introduction />
      </div>

      <div id='section2'>
        <TechStack />
      </div>

      <div id='section3' className='pt-30  bg-black'>
        <Testgsap />
      </div>
      <div  id='section4'>
        <Projects />
      </div>
      <div className='bg-white'>
        <Grid />
      </div>
    </div>
  )
}

export default App