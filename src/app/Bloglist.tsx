import Image from "next/image";
import urlFor from "../../sanity/lib/urlFor";
import { Post } from "../../typings";
import ClientSideRoute from "../../ClientSideRoute";

type Props = {
    posts: Post[];
};

function Bloglist({ posts }: Props) {
  return (
    <div>
      <hr className="border-slate-400 mb-10"/>

      <div className="grid grid-cols-1 md:grid-cols-2
      px-10 gap-10 gap-y-16 pb-24">
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer flex flex-col">
              <div className="relative w-full h-80 drop-shadow-xl 
                  group-hover:scale-105 transition-transform duration-200 ease-in-out">
                <Image 
                  className= "object-cover object-left rounded-lg"
                  src={urlFor(post.mainImage).url()}
                  alt="hello"
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20
                  bg-black backdrop-blur-lg rounded drop-shadow-lg
                    text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString("en-Us", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    {post.categories.map(category => (
                      <div key={category._id} className="bg-slate-700 text-center text-white
                        px-3 py-1 rounded-full text-xsm font-regular">
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  )
}

export default Bloglist

export const revalidate = 10;