import img from '../assets/quotefont.webp'
import swirl from '../assets/swirl.webp'

function OffGrid() {
  return (
    <div className='min-h-screen xs:py-44 flex flex-col place-content-center'>
      <div className='w-[50%]  m-auto flex flex-col items-center   gap-4'>
        <div className='flex gap-4 xs:flex-wrap md:flex-nowrap xs:place-content-center '>
          <div className='bg-star-blue text-white font-semibold  p-3 hover:scale-110 transition-all duration-500 ease-in-out hover:z-40 hover:shadow-xl '>
            <p className='md:text-2xl xs:text-xl'>
              A passionate developer combining <br /> creativity and technical expertise <br /> to build dynamic and user-friendly digital experiences.
            </p>
          </div>
          <div className='flex flex-col '>
            <img src={swirl} className='w-24 rotate-90 m-auto  hover:scale-110 transition-all duration-500 ease-in-out hover:z-40 ' />
            <img src={img} className='w-60 hover:scale-110 transition-all duration-500 ease-in-out hover:z-40 ' />
          </div>
          <div className='text-white bg-neutral-700 bg-star p-3 hover:scale-110 transition-all duration-500 ease-in-out hover:z-40 hover:shadow-xl '>
            <p className='text-xl font-semibold'>  Developed web applications <br /> integrating dynamic content with REST APIs and MongoDB. <br />
              Creative Solutions: UI/UX prototyping, <br /> workflow automation, and cloud integrations
            </p>
          </div>
        </div>
        <div className='flex gap-4 xs:flex-wrap md:flex-nowrap'>
          <div className='bg-gradient-to-tr from-fuchsia-500 to bg-purple-800 text-white md:text-2xl xs:text-xl p-3 font-semibold hover:scale-110 transition-all duration-500 ease-in-out hover:z-40 hover:shadow-xl '>
            "Coding isn't just solving problems; it's building solutions for tomorrow's challenges." <br />
            "Innovation thrives on curiosity and persistence."
<br />
            Through design and code, I create experiences that connect people and ideas.
          </div>
          <div className='bg-gradient-to-b from-fuchsia-500 to-orange-400 text-white text-xl p-3 font-semibold hover:scale-110 transition-all duration-500 ease-in-out hover:z-40 hover:shadow-xl ' >
            <span className='md:text-2xl xs:text-xl'>#Interests</span> <br />
            Drawing <br />
            Calisthenics <br />
            Video Editing <br />

            <span className='md:text-2xl xs:text-xl'>#Achievements</span>
            MIT Hackathon <br />
            Sports comp winner


          </div>
        </div>
      </div>
     

      <a href="https://drive.google.com/file/d/16Vm0WCdQxhWW281Hc74b4HgZQWyCvSMl/view?usp=sharing" target='blank' className="relative  items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full border-2  md:scale-100 xs:scale-75  group w-min text-nowrap m-auto mt-20">
<span className="w-32 h-32  translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
<span className="absolute top-0 left-0 w-[110%] h-48 -mt-1 transition-all duration-500 ease-in-out  -translate-x-80 -translate-y-24 bg-gradient-to-r from-sky-500 to-purple-500 opacity-100 group-hover:-translate-x-2"></span>
<span className="relative w-full text-left text-black transition-colors duration-500 ease-in-out group-hover:text-white font-semibold md:text-2xl xs:text-xl">Download My Resume</span>
<span className="absolute inset-0  rounded-full"></span>
</a>
    </div>
  )
}

export default OffGrid
