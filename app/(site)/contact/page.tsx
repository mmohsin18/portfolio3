import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export default function Contact(){
   return (
    <div>
      <h1 className="text-5xl lg:text-7xl font-extrabold flex items-center justify-center mb-12 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">Contact</h1>
      <div className="flex items-center justify-center">
        <div className="flex flex-col lg:flex lg:flex-row items-center justify-center border-2 w-fit px-8 lg:px-10 py-6 rounded-3xl gap-6">
          <div className="flex items-center justify-center gap-2 hover:scale-110 transition-all">
            <SiGmail size={30} color="white"/>
            <a href="mailto:mmohsin0804@gmail.com" className="text-white text-2xl">Gmail</a>
          </div>
          <div className="flex items-center justify-center gap-2 hover:scale-110 transition-all">
            <RiInstagramFill size={32} color="white" />
            <a href="https://www.instagram.com/_mohography_/" className="text-white text-2xl">Instagram</a>
          </div>
        </div>
      </div>
      
      <div className='mt-20 flex items-center justify-evenly'>
        <a href='https://www.facebook.com/mmohsin1803' className='flex gap-4 items-center hover:scale-110 w-fit transition-all'>
          <FaFacebook className='text-white' size={32} />
          <h2 className='text-white'>Facebook</h2>
        </a>
        <a href='https://www.behance.net/mmohsin08' className='flex gap-4 items-center hover:scale-110 w-fit transition-all'>
          <FaBehanceSquare className='text-white' size={32} />
          <h2 className='text-white'>Behance</h2>
        </a>
        <a href='https://www.linkedin.com/in/mmohsin0804/' className='flex gap-4 items-center hover:scale-110 w-fit transition-all'>
          <FaLinkedin className='text-white' size={32} />
          <h2 className='text-white'>LinkedIn</h2>
        </a>
        {/* <a href='' className='flex gap-4 items-center hover:scale-110 w-fit transition-all'>
          <FaFacebook className='text-white' size={32} />
          <h2 className='text-white'>Facebook</h2>
        </a> */}
      </div>
      
    </div>
  )

}