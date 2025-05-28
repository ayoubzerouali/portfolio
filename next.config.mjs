import withMDX from '@next/mdx'({
    extension: /\.mdx?$/
})

const nextConfig = {
    // your existing T3 config
    pageExtensions: ['ts', 'tsx', 'mdx']
}

export default withMDX(nextConfig)
