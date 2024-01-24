import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import clientConfig from './config/client-config'
import { Pages } from "@/types/Page";



export async function getProgs(): Promise<Pages[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "projects"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      language
    }`
  )
}

export async function getVids(): Promise<Pages> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "videos"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}


export async function getCliVids(): Promise<Pages> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "videos" && category match "client"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      category,
      content
    }`
  )
}

export async function getDocVids(): Promise<Pages> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "videos" && category match "documentation"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      category,
      content
    }`
  )
}

export async function getEditVids(): Promise<Pages> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "videos" && category match "edit"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      category,
      content
    }`
  )
}

console.log(getDocVids)