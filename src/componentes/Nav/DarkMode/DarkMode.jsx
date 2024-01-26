import React, { useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";


const DarkMode = ({  }) => {
  
  const [dark, setDark] = useState(true);
    
  return (
    <button>
        
    {dark ? (
      <HiMoon
        className="cursor-pointer dark:text-[#e4e4e4] dark:hover:text-gray-700 duration-150"
        size={25}
        onClick={() => {
          document.querySelector("html").classList.toggle("dark");
          setDark(!dark);
        }}
      />
    ) : (
      <HiSun
        className="cursor-pointer text-[#cacaca] hover:text-[#e4e4e4] duration-150"
        size={25}
        onClick={() => {
          document.querySelector("html").classList.toggle("dark");
          setDark(!dark);
        }}
      />
    )}

    </button>
  )
}

export default DarkMode