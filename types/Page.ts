import { PortableTextBlock } from "sanity"

export type Pages = {
  _id: string,
  _createdAt: Date,
  title: string,
  slug: string,
  image: string;
  url: string;
  content: PortableTextBlock[]
};