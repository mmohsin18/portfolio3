import { PortableTextBlock } from "sanity"

export type Pages = {
  map(arg0: (vid: any) => JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>;
  language: any;
  title: string;
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
};