/** @type {import('next').NextConfig} */
/** @type {import('rehype-pretty-code').Options} */

import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const options = {
  theme: "poimandres",
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypePrettyCode, options],
      [rehypeAutolinkHeadings],
      rehypeSlug,
    ],
  },
});

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ["mdx", "ts", "tsx"],
};
export default withMDX(nextConfig);
