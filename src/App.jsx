import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import TechStack from './components/TechStack'
import Testgsap from './components/Testgsap'
import Projects from './components/Projects'
import Grid from './components/Grid'
import Experience from './components/Experience'
import OffGrid from './components/OffGrid'
import Bye from './components/Bye'
import Footer from './components/Footer'
import Contact from './components/Contact'
import ScrollUp from './components/ScrollUp'
import { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader,setShowLoader]=useState();

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false); // Stop showing the loader when everything is loaded
    };

    // Wait for all resources to load
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(()=>{
    if(isLoading){
      const fade=setTimeout(()=>{
        setShowLoader(true);
      },1000);
      return ()=>clearTimeout(fade)
    }
  },[isLoading])

  return (
    <>
    {isLoading && 
    <div className={`bg-black w-screen h-screen fixed z-[5000] ${showLoader && "opacity-0 -z-[6000]"} flex transition-all duration-1000 ease-linear`}><HashLoader color="#00ffe1"  size={100} className='m-auto' /></div>
    }

    
    <div className=' grad-bg min-h-[100vh] '>
      <Navbar />
      <div className='w-full place-content-center flex flex-col' id='section1'>
        <Introduction />
      </div>
      <div className='backdrop-blur-lg backdrop-hue-rotate-60'>
        <div id='section2'>
          <TechStack />
        </div>
        <div id='exp' className='bg-linemesh'>
          <Experience />
        </div>
      </div>
      <div id='section3' className='pt-30  bg-black'>
        <Testgsap />
      </div>
      <div id='proj'>
        <Projects />
      </div>
      <div id='3d' className='bg-purple-500/30'>
        <Grid />
      </div>
      <div className='bg-white'>
        <OffGrid />
      </div>
      <div>
        <Bye />
      </div>
      <div id='contact'>
        <Footer />
      </div>
      <div className='fixed md:-right-9 xs:-right-10 top-60 md:scale-110 xs:scale-90 z-50'>
        <Contact />
      </div>
      <div onClick={() => { window.scrollTo(0, 0) }} className='fixed md:bottom-4 xs:bottom-0 md:right-4 xs:right-0 md:scale-75 xs:scale-50 '>
        <ScrollUp />
      </div>
    </div>
    </>
  )
}

export default App