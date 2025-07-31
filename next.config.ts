import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_API_URL: 'http://localhost:1337/api/pages?populate=Image',
    NEXT_PUBLIC_IMAGE_URL: 'http://localhost:1337',
  },
  images: {
    domains: ['localhost:1337', 'localhost'],
    
  },
};


export default nextConfig;
