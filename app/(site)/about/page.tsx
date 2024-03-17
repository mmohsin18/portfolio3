import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineViewTimeline } from "react-icons/md"  
import { FaLaptopCode } from "react-icons/fa";


export default function Contact(){
   return (
    <div className="text-white">
      <div className=" px-10 mb-10 lg:px-32">
        <h1 className="text-3xl flex items-center mb-5 justify-center font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">About Muhammad Mohsin</h1>
        <div className="flex flex-col justify-center lg:flex-row">
            <div className="text-center w-[100%] lg:text-right lg:w-[40%]">
                <div className="flex items-end justify-end">
                    <MdOutlineViewTimeline size={64} className="text-right" color="white" />
                </div>
                <h1 className="font-semibold mb-3">Video Editor</h1>
                <p className="font-regular w-full">I am a video editor with 4 years of experience in editing long form videos. 
                    I have an experience in creating long form youtube videos from any niche. I have done multiple documentary
                    and informative style short and long form videos. I am an excel in Adobe Premier Pro, Adobe After Effects
                     and Capcut.
                </p>
            </div>
            <div className="w-[10%] h-10"></div>
            <div className="w-[100%] lg:w-[40%]">
                <FaLaptopCode size={64} color="white" />
                <h1 className="font-semibold mb-3">Front-end Programmer</h1>
                <p>I am a front-end programmer with expertise of HTML,CSS and Javascript.
                    I have basic knowledge of Next.js, React.js, ExpressJs.
                </p>
            </div>
        </div>
        
      </div>
      <div className=" p-10 lg:px-32">
        <h1 className="text-3xl flex items-center mb-5 justify-center font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">Education</h1>
        <div className="flex gap-10 flex-col lg:flex lg:flex-row items-start justify-between">
            <div className="w-[100%] lg:w-[30%]">
                <h1 className="flex font-semibold items-center mb-3 justify-center">Ideal School & College</h1>
                <div className="flex flex-col gap-3">
                    <h1>Former Debater <br /><span className="text-zinc-400">at Ideal Debating Club</span></h1>
                    <h1>Former Office Secretary <br /><span className="text-zinc-400">at Ideal English Language Club</span></h1>
                </div>
                
            </div>
            <div className="w-[100%] lg:w-[30%]">
                <h1 className="flex font-semibold mb-3 items-center justify-center">Sabujbagh Govt. College</h1>
                <div className="flex flex-col gap-3">
                    <h1>Cast Member <br /><span className="text-zinc-400">at Sabujbagh Govt College Cultural Club</span></h1>
                </div>
            </div>
            <div className="w-[100%] lg:w-[30%]">
                <h1 className="flex font-semibold mb-3 items-center justify-center">North South University (CSE)</h1>
                <div className="flex flex-col gap-3">
                    <h1>Probationary Member <br /><span className="text-zinc-400">NSU Debate Club</span></h1>
                </div>
            </div>
        </div>
      </div>

      
    </div>
  )

}