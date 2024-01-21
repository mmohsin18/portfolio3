import React from 'react'
import { PortableTextInput, defineType } from 'sanity'
import { groq } from 'next-sanity'
import { client } from '../../sanity/lib/client';
import Bloglist from './Bloglist';
import post from '../../sanity/schemas/post';

const query = groq`
*[_type == "post"] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export default async function page() {
  const posts = await client.fetch(query);
  return (
    <div>
      <Bloglist posts={posts} />
    </div>
  )
}

export const revalidate = 10;