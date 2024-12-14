import { Phone } from 'lucide-react'

function Contact() {
  return (
    <a href='#contact'>
    <div className='flex gap-2 items-end w-min -rotate-90 md:p-2 xs:p-2 bg-green-600 rounded-t-xl text-white hover:scale-110 transition-all duration-300 ease-in-out '>
<p className='text-nowrap text-sm'>Contact Me 
  </p>      
  <Phone className='w-4'/>
    </div>
    </a>
  )
}

export default Contact
