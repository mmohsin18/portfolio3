import { getVids } from '@/sanity/sanity-utils';
import Image from 'next/image'
import Link from 'next/link'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default async function Home() {
  const vids = await getVids();
  return (
    <div className='px-11 md:px-20'>
      {/* <div className='py-5 scroll-px-8 w-screen gap-4 overflow-x-auto flex'>{vids.map((allvid) => (
        <Link href={allvid.url} key={allvid._id} className="border-2 border-gray-500 rounded-lg p-4 hover:scale-105 hover:border-blue-500 transition">
        {allvid.image && (
          <Image
            src={allvid.image}
            alt={allvid.name}
            width={600}
            height={400}
            className="object-cover rounded-lg"
          />
        )}
        <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          {allvid.title}
        </div>
      </Link>
      ))}
      </div> */}
      <div className=''>
            <h2 className='text-2xl md:text-3xl flex items-center mb-5 uppercase justify-center font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>Worked With</h2>
            <div className='flex items-center gap-3 md:gap-8 justify-center'>
              <a className='w-24 hover:scale-110 hover:transition-all ease-in-out' href="https://sgcd.edu.bd/hall-of-fame/">
                <img className='rounded-full object-cover' src="https://i.postimg.cc/kXwT9nd2/Frame-6.png" alt="" />
              </a>
              < a className='w-24 hover:scale-110 hover:transition-all ease-in-out' href="https://www.facebook.com/mmohsin1803/posts/pfbid02RyxxLoUoRfUb2FaL8pYfXrcAgZBfsMM4pB7JvQCi5ZmLcdjEHMY2fRo2ovizBBcyl">
                <img className='rounded-full object-cover' src="https://i.postimg.cc/W1YjDL03/Frame-6-1.png" alt="" />
              </a>
              <a className='w-24 hover:scale-110 hover:transition-all ease-in-out' href="https://youtu.be/1qg4J0LJvc8?si=xMvcG8MtUJo-OnNh">
                <img className='rounded-full object-cover' src="https://i.postimg.cc/cJ5Q5HwS/Frame-6-2.png" alt="" />
              </a>
            </div>
      </div>
      <div className=' py-14'>
        <h2 className='text-3xl flex items-center mb-5 uppercase justify-center font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>Photography</h2>
        <div className=' flex items-center justify-center'>
          <Carousel className='w-64'>
            <CarouselContent className='w-fit'>
              <CarouselItem><img className='md:basis-1/2 object-cover lg:basis-1/3' src="https://i.postimg.cc/L6JZTy2x/IMG-3679.jpg" alt=""/></CarouselItem>
              <CarouselItem><img className='md:basis-1/2 object-cover lg:basis-1/3' src="https://i.postimg.cc/J40jFrcc/IMG-2271.jpg" alt=""/></CarouselItem>
              <CarouselItem><img className='md:basis-1/2 object-cover lg:basis-1/3' src="https://i.postimg.cc/XYydVsPr/IMG-5059.jpg" alt=""/></CarouselItem>
              <CarouselItem><img className='md:basis-1/2 object-cover lg:basis-1/3' src="https://i.postimg.cc/TwDtpBcF/IMG-4922.jpg" alt=""/></CarouselItem>
              <CarouselItem><img className='md:basis-1/2 object-cover lg:basis-1/3' src="https://i.postimg.cc/bvdCjZSz/IMG-1083-jpg.jpg" alt=""/></CarouselItem>
            </CarouselContent>
            <CarouselPrevious className='text-white' />
            <CarouselNext className='text-white' />
          </Carousel>
        </div>
      </div>
      <div className='text-white'>
        <h2 className='text-3xl flex items-center mb-5 uppercase justify-center font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>services i offer</h2>

      </div>
      

    </div>
    

  )}
