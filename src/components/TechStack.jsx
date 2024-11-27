import React from 'react'
import heroimg from '../assets/hero1.png'
import img1 from "../assets/techstackicons/1.png"
import img2 from "../assets/techstackicons/2.png"
import img3 from "../assets/techstackicons/3.png"
import img4 from "../assets/techstackicons/4.png"
import img5 from "../assets/techstackicons/5.png"
import img6 from "../assets/techstackicons/6.png"
import img7 from "../assets/techstackicons/7.png"
import img8 from "../assets/techstackicons/8.png"
import img9 from "../assets/techstackicons/9.png"
import img10 from "../assets/techstackicons/10.png"
import img11 from "../assets/techstackicons/11.png"
import img12 from "../assets/techstackicons/12.png"
import img13 from "../assets/techstackicons/13.png"
import img14 from "../assets/techstackicons/14.png"
import img15 from "../assets/techstackicons/15.png"
import img16 from "../assets/techstackicons/16.png"
import img17 from "../assets/techstackicons/17.png"

import img18 from "../assets/techstackicons/18.png"

// const images=require.context('../assets/techstackicons')
const imgArray = [img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18
]
const languageDiv = (src, ind) => {
  return (
    <div key={ind} className='flex place-content-center'>
      <img src={src} className='lang-img transition-all ease-in-out duration-500 h-32 object-contain  hover:bg-white drop-shadow-lg p-3 rounded-full hover:scale-110' alt={"tech stack"} />
    </div>
  )
}
function TechStack() {
  return (
    <div className='w-full flex py-40 place-content-center'>
      <div className='flex p-10 gap-10 justify-center flex-col place-content-center '>
        <div className='flex place-content-center flex-wrap items-center gap-8 justify-center  p-10'>
          <div className='flex gap-6 flex-col m-auto'>
            <h1 className='drop-shadow-xl underline text-6xl font-bold text-white'>I'm <br />Dhirendra <br />
              Shinde</h1>
            <p className='text-white text-right  font-semibold text-xl'>
              <span className='bg-cyan-500 p-2'>A full stack Dev </span> <br /> 
              <span className='bg-cyan-600 p-2'>proficient in MERN ,</span> <br />
              <span className='bg-cyan-700 p-2'>React native & UI Designer </span> <br />
              <span className='bg-cyan-800 p-2'>3D Artist </span><br />
              <span className='bg-cyan-900 p-2'>Data Analyst </span><br />
            </p>
          </div>
          <img src={heroimg} alt="" className='h-[500px] drop-shadow-2xl w-[500px] m-auto' />
        </div>
        <div className='grid grid-cols-6 gap-2 m-auto'>
          {imgArray.map((img, index) => languageDiv(img, index))}
        </div>

      </div>
    </div>
  )
}

export default TechStack;