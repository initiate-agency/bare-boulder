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
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'https://bare-boulder.payloadcms.app/admin',
        permanent: true
      }
    ]
  }
}
