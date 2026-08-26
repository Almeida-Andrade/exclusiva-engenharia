import type { Metadata } from 'next'
import { Archivo, Inter } from 'next/font/google'
import { URL_SITE } from '@/lib/site'
import './globals.css'

const titulo = Archivo({
  subsets: ['latin'], variable: '--fonte-titulo', display: 'swap',
})
const corpo = Inter({
  subsets: ['latin'], variable: '--fonte-corpo', display: 'swap',
})

const DESCRICAO =
  'Construção, incorporação e obras de grande porte no Maranhão desde 1989. ' +
  'Uma empresa do Grupo Almeida Andrade.'

export const metadata: Metadata = {
  metadataBase: new URL(URL_SITE),
  title: {
    default: 'Exclusiva Engenharia — Construção e incorporação no Maranhão',
    template: '%s · Exclusiva Engenharia',
  },
  description: DESCRICAO,
  applicationName: 'Exclusiva Engenharia',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Exclusiva Engenharia',
    title: 'Exclusiva Engenharia — Construção e incorporação no Maranhão',
    description: DESCRICAO,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Exclusiva Engenharia' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${titulo.variable} ${corpo.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
        {children}
      </body>
    </html>
  )
}
