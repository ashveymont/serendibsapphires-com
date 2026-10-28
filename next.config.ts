import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old routes from the previous site, kept so existing links and search results still land.
  async redirects() {
    return [
      { source: "/collection", destination: "/sapphires", permanent: true },
      { source: "/collection/:slug", destination: "/sapphires/:slug", permanent: true },
      { source: "/house", destination: "/about", permanent: true },
      { source: "/consultation", destination: "/inquire", permanent: true },
    ];
  },
};

export default nextConfig;
