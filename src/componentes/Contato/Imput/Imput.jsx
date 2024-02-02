import React from "react";

const Imput = ({ type, placeholder, name }) => {
  return (
<input
  required
  placeholder={placeholder}
  type={type}
  name={name}
  className="resize-none sm:w-[400px] w-[300px] my-2 h-[50px]  bg-[#312e2e] dark:bg-[#cecdcd] rounded-lg placeholder:text-gray-400 text-gray-50 dark:placeholder:text-gray-400 dark:text-gray-700 p-4 focus:outline-none focus:ring-2 ring-[#201f1f]"
/>
  );
};

export default Imput;
