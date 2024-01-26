import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";

const Buttom = ({ text, type }) => {
  return (

   <button className='bg-emerald-600 dark:bg-blue-700 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 hover:bg-emerald-500 transition-all'>
              {text} 
              <HiArrowNarrowRight size={18}/>
   </button>


  )
}

export default Buttom