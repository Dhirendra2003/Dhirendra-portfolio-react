import { PanelsLeftBottom } from "lucide-react";
import { Gallery } from "react-grid-gallery";
import skf from '../assets/skf.png'


export const images = [
  {
    src: 'https://res-console.cloudinary.com/digbazqis/media_explorer_thumbnails/9172099f483ae52c86be58ccf87ee77d/detailed',
    width: 1877,
    height: 1060,
    thumbnailCaption: "Royal Enfield Classic 350",
  },
  {
    src: "https://res-console.cloudinary.com/digbazqis/media_explorer_thumbnails/cea07639dbbe8c516f99a5f6962006b9/detailed",
    width: 1892,
    height: 1062,
    thumbnailCaption: "Yahamha R1M",
  },
  {
    src: "https://res-console.cloudinary.com/digbazqis/media_explorer_thumbnails/56d8b475524c8969b1fb2d1f95eaa945/detailed",
    width: 1886,
    height: 1051,
    thumbnailCaption: "VolksWagen Vintage Van ",
  },
  {
    src: 'https://res-console.cloudinary.com/digbazqis/media_explorer_thumbnails/7d438b464afcfd1b822c7513e15bebd6/detailed',
    width: 1889,
    height: 1059,
    thumbnailCaption: "Honda Civic type R",
  },
  {
    src: "https://res-console.cloudinary.com/digbazqis/media_explorer_thumbnails/db1f09a6e1eff51175e00fba3394e814/detailed",
    width: 1888,
    height: 1063,
    thumbnailCaption: "Animated sunset",
  },
  {
    src: "https://res-console.cloudinary.com/digbazqis/media_explorer_thumbnails/1094836ff6baaa2fb35be68a7576a737/detailed",
    width: 1894,
    height: 907,
    thumbnailCaption: "Chevrolet Camaro",
  },
  {
    src: 'https://res-console.cloudinary.com/digbazqis/media_explorer_thumbnails/2959be9ffd13c2516b911ffb1c8d3ce5/detailed',
    width: 1892,
    height: 1167,
    thumbnailCaption: "Lykan Hypersport",
  },
  {
    src: "https://res-console.cloudinary.com/digbazqis/media_explorer_thumbnails/cdcfe87e59d9ac520506ebd9a57f067b/detailed",
    width: 1885,
    height: 1052,

    thumbnailCaption: "Ford Mustang 1969",
  },
];


function Grid() {
  return (
    <div className="flex min-h-screen py-32 flex-col place-content-center gap-32   z-50">
      <div className=' sticky md:top-20 xs:top-28 py-2 backdrop backdrop-brightness-[10%] w-[100vw] flex md:gap-8  xs:gap-4 md:text-5xl xs:text-2xl place-content-center items-center font-bold drop-shadow-2xl z-50 '>
        <div className='flex'>
          <h1 className='text-hover-shrink'>M </h1>
          <h1 className='text-hover-shrink'>y </h1>
          <h1 className='md:p-2 xs:p-1'>{" "} </h1>
          <h1 className='text-hover-shrink'>C </h1>
          <h1 className='text-hover-shrink'>r </h1>
          <h1 className='text-hover-shrink'>e </h1>
          <h1 className='text-hover-shrink'>a </h1>
          <h1 className='text-hover-shrink'>t </h1>
          <h1 className='text-hover-shrink'>i </h1>
          <h1 className='text-hover-shrink'>o </h1>
          <h1 className='text-hover-shrink'>n </h1>
          <h1 className='text-hover-shrink'>s </h1>
        </div>
        <PanelsLeftBottom className='text-sky-400 hover:rotate-90 md:h-24 md:w-24 xs:h-12 xs:w-12 transition-all ease-in-out duration-300 ' />
      </div>
      <div className="w-[60%] m-auto">
        <Gallery defaultContainerWidth={5000} images={images} enableImageSelection={false} />
        
      </div>
      <div className="flex flex-col items-center m-10 gap-4">
      <h1 className="text-4xl text-white font-bold">View More @ 👇 </h1>
        <a href="https://sketchfab.com/shindedhirendra780" target="blank" >
          <img src={skf} width={600}  className="rounded-xl hover:scale-105 transition-all duration-300 ease-in-out drop-shadow-2xl"/>
        </a>
        </div>
    </div>
  )
}

export default Grid

