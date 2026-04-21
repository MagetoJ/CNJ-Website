import type { Metadata, Viewport } from 'next'
import { Geist_Mono } from 'next/font/google'
import { Playfair_Display, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { OrganizationSchema, LocalBusinessSchema } from '@/components/seo/JsonLdSchemas'
import Navbar from '@/components/Navbar'
import { QuizProvider } from '@/context/QuizContext'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
});

const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'CNJ Safaris | East African Adventure Tours',
  description: 'The world is a book, discover every page. Custom safari itineraries, real-time pricing, and seamless bookings for unforgettable East African adventures in Kenya, Tanzania, Uganda & Rwanda.',
  generator: 'v0.app',
  keywords: ['safari', 'Kenya', 'Tanzania', 'Uganda', 'Rwanda', 'Maasai Mara', 'Serengeti', 'gorilla trekking'],
  icons: {
    icon: '/Cnj new logo.jpg',
    apple: '/Cnj new logo.jpg',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#064E3B',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} bg-white`} suppressHydrationWarning>
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      <body className="font-sans antialiased bg-white text-jungle-dark" suppressHydrationWarning>
        <QuizProvider>
          <Navbar />
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </QuizProvider>
      </body>
    </html>
  )
}
