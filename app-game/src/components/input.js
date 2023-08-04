import React from "react";

function Input ({placeholder,type}){
 return(
    <input className="font-Righteous bg-[#C4C4C4] rounded-[38px] text-[24px] pl-[15px] p-[4px] placeholder:text-[#3A3A3A] focus:shadow-[0] focus:outline-[0] w-[100%]" type={type} placeholder={placeholder}></input>

 )


}
export default Input;