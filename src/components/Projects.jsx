import { PanelsLeftBottom } from 'lucide-react'
import React from 'react'
import tt from "../assets/ttimg.png"
import bid from "../assets/bidbazar.jpg"
import pj3 from "../assets/jobPortal.jpg"
import power from "../assets/powerBIDB.png"
import adhipuri from "../assets/adhipuri.jpg"
import pj6 from "../assets/paper trade.jpg"

import Carousel from './Carousel'

function Projects() {
  return (
    <div className='z-50 min-h-screen flex items-center flex-col bg-gradient-to-b  from-black to-black/50 pt-48 '>
      <div className='flex md:gap-8  xs:gap-4 md:text-5xl xs:text-2xl place-content-center items-center font-bold '>
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
        <PanelsLeftBottom className='text-yellow-500 hover:rotate-90 md:h-24 md:w-24 xs:h-12 xs:w-12 transition-all ease-in-out duration-300 ' />
      </div>
      <div className='my-32 flex gap-8 flex-col'>
        <Carousel img={bid}  link={'https://bidbazaar.onrender.com/'} title={"BidBazaar - bidding platform  "} techstack={"React JS , ShadCN UI ,Tailwind CSS , Node JS , SQL ,AWS Cloud     "} objective={"Login , Register , Post Items , Live Bidding with websocket, Comment on Bids  , Wallet with payment gateway ,item bid scheduling  "}/>


        <Carousel img={pj3}   link={'https://job-portal-mern-omega.vercel.app/'} title={"Job Portal MERN  "} techstack={"React JS , ShadCN UI ,Tailwind CSS , Node JS , Mongo DB ,Cloudinary "} objective={"Login , Register , Post Jobs , Apply for Jobs , Upload Resume , Application status check  ,Job search & filtering , Dark mode  "}/>


        <Carousel img={pj6}  link={'https://paper-trade-front-end.vercel.app/'} title={"PaperTrade -practice Trading App  "} techstack={"React JS ,Tailwind CSS , Node JS , Mongo DB ,Yahoo Finance API "} objective={"Login , Register ,Place Trades , Sell /Settel Holdings, History , Subsciption ,Change Graph timeline and style"}/>


        <Carousel img={power}   title={"HR Analytics Dashboard "} techstack={"Power BI"} objective={"Data visualization ,selective filtering  "}/>


        <Carousel img={adhipuri}  link={'https://adhipurifashion.42web.io/'} title={"Buisness portfolio  "} techstack={"WordPress ,Elementor , canva   "} objective={"Animations ,Blogs page ,responsive design ,parallax animations "}/>


        <Carousel img={tt} link={'https://www.techtorch.online/'} title={"organization  portfolio "} techstack={"html ,css , js "} objective={"Parallax scroll , popup animations "}/>
      </div>

    </div>)
}

export default Projects
