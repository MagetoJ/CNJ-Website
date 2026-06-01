import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { OrganizationSchema, LocalBusinessSchema } from '@/components/seo/JsonLdSchemas'
import Navbar from '@/components/Navbar'
import { QuizProvider } from '@/context/QuizContext'
import './globals.css'
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton'

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

export const metadata: Metadata = {
  title: 'CNJ Safaris | East African Adventure Tours',
  description: 'Custom safari itineraries, real-time pricing, and seamless bookings for unforgettable East African adventures.',
  generator: 'v0.app',
  keywords: ['Best Kenya safaris', 'Nairobi family safari', 'Affordable Maasai Mara tours', 'safari', 'Kenya', 'Tanzania', 'Uganda', 'Rwanda', 'Maasai Mara', 'Serengeti', 'gorilla trekking'],
  icons: {
    icon: '/Cnj new logo.jpg',
    apple: '/Cnj new logo.jpg',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} dark`} suppressHydrationWarning>
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      <body className="font-sans antialiased bg-deep-black text-gray-100 min-h-screen" suppressHydrationWarning>
        <QuizProvider>
          <Navbar />
          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
          </div>
          <FloatingWhatsAppButton />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </QuizProvider>
      </body>
    </html>
  )
}
