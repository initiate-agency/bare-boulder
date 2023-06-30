module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bare-boulder.payloadcms.app'
      }
    ],
    domains: ['localhost', 'tailwindui.com']
  }
}
