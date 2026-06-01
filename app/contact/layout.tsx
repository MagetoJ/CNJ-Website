import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | CNJ Safaris',
  description: 'Get in touch with CNJ Safaris to start planning your dream East African safari adventure.',
  icons: {
    icon: '/Cnj new logo.jpg',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  )
}