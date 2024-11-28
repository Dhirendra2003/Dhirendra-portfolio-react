import React from 'react'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import TechStack from './components/TechStack'
// import CarScroll from './components/CarScroll'
import ScrollImageSequence from './components/CarScroll'
import Testgsap from './components/Testgsap'
import Projects from './components/Projects'

function App() {


  return (
    <div className=' grad-bg min-h-[100vh] '>
      <Navbar />
      <div className='w-full place-content-center flex flex-col'>
        <Introduction />

      </div>
      <div>
        <TechStack />
      </div>

      <div className='pt-30 bg-black'>
        <Testgsap />
      </div>

      <Projects/>
    </div>
  )
}

export default App