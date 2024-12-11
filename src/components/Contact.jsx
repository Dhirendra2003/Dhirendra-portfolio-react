import { Phone } from 'lucide-react'
import React from 'react'

function Contact() {
  return (
    <a href='#contact'>
    <div className='flex gap-4 items-end w-min -rotate-90 md:p-3 xs:p-2 bg-green-600 rounded-t-xl text-white'>
<p className='text-nowrap'>Contact Me 
  </p>      
  <Phone/>
    </div>
    </a>
  )
}

export default Contact
