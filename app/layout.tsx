import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Martin Mbithi | Senior Software Engineer',
  description: 'Software Engineer with 7+ years of experience delivering scalable web, mobile, and cloud-based systems across government and private-sector environments.',
  keywords: ['Software Engineer', 'Full-Stack Developer', 'Kenya', 'Martin Mbithi', 'Next.js', 'React'],
  authors: [{ name: 'Martin Mbithi' }],
  openGraph: {
    title: 'Martin Mbithi | Senior Software Engineer',
    description: 'Scalable web, mobile, and cloud-based systems across government and private-sector environments.',
    url: 'https://martmbithi.github.io',
    siteName: 'Martin Mbithi Portfolio',
    locale: 'en_KE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
