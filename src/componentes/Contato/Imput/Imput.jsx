import React from "react";

const Imput = ({ type, placeholder, name }) => {
  return (
    <div>
      <input required placeholder={placeholder} type={type} name={name} 
      className="bg-[#312e2e] font-mono text-gray-500 dark:bg-[#cecdcd] placeholder:text-gray-400 focus:ring-2 sm:w-[400px] w-[300px] my-2 h-[50px] rounded-md px-4"
      />
    </div>
  );
};

export default Imput;
