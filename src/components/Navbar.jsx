import {  Github ,Linkedin,Instagram,Twitter} from "lucide-react"
const Navbar = () => {
  return (
    <div className="z-[2000] bg-black sticky top-0 text-white flex justify-between md:px-10 xs:px-4 md:py-5 xs:py-2 flex-wrap ">
      <div className="flex flex-wrap my-auto md:mr-auto ">
        <ul className="md:flex md:flex-row xs:grid grid-cols-2  md:gap-6 xs:gap-1 text-2xl xs:text-xl font-bold ">
          <li className="nav-text" >Intro </li>
          <li className="nav-text">Experience</li>
          <li className="nav-text">Projects</li>
          <li className="nav-text">Skills</li>
          <li className="nav-text">Contact</li>
        </ul>
      </div>

      <div className="flex my-auto md:ml-auto">
        <ul className="md:flex gap-4 xs:grid grid-cols-2  ">
          <li className="nav-icon"><Github/></li>
          <li className="nav-icon"><Linkedin/></li>
          <li className="nav-icon"><Instagram/></li>
          <li className="nav-icon"><Twitter/></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar