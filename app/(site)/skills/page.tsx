import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineViewTimeline } from "react-icons/md"  
import { FaLaptopCode } from "react-icons/fa";

const arr = [
  {
    name:'HTML, CSS',
    skill: '90%'
  },
  {
    name:'Next JS, React JS',
    skill: '70%'
  },
  {
    name:'Sanity, Appwrite Backend',
    skill: '60%'
  },
  {
    name: 'Tailwind CSS, ShadCN',
    skill: '70%'
  },
  {
    name:'LaTeX',
    skill: '90%'
  },
  {
    name:'C ',
    skill: '60%'
  },
];

const vid = [
  {
    name:'Adobe Premier Pro, Capcut',
    skill: '90%'
  },
  {
    name:'Ali Abdaal Style',
    skill: '70%'
  },
  {
    name:'Informative Research',
    skill: '60%'
  },
  {
    name: 'Vox style Motion Graphics',
    skill: '70%'
  }
];

export default function Contact(){
   return (
    <>
    <div className='mb-11'>
      <h1 className='text-white w-full border-slate-700 font-bold items-center flex flex-col py-4 text-xl'>Content Development</h1>
      <div className="text-white grid grid-cols-1 md:grid-cols-4 gap-10 px-20">
      {vid.map((editing, index) => (
        <div key={index} className='w-fit p-4 border-2 border-slate-400 rounded-lg'>
          <div className='bg-slate-200 my-3 w-44 rounded-lg overflow-hidden h-2'>
            <div className='bg-red-500 h-2' style={{ width: editing.skill }}></div>
          </div>
          <div className='flex justify-between items-center'>
            <h6 className='font-bold w-[70%]'>{editing.name}</h6>
            <h6 className='font-bold'>{editing.skill}</h6>
          </div>
        </div>
        ))}
      </div>
    </div>
    <div>
      <h1 className='text-white w-full border-slate-700 font-bold items-center flex flex-col py-4 text-xl'>Programming</h1>
      <div className="text-white grid grid-cols-1 md:grid-cols-4 gap-10 px-20">
      {arr.map((artwork, index) => (
        <div key={index} className='w-fit p-4 border-2 border-slate-400 rounded-lg'>
          <div className='bg-slate-200 my-3 w-44 rounded-lg overflow-hidden h-2'>
            <div className='bg-red-500 h-2' style={{ width: artwork.skill }}></div>
          </div>
          <div className='flex justify-between items-center'>
            <h6 className='font-bold w-[75%]'>{artwork.name}</h6>
            <h6 className='font-bold'>{artwork.skill}</h6>
          </div>
        </div>
        ))}
      </div>
    </div>
    </>
   )
}