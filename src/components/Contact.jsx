import { Phone } from 'lucide-react'

function Contact() {
  return (
    <a href='#contact'>
    <div className='flex gap-2 items-end w-min -rotate-90 md:py-2 xs:py-1 px-2 bg-white rounded-t-xl text-neutral-800 font-semibold hover:scale-110 transition-all duration-300 ease-in-out '>
<p className='text-nowrap text-sm'>Contact Me 
  </p>      
  <Phone className='w-4'/>
    </div>
    </a>
  )
}

export default Contact
