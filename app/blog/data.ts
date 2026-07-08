export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  author: string;
  date: string;
  readTime: string;
};

export const posts: BlogPost[] = [
  {
    slug: "el-yunque-tours",
    title: "Now Offering El Yunque Tours",
    description:
      "We are excited to announce that De Tour Con Ali now offers guided tours to El Yunque National Forest — the only tropical rainforest in the US National Forest System. Explore the Cloud Forest, summit El Yunque Peak, and discover endemic wildlife with our certified guides.",
    image: "/ingested/detourconali/blog-el-yunque-tours.webp",
    tag: "Announcements",
    author: "Alicia Torregrosa",
    date: "April 12, 2023",
    readTime: "3 min read",
  },
  {
    slug: "family-trip-puerto-rico",
    title: "How To Plan a Memorable Trip to Puerto Rico with Your Kids",
    description:
      "Puerto Rico is a perfect family destination with kid-friendly activities, beautiful beaches, and rich culture. Here are our top tips for planning a family trip the whole crew will remember.",
    image: "/ingested/detourconali/img-034.webp",
    tag: "Travel Tips",
    author: "Alicia Torregrosa",
    date: "September 30, 2022",
    readTime: "3 min read",
  },
  {
    slug: "tour-guide-tips-explore-puerto-rico",
    title: "A Tour Guide's Tips to Explore Puerto Rico",
    description:
      "As local Puerto Rico tour guides, we know all the best spots — from hidden waterfalls to secret beaches. Here are our insider tips for exploring the island like a local.",
    image: "/ingested/detourconali/blog-tour-guide-tips.webp",
    tag: "Insider Tips",
    author: "Alicia Torregrosa",
    date: "August 29, 2022",
    readTime: "2 min read",
  },
  {
    slug: "packing-list-puerto-rico",
    title: "Planning a Trip to Puerto Rico? 6 Things You Should Not Forget to Bring",
    description:
      "Packing for Puerto Rico? Our experienced guides share the six essential items you need for a comfortable and enjoyable island adventure.",
    image: "/ingested/detourconali/img-036.webp",
    tag: "Travel Tips",
    author: "Alicia Torregrosa",
    date: "August 26, 2022",
    readTime: "3 min read",
  },
];
