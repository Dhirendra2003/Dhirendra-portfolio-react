import { Rotate3D } from "lucide-react";
import skf from '../assets/skf.webp'
import buttet from "../assets/grid/bullet-min.webp"
import camero from "../assets/grid/camero-min.webp"
import civic from "../assets/grid/civic-min.webp"
import lykan from "../assets/grid/lykan-min.webp"
import mustang from "../assets/grid/mustang-min.webp"
import sunset from "../assets/grid/sunset-min.webp"
import van from "../assets/grid/van-min.webp"
import yamaha from "../assets/grid/yamaha-min.webp"

function Slide(props){
  return (
    <div className="shadow-2xl p-2 hover:scale-105 hover:z-40 bg-white  duration-300 ease-in-out transition-all rounded-lg">
      <img src={props.src}  />
      <p>{props.cap}</p>
    </div>
  )
}

function Grid() {
  return (
    <div className="flex min-h-screen  flex-col place-content-center gap-32   z-50">
      <div className='mb-28 sticky md:top-20 xs:top-28 py-2 bg-purple-100 w-[100%] flex md:gap-8  xs:gap-4 md:text-4xl xs:text-2xl place-content-center items-center font-semibold  z-50 '>
        <div className='flex'>
          <h1 className='text-hover-shrink-black'>3 </h1>
          <h1 className='text-hover-shrink-black'>D </h1>
          <h1 className='md:p-2 xs:p-1'>{" "} </h1>
          <h1 className='text-hover-shrink-black'>C </h1>
          <h1 className='text-hover-shrink-black'>r </h1>
          <h1 className='text-hover-shrink-black'>e </h1>
          <h1 className='text-hover-shrink-black'>a </h1>
          <h1 className='text-hover-shrink-black'>t </h1>
          <h1 className='text-hover-shrink-black'>i </h1>
          <h1 className='text-hover-shrink-black'>o </h1>
          <h1 className='text-hover-shrink-black'>n </h1>
          <h1 className='text-hover-shrink-black'>s </h1>
        </div>
        <Rotate3D className='text-purple-500 hover:rotate-90 md:h-18 md:w-18 xs:h-10 xs:w-10 transition-all ease-in-out duration-300 ' />
      </div>
      <div className="w-[80%] m-auto grid xs:grid-cols-2 md:grid-cols-3 md:p-10  md:gap-8 xs:gap-2 ">
       <Slide  src={buttet} cap={"Royal Enfield Classic 350"}/>
       <Slide  src={camero} cap={"Chevrolet Camaro"}/>
       <Slide  src={civic} cap={"Honda Civic type R"}/>
       <Slide  src={lykan} cap={"Lykan Hypersport"}/>
       <Slide  src={mustang} cap={"Ford Mustang 1969"}/>
       <Slide  src={sunset} cap={"Animated sunset"}/>
       <Slide  src={van} cap={"VolksWagen Vintage Van"}/>
       <Slide  src={yamaha} cap={"Yahamha R1M"}/>
        
      </div>
      <div className="flex flex-col items-center m-10 gap-4 ">
      <h1 className="text-4xl text-yellow-300 bg-black p-1 font-bold ">View More @ sketchfab 👇 </h1>
        <a href="https://sketchfab.com/shindedhirendra780" target="blank" >
          <img src={skf} width={600}  className="rounded-xl hover:scale-105 transition-all duration-300 ease-in-out drop-shadow-xl border-2 border-white"/>
        </a>
        </div>
    </div>
  )
}

export default Grid

