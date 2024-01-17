import { getPages } from "@/sanity/sanity-utils"
import { PortableText } from '@portabletext/react';
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const progs = await getPages();

  return (
    <div>
      <div className="mt-5 px-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{progs.map((prog) => (
        <Link href={`/projects/${prog.url}`} key={prog._id} className="border-2 border-gray-500 rounded-lg p-4 hover:scale-105 hover:border-blue-500 transition">
          {prog.image && (
            <Image
              src={prog.image}
              alt={prog.name}
              width={750}
              height={470}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {prog.title}
          </div>
          <div className="text-lg text-white">
            <PortableText value={prog.content} />
          </div>
        </Link>
      ))}
      </div>
    </div>
  )

}
