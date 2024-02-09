import { getVids } from '@/sanity/sanity-utils';
import Image from 'next/image'
import Link from 'next/link'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"



export default async function Home() {
  const docvids = await getVids();
  return (
    <div className='px-11 md:px-20'>
      <div className='pt-10'>
        
      </div>
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
              <CarouselItem><img className='md:basis-1/2 lg:basis-1/3' src="https://instagram.fjsr13-1.fna.fbcdn.net/v/t51.2885-15/399410652_1337968420442612_1523820648198111904_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3NjEuc2RyIn0&_nc_ht=instagram.fjsr13-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=r_XakplPCNoAX9Xp5Am&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzIyOTI4MzIyODkwOTUxMjM1NQ%3D%3D.2-ccb7-5&oh=00_AfC6PZGV9GBZURT4YAZ8Md4DEPYIr8_Yw3Tnf9t8f-UlEQ&oe=65BC1C91&_nc_sid=b41fef" alt=""/></CarouselItem>
              <CarouselItem><img className='md:basis-1/2 lg:basis-1/3' src="https://instagram.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/395755812_17851437636070295_7123960561255449206_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3NzIuc2RyIn0&_nc_ht=instagram.fjsr13-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=gcdlXcTPla0AX_gJBq2&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzIyMjA3NTM0NjE1Nzc3NDUyNQ%3D%3D.2-ccb7-5&oh=00_AfARyD8KpiQ1b7Olj_zv99BQLtDXblZ_1bCrEkK_QDse8Q&oe=65BCCCBB&_nc_sid=b41fef" alt=""/></CarouselItem>
              <CarouselItem><img className='md:basis-1/2 lg:basis-1/3' src="https://instagram.fjsr13-1.fna.fbcdn.net/v/t51.2885-15/399974078_190509234107568_1546987969068284250_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3NjEuc2RyIn0&_nc_ht=instagram.fjsr13-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=3lKNWn6KHR0AX8Px2wy&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzIzMjI5NDkwMTI0OTQzNDE4NA%3D%3D.2-ccb7-5&oh=00_AfC7LAhu0IngBFfHaoAJM1j6czrF_CmpViLnYDIe8wg22w&oe=65BBF6EA&_nc_sid=b41fef" alt=""/></CarouselItem>
              <CarouselItem><img className='md:basis-1/2 lg:basis-1/3' src="https://instagram.fjsr13-1.fna.fbcdn.net/v/t51.2885-15/395447387_351143400639574_4106343139432079996_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyIn0&_nc_ht=instagram.fjsr13-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=irTZR2-3aC4AX-mRRej&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzIyMTM1NzU3NDkyMjY5MDE0OQ%3D%3D.2-ccb7-5&oh=00_AfAmxH1OTLfGXeKSsp8QxS0U5mnOblFfE4P5vMIY8_PN6w&oe=65BC9907&_nc_sid=b41fef" alt=""/></CarouselItem>
              <CarouselItem><img className='md:basis-1/2 lg:basis-1/3' src="https://instagram.fjsr13-1.fna.fbcdn.net/v/t51.2885-15/403998987_256881140720156_7700905891812142522_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=instagram.fjsr13-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=_xZfWELeMCkAX--1dtt&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzI0MzgzNzIwNjUyNzY1NjAzMw%3D%3D.2-ccb7-5&oh=00_AfB6wuKR2eyygIkG0-UHYCQejFhH8HFl82xvOdro3jTPuA&oe=65BCC722&_nc_sid=b41fef" alt=""/></CarouselItem>
            </CarouselContent>
            <CarouselPrevious className='text-white' />
            <CarouselNext className='text-white' />
          </Carousel>
        </div>
      </div>
      <div className='text-white'>
        <h2 className='text-3xl flex items-center mb-5 uppercase justify-center font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>services i offer</h2>
        <div className='flex flex-col px-10 lg:flex-row gap-6 items-center justify-center'>
          <Card className='w-[80vw] h-80 flex flex-col justify-between hover:scale-110 transition-all ease-in-out lg:w-1/4'>
            <CardHeader>
              <CardTitle>Video Editing</CardTitle>
              <CardDescription>Content Creation</CardDescription>
            </CardHeader>
            <CardContent>
              <p>I can create both long form and short form videos for you. </p>
            </CardContent>
            <CardFooter>
              <Link className='border-2 border-red-600 px-4 py-2 text-lg rounded-3xl text-center w-full' href="/contact">Contact</Link>
            </CardFooter>
          </Card>
          <Card className='w-[80vw] h-80 flex flex-col justify-between hover:scale-110 transition-all ease-in-out lg:w-1/4'>
            <CardHeader>
              <CardTitle>Portfolio Website</CardTitle>
              <CardDescription>Web-Development</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Personalized responsive website with custom backend service.</p>
            </CardContent>
            <CardFooter>
              <Link className='border-2 border-red-600 px-4 py-2 text-lg rounded-3xl text-center w-full' href="/contact">Contact</Link>
            </CardFooter>
          </Card>
          <Card className='w-[80vw] h-80 flex flex-col justify-between hover:scale-110 transition-all ease-in-out lg:w-1/4'>
            <CardHeader>
              <CardTitle>Blogging Website</CardTitle>
              <CardDescription>Web-Development</CardDescription>
            </CardHeader>
            <CardContent>
              <p>A NextJs responsive blogging website with easy to use CMS.</p>
            </CardContent>
            <CardFooter>
              <Link className='border-2 border-red-600 px-4 py-2 text-lg rounded-3xl text-center w-full' href="/contact">Contact</Link>
            </CardFooter>
          </Card>
          <Card className='w-[80vw] h-80 flex flex-col justify-between hover:scale-110 transition-all ease-in-out lg:w-1/4'>
            <CardHeader>
              <CardTitle className='text-xl'>E-commerce Website</CardTitle>
              <CardDescription>Web-Development</CardDescription>
            </CardHeader>
            <CardContent>
              <p>A NextJs responsive ecommerce website with easy to use inventory.</p>
            </CardContent>
            <CardFooter>
              <Link className='border-2 border-red-600 px-4 py-2 text-lg rounded-3xl text-center w-full' href="/contact">Contact</Link>
            </CardFooter>
          </Card>
        </div>
      </div>
      

    </div>
    

  )}
