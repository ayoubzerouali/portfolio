import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    //domains: ['images.pexels.com'],
    //images: {
    //    remotePatterns: [new URL('https://images.pexels.com/photos/**')],
    //},
    images: {
        domains: ['images.pexels.com'],
    },
};

export default nextConfig;
