import React from 'react'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import TechStack from './components/TechStack'

function App() {
  return (
    <div className=' grad-bg min-h-[100vh] '>
    <Navbar/>
    <div className='w-full place-content-center flex flex-col'>
      <Introduction/>

    </div>
    <div>
      <TechStack/>
    </div>
    </div>
  )
}

export default App