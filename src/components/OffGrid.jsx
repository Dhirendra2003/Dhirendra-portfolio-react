import React from 'react'
import img from '../assets/quotefont.png'
import swirl from '../assets/swirl.jpg'

function OffGrid() {
  return (
    <div className='min-h-screen xs:py-44 flex flex-col place-content-center'>
      <div className='w-[50%]  m-auto flex flex-col items-center   gap-4'>
        <div className='flex gap-4 xs:flex-wrap md:flex-nowrap xs:place-content-center'>
          <div className='bg-star-blue text-white font-semibold  p-3'>
            <p className='text-2xl'>
              A passionate developer combining <br /> creativity and technical expertise <br /> to build dynamic and user-friendly digital experiences.
            </p>
          </div>
          <div className='flex flex-col '>
            <img src={swirl} className='w-24 rotate-90 m-auto ' />
            <img src={img} className='w-60' />
          </div>
          <div className='text-white bg-neutral-700 bg-star p-3'>
            <p className='text-xl font-semibold'>  Developed web applications <br /> integrating dynamic content with REST APIs and MongoDB. <br />
              Creative Solutions: UI/UX prototyping, <br /> workflow automation, and cloud integrations
            </p>
          </div>
        </div>
        <div className='flex gap-4 xs:flex-wrap md:flex-nowrap'>
          <div className='bg-gradient-to-tr from-fuchsia-500 to bg-purple-800 text-white text-2xl p-3 font-semibold'>
            "Coding isn't just solving problems; it's building solutions for tomorrow's challenges." <br />
            "Innovation thrives on curiosity and persistence."
<br />
            Through design and code, I create experiences that connect people and ideas.
          </div>
          <div className='bg-gradient-to-b from-fuchsia-500 to-orange-400 text-white text-xl p-3 font-semibold' >
            <span className='text-2xl'>#Interests</span> <br />
            Drawing <br />
            Calisthenics <br />
            Video Editing <br />

            <span className='text-2xl'>#Achievements</span>
            MIT Hackathon <br />
            Sports comp winner


          </div>
        </div>
      </div>
      <a href="https://drive.google.com/file/d/16Vm0WCdQxhWW281Hc74b4HgZQWyCvSMl/view?usp=sharing" target='black' className='bg-neutral-800 text-yellow-500  font-bold w-min py-2 px-4  rounded-xl text-nowrap m-auto my-10 hover:scale-105 transition-all duration-200 ease-in-out'>
      <button >Download My Resume</button>
      </a>
    </div>
  )
}

export default OffGrid
