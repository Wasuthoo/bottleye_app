import type { Metadata } from 'next'
import { Inter, Roboto, Poppins, Noto_Sans_Thai } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  subsets: ['latin'],
  variable: "--font-roboto",
  weight: ["400"]
})
const poppins = Poppins({
  subsets: ['latin'],
  variable: "--font-poppins",
  weight: ["400"]
})


export const metadata: Metadata = {
  title: 'Bottleye',
  description: 'See the Beautiful World',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable}`}>{children}</body>
    </html>
  )
}
