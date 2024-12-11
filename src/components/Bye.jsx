import grad from "../assets/welcome (2).png";
import rolling from "../assets/rolling.webm"

function Bye() {
  return (
    <div className='min-h-screen bg-star-dark flex flex-col justify-center items-center'>
      <div className='flex xs:flex-col md:flex-row mt-36'>
        <div className='flex w-min'>
          <img src={grad} className='w-96 mix-blend-screen absolute brightness-50 hover:brightness-90 transition-all duration-700 ease-in-out' />
          <h1 className='text-white text-4xl font-bold w-60 m-20 ' >"Never stop.
            Keep
            growing.
            The journey
            is the
            destination."

          </h1>
        </div>
        <div>
          <video src={rolling} className='w-96 mix-blend-screen' autoPlay muted loop />
        </div>
      </div>
      <h1 className='text-white mt-48 text-xl'>Thanks for Exploring !!!</h1>
    </div>
  )
}

export default Bye