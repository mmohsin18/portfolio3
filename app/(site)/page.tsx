import { getVids } from '@/sanity/sanity-utils';
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const projects = await getVids();
  return (
    <div className=' px-20'>
      <div className='py-20'>
        <h1 className='text-7xl text-white font-bold flex items-center justify-center '>Coming Soon</h1>
      </div>
      <div className=''>
            <h2 className='text-3xl flex items-center mb-5 justify-center font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>Worked With</h2>
            <div className='flex items-center gap-8 justify-center'>
              <a href="https://sgcd.edu.bd/hall-of-fame/">
                <img className='rounded-full w-24' src="https://i.postimg.cc/kXwT9nd2/Frame-6.png" alt="" />
              </a>
              < a href="https://www.facebook.com/mmohsin1803/posts/pfbid02RyxxLoUoRfUb2FaL8pYfXrcAgZBfsMM4pB7JvQCi5ZmLcdjEHMY2fRo2ovizBBcyl">
                <img className='rounded-full w-24' src="https://i.postimg.cc/W1YjDL03/Frame-6-1.png" alt="" />
              </a>
              <a href="https://youtu.be/1qg4J0LJvc8?si=xMvcG8MtUJo-OnNh">
                <img className='rounded-full w-24' src="https://i.postimg.cc/cJ5Q5HwS/Frame-6-2.png" alt="" />
              </a>
            </div>
      </div>
    </div>
  )

}
