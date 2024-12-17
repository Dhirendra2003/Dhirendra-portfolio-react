import { Github, Linkedin, Instagram, Twitter } from "lucide-react"
import { useEffect, useState } from "react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Current vertical position
      const scrollHeight = document.documentElement.scrollHeight; // Total height of the page
      const clientHeight = document.documentElement.clientHeight; // Visible height of the viewport
      const scrolledPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

      // Update the state if scrolled more than 10% of the total height
      setScrolled(scrolledPercentage > 18);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`z-[2000] ${scrolled ? 'bg-white/40 backdrop-blur-xl backdrop-brightness-50' : 'bg-black'} sticky top-0 text-white flex justify-between md:px-10 xs:px-4 md:py-5 xs:py-2 flex-wrap transition-all duration-1000 ease-in-out`}>
      <div className="flex flex-wrap my-auto md:mr-auto ">
        <ul className="md:flex md:flex-row xs:grid grid-cols-2  md:gap-6 xs:gap-0 md:text-2xl xs:text-lg font-bold ">

          <a href="#section1"><li className="nav-text" >Intro </li></a>
          <a href="#section2"><li className="nav-text">Skills</li></a>
          <a href="#exp"><li className="nav-text">Exp</li></a>
          <a href="#proj"><li className="nav-text">Projects</li></a>
          <a href="#3d"><li className="nav-text">3D </li></a>
          <a href="#contact"><li className="nav-text">Contact</li></a>
        </ul>
      </div>

      <div className="flex my-auto md:ml-auto">
        <ul className="md:flex md:gap-4 xs:gap-2 xs:grid grid-cols-2  ">
          <a target="blank" href="https://github.com/Dhirendra2003"> <li className="nav-icon"><Github /></li></a>
          <a target="blank" href="https://www.linkedin.com/in/dhirendra-shinde-b9a826215/"> <li className="nav-icon"><Linkedin /></li></a>
          <a target="blank" href="https://www.instagram.com/pixel_renderer_8bit/"> <li className="nav-icon"><Instagram /></li></a>
          <a target="blank" href="https://twitter.com/dhiru2003"> <li className="nav-icon"><Twitter /></li></a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar