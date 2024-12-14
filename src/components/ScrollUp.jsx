import { ArrowUp } from 'lucide-react'

function ScrollUp() {
  return (
    <div className=' hover:h-28 border-4 border-gray-400  w-20 h-20 flex  text-gray-400 rounded-full transition-all duration-500 ease-in-out'>
      <ArrowUp className='h-20 w-20 pb-2'/>
    </div>
  )
}

export default ScrollUp