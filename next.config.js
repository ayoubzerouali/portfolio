/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import createMDX from '@next/mdx'
import "./src/env.js";

/** @type {import("next").NextConfig} */
// const config = {
//
//     images: {
//         domains: ['images.pexels.com'],
//     },
// };

// export default config;

/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ['images.pexels.com'],
    },
    // Configure `pageExtensions` to include markdown and MDX files
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below
}

const withMDX = createMDX({
    // Add markdown plugins here, as desired
  // extension: /\.(md|mdx)$/,
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
