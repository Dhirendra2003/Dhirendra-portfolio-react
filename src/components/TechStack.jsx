import heroimg from '../assets/hero1.webp'
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
import { Scissors } from 'lucide-react'

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
      <img src={src} className=' md:lang-img transition-all ease-in-out duration-500 md:h-32 md:w-32 xs:h-16 xs:w-16 object-contain  hover:bg-black/50 drop-shadow-lg p-3  rounded-xl hover:scale-110' alt={"tech stack"} />
    </div>
  )
}
function TechStack() {
  return (
    <>
      <h1 className='text-3xl text-orange-300 font-semibold text-center bg-cyan-800 sticky md:top-20 xs:top-28 z-50 p-4 flex w-full place-content-center gap-4 '>About Me and my Skills <Scissors className='text-white w-6 h-6 hover:rotate-45 transition-all duration-300 ease-in-out top-1 relative '/></h1>
    <div className='w-full    flex flex-col py-40 place-content-center '>
      <div className='flex p-10 gap-10 justify-center flex-col place-content-center '>
        <div className='flex place-content-center flex-wrap items-center gap-8 justify-center  p-10'>
          <div className='flex gap-6 flex-col m-auto'>
            <h1 className='text-white drop-shadow-xl underline text-6xl font-bold text border-l-8 border-cyan-400 p-1'>I'm <br />Dhirendra <br />
              Shinde</h1>
            <p className='text-white text-right  font-semibold text-xl border-r-8 border-white p-1'>
              <span className='bg-cyan-500 p-2'>A full stack Dev </span> <br /> 
              <span className='bg-cyan-600 p-2'>proficient in MERN ,</span> <br />
              <span className='bg-cyan-700 p-2'>React native & UI Designer </span> <br />
              <span className='bg-cyan-800 p-2'>3D Artist </span><br />
              <span className='bg-cyan-900 p-2'>Data Analyst </span><br />
            </p>
          </div>
          <img src={heroimg} alt="" className='md:h-[500px] drop-shadow-2xl md:w-[500px] m-auto xs:w-auto' />
        </div>
        <div className='grid md:grid-cols-6 xs:grid-cols-3 gap-4 m-auto'>
          {imgArray.map((img, index) => languageDiv(img, index))}
        </div>

      </div>
    </div>
    </>
  )
}

export default TechStack;