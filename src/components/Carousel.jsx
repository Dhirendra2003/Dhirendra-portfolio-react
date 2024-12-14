import { Link } from 'lucide-react'

function Carousel(props) {
  return (
    <div className='carousel max-w-[90vw] md:border-4 xs:border-[4px]   border-white/40 md:h-[30vw] m-auto   shadow-xl rounded-xl overflow-hidden md:flex '>

      <img src={props.img} className='h-[100%] m-auto  object-contain rounded-xl' />
      <div className='bg-black/30 backdrop-blur-md flex flex-col place-content-center  text-cyan-200  md:hover-show  md:p-0 xs:p-4'>
        <div className='p-5 max-w-[400px] m-auto h-[100%] justify-around flex flex-col text-xl '>
          <p className=' font-bold text-2xl capitalize underline'>
            {/* title */}

            {props.title && props.title}
          </p>
          <p>
            <span className='font-bold '>Tech Stack: </span> <br />
            {props.techstack && props.techstack}
          </p>
          <p>
            <span className='font-bold'>Features: </span><br />
            {props.objective && props.objective}
          </p>
          {props.link && <a target='blank' className='underline  hover:text-fuchsia-300 italic flex text-sky-500 flex-row' href={props.link}> <Link width={15} /> live link</a>}
        </div>
      </div>
    </div>
  )
}

export default Carousel