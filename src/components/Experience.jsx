import React from 'react'

function Experience() {
  return (
    <div className='min-h-screen py-40 text-yellow-300  bg-linemesh drop-shadow-sm'>
      <div className='md:p-4 bg-yellow-300 w-8 h-8 rounded-full m-auto'></div>
      <div className='flex h-[100%]'>
        <div className='border-r-2 border-yellow-300 w-[50%] h-auto   flex flex-col justify-around items-end border-dashed'>
          <div className='text-right m-5'>
            <h1 className='text-2xl font-semibold'>Bsc Computer Science</h1>
            <h2>MMCC</h2>
            <p>8.03 CGPA</p>
            <p>completed -june 2023</p>
          </div>

          <div className='text-right m-5'>
            <h1 className='text-2xl font-semibold'>Master of Computer Applications</h1>
            <h2>Sinhgad Institute of Management</h2>
            <p>7.86 CGPA</p>
            <p>pursuing -August 2023-2025</p>
          </div>
        </div>
        <div className='border-l-2 max-w-[50%] border-yellow-300 border-dashed flex flex-col justify-around items-start gap-10'>
          <div className='text-left m-5'>
            <h1 className='text-2xl font-semibold'>Freelancing 3D artist</h1>
            <h2>Sketchfab</h2>
            <p>started -October 2021</p>
          </div>

          <div className='text-left m-5'>
            <h1 className='text-2xl font-semibold'>Freelancing Web Developer & Designer</h1>
            <h2>TechTorch</h2>
            <p>started -January 2024</p>
          </div>

          <div className='text-left m-5 '>
            <h1 className='text-2xl font-semibold '>React Native Intern </h1>
            <h2>ANALYZED</h2>
            <p>March 2024 - May 2024 (3 months)</p>
          </div>

          
          <div className='text-left m-5'>
            <h1 className='text-2xl font-semibold'>MERN developer & UI Designer  </h1>
            <h2>WebWide IT Solutions LLp</h2>
            <p> November 2024- Present</p>
          </div>
        </div>
      </div>
      <div className='md:p-4 bg-yellow-300 w-8 h-8 rounded-full m-auto'></div>
    </div>
  )
}

export default Experience