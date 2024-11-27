import pray from "../assets/prayemoji.png"
import Tilt from 'react-parallax-tilt';


const Introduction = () => {

  return (
    <div className='min-h-[80vh] overflow-hidden flex '>
      <Tilt //options={defaultOptions}  
        className='parallax md:w-[500px] md:h-[500px] xs:w-[300px] xs:h-[500px] m-auto  '
        perspective={700}
        tiltReverse={true}
        gyroscope={true}
      >

        <div className='inner-element  stars  flex  items-center flex-col  m-auto ' id=''>
         
          <div className=' inner-element flex  items-center   drop-shadow-2xl  '>
            <img src={pray} className='md:h-24 xs:h-10 drop-shadow-xl' alt="praying hand emoji" />
            <p className='text-white md:text-8xl  drop-shadow-2xl   xs:text-5xl font-bold  '>WELCOME</p>
          </div>
        </div>
      </Tilt>

    </div>
  )
}

export default Introduction
