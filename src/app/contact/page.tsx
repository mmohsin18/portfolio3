import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


export default function Contact(){
   return (
    <div className="h-fit">
      <h1 className="text-7xl font-extrabold flex items-center justify-center mb-12 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">Contact</h1>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center border-2 w-fit px-10 py-6 rounded-3xl gap-6">
        <div className="flex items-center justify-center gap-2 hover:scale-110 transition-all">
          <FaLinkedin size={32} color="white"/>
          <a href="www.linkedin.com/in/mmohsin0804" className="text-white text-2xl">LinkedIn</a>
        </div>
        <div className="flex items-center justify-center gap-2 hover:scale-110 transition-all">
          <RiInstagramFill size={32} color="white" />
          <a href="https://www.instagram.com/_mohography_/" className="text-white text-2xl">Instagram</a>
        </div>
      </div>
    </div>
    </div>
  )

}