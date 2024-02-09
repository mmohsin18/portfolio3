import { getCliVids, getDocVids, getEditVids, getVids } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from 'next/link'


export default async function Home() {
  const vids = await getVids();
  const clivids = await getCliVids();
  const docvids = await getDocVids();
  const editvids = await getEditVids();

  return (
    <div className="px-10 md:px-20">
      <div className="pb-8">
        <h2 className="mt-4 flex items-center justify-center font-bold text-white text-3xl">Edit Like</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{editvids.map((edit) => (
        <Link href={edit.url} key={edit._id} className="border-2 border-gray-500 rounded-lg p-4 hover:scale-105 hover:border-blue-500 transition">
        {edit.image && (
          <Image
            src={edit.image}
            alt={edit.name}
            width={750}
            height={470}
            className="object-cover rounded-lg"
          />
        )}
        <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          {edit.title}
        </div>
        {/* <div className="text-white pt-3">
          <p className="bg-red-500 w-fit p-2 text-xs font-semibold rounded-full">{docvids.language.toUpperCase()}</p>
        </div> */}
      </Link>
      ))}
      </div>
      </div>
      <div className="pb-8">
        <h2 className="mt-4 flex items-center justify-center font-bold text-white text-3xl">Documentation</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{docvids.map((doc) => (
        <Link href={doc.url} key={doc._id} className="border-2 border-gray-500 rounded-lg p-4 hover:scale-105 hover:border-blue-500 transition">
        {doc.image && (
          <Image
            src={doc.image}
            alt={doc.name}
            width={750}
            height={470}
            className="object-cover rounded-lg"
          />
        )}
        <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          {doc.title}
        </div>
        {/* <div className="text-white pt-3">
          <p className="bg-red-500 w-fit p-2 text-xs font-semibold rounded-full">{docvids.language.toUpperCase()}</p>
        </div> */}
      </Link>
      ))}
      </div>
      </div>
      <div className="pb-8">
        <h2 className="mt-4 flex items-center justify-center font-bold text-white text-3xl">Client Works</h2>
        <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{clivids.map((cli) => (
          <Link href={cli.url} key={cli._id} className="border-2 border-gray-500 rounded-lg p-4 hover:scale-105 hover:border-blue-500 transition">
          {cli.image && (
            <Image
              src={cli.image}
              alt={cli.name}
              width={750}
              height={470}
              className="object-cover rounded-lg"
            />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {cli.title}
          </div>
          {/* <div className="text-white pt-3">
            <p className="bg-red-500 w-fit p-2 text-xs font-semibold rounded-full">{docvids.language.toUpperCase()}</p>
          </div> */}
        </Link>
        ))}
        </div>
      </div>
    </div>
  )

}

export const revalidate = 60;
