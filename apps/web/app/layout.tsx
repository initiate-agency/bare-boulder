import '../styles/global.css'
import 'ui/styles.css'
import { Inter } from 'next/font/google'

import { MainMenu } from '@/components/MainMenu'
import { Footer } from '@/components/Footer'

const NAVIGATION = [
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About Us', href: '/about' }
]

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} overflow-x-hidden font-sans`}>
        <MainMenu
          companyLogoUrl={'/images/bare-boulder-logo-dark.png'}
          navigation={NAVIGATION}
        />
        {children}
        <Footer
          companyLogoUrl={'/images/bare-boulder-logo.webp'}
          companyName={'Bare Boulder Design & Repair Company'}
        />
      </body>
    </html>
  )
}
