import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // images: {
  //   remotePatterns: [
  //     new URL("https://res.cloudinary.com/dbcykhgzd/image/upload/v1770562999/7iwiolo8t34-1770562995708-loginpage.png.png"),
  //   ],
  // }

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
};

export default nextConfig;
