import { groq } from 'next-sanity';
import React from 'react'
import { client } from '../../../../sanity/lib/client';
import Image from 'next/image';
import urlFor from '../../../../sanity/lib/urlFor';
import category from '../../../../sanity/schemas/category';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/app/RichTextComponents';


type Props = {
    params: {
        slug: string;
    };
};

async function Post({params: {slug}}: Props) {
    const query = groq`
        *[_type=='post' && slug.current == $slug][0]
        {
            ...,
            author->,
            categories[]->
        }
    `


const post = await client.fetch(query, { slug });

        // console.log(post.categories)
    return(
        <article className='px-10 pb-28'>
            <section className='space-y-2  text-white py-3'>
                <div className='relative min-h-56 flex flex-col md:flex-row
                    justify-between'>
                    <div className='absolute top-0 w-full rounded-lg h-full opacity-20 blur-sm p-10'>
                        <Image 
                        className= "object-cover object-left rounded-lg"
                        src={urlFor(post.mainImage).url()}
                        alt="hello"
                        fill
                        />
                    </div>
                    <section className='p-5 w-full h-full bg-slate-500'>
                        <div className='flex h-full flex-col justify-between px-4 gap-y-5'>
                            <div>
                                <h1 className='text-4xl mb-4 font-extrabold'>{post.title}</h1>
                                <p>
                                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                        </div>
                        <div className='mt-6 flex items-center justify-between px-5'>
                            <div className='flex items-center space-x-2'>
                                <Image 
                                    className='rounded-full'
                                    src={urlFor(post.author.image).url()}
                                    alt={post.author.name}
                                    width={40}
                                    height={40}
                                />
                                <div className='w-64'>
                                    <h3 className='text-lg font-bold'>{post.author.name}</h3>
                                </div>
                            </div>
                            <div className='flex items-center justify-center py-3'>
                                {post.categories.map((category: { _id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | Iterable<React.ReactNode> | null | undefined; }) => (
                                <p key={category._id} 
                                    className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    {category.title}
                                </p>
                            ))}
                            </div>
                        </div>
                        
                    </section>  
                </div>    
            </section>
            <PortableText value={post.body} components={RichTextComponents} />
        </article>
    )
}

export const revalidate = 10;

export default Post;