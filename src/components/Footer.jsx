import { Box, Github, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react'

function Footer() {
  return (
    <div className='text-black  py-20 bg-spline flex place-content-center md:text-xl xs:text-md'>
      <div className='flex flex-col m-auto gap-10 ' >
        <div className='md:flex gap-4  items-center border-b-2 border-black border-spacing-[20px]'>
          <h1 className='font-semibold md:text-2xl xs:text-xl '>Social Media: </h1>
          <ul className='md:flex gap-2 '>
            <a target='blank' href="https://www.instagram.com/pixel_renderer_8bit/">
              <li className='flex gap-2 m-4 hover:underline'>
                <Instagram /><p> Instagram </p>
              </li>
            </a>
            <a target='blank' href="https://www.linkedin.com/in/dhirendra-shinde-b9a826215/">
              <li className='flex gap-2 m-4 hover:underline'>
                <Linkedin /><p> LinkedIn </p>
              </li>
            </a>
            <a target='blank' href="https://github.com/Dhirendra2003">
              <li className='flex gap-2 m-4 hover:underline'>
                <Github /><p>Github </p>
              </li>
            </a>
            <a target='blank' href="https://twitter.com/dhiru2003">
              <li className='flex gap-2 m-4 hover:underline'>
                <Twitter /><p>Twitter </p>
              </li>
            </a>
            <a target='blank' href="https://sketchfab.com/shindedhirendra780">
              <li className='flex gap-2 m-4 hover:underline'>
                <Box /><p>  SketchFab </p>
              </li>
            </a>
          </ul>
        </div>

        <div className='md:flex gap-4 items-center'>
          <h1 className='font-semibold md:text-2xl xs:text-xl'>Contact Me: </h1>
          <ul className='md:flex gap-4'>
            <a target='blank' href="mailto:shindedhirendra780@gmail.com"><li className='flex gap-2 m-4 hover:underline'><Mail /><p>shindedhirendra780@gmail.com </p></li></a>
            <a target='blank' href="tel:+91 7507366162 "><li className='flex gap-2 m-4 hover:underline'><Phone /><p>+91 7507366162 </p></li></a>
          </ul>
        </div>


      </div>

    </div>
  )
}

export default Footer