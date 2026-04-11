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

const newPortfolioLink = 'https://dhirendra-portfolio-next.vercel.app/'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState();
  const [showRedirectPopup, setShowRedirectPopup] = useState(true);
  const [redirectCountdown, setRedirectCountdown] = useState(5);

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

  useEffect(() => {
    if (isLoading) {
      const fade = setTimeout(() => {
        setShowLoader(true);
      }, 1000);
      return () => clearTimeout(fade)
    }
  }, [isLoading])

  useEffect(() => {
    if (!showRedirectPopup) {
      return;
    }

    if (redirectCountdown === 0) {
      window.location.href = newPortfolioLink;
      return;
    }

    const timer = window.setTimeout(() => {
      setRedirectCountdown((currentCountdown) => currentCountdown - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [redirectCountdown, showRedirectPopup]);

  return (
    <>
      {isLoading &&
        <div className={`bg-black w-screen h-screen fixed z-[5000] ${showLoader && "opacity-0 invisible"} flex transition-all duration-1000 ease-linear`}><HashLoader color="#00ffe1" size={100} className='m-auto' /></div>
      }

      {showRedirectPopup && (
        <div className="fixed inset-0 z-[6000] w-full h-full flex items-center justify-center bg-black/70 px-4 backdrop-blur-md scale-150 sm:scale-100">
          <div className="relative w-full lg:max-w-[50%] md:max-w-[50%] xs:max-w-[50%] max-w-lg rounded-3xl border border-cyan-300/30 bg-[#0f1115]/95 p-6 text-white shadow-[0_0_50px_rgba(0,255,225,0.18)] md:p-8">
            <button
              type="button"
              onClick={() => setShowRedirectPopup(false)}
              aria-label="Close popup"
              className="absolute right-4 top-4 flex h-10 w-10 pt-2 items-center justify-center rounded-full border border-white/15 text-4xl leading-none text-red-500 transition hover:border-red-300 hover:text-red-300"
            >
              ×
            </button>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Notice</p>
            <h1 className="mt-3  font-semibold text-4xl text-cyan-200">This is old portfolio</h1>
            <p className="mt-4 max-w-md  text-white/75 text-xl">
              You&apos;ll be redirected to the new link in <span className="font-bold text-cyan-300 max-w-4">{redirectCountdown}</span> second{redirectCountdown === 1 ? '' : 's'}.
            </p>
            <a
              href={newPortfolioLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center rounded-full border border-cyan-300/40 bg-cyan-300/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-300/20 hover:text-cyan-100"
            >
              Open now
            </a>
          </div>
        </div>
      )}


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