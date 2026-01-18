import { createMDX } from 'fumadocs-mdx/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: false,
}

const withMDX = createMDX({
  // customise the config file path
  configPath: 'source.config.ts',
})

export default withMDX(nextConfig)
