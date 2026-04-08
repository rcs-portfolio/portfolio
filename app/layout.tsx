import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'
import { AppLayout } from '@/feature/layout/view/AppLayout'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const materialSymbols = localFont({
  src: '../public/fonts/material-symbols.woff2',
  variable: '--font-material-symbols',
  weight: '100 700',
  display: 'block',
})

import { getTranslations } from 'next-intl/server'
import { siteConfig } from '@/core/config/site'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('common.seo')

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t('defaultTitle'),
      template: `%s | ${t('defaultTitle')}`,
    },
    description: t('defaultDescription'),
    keywords: t('keywords').split(',').map((k) => k.trim()),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: siteConfig.url,
      title: t('defaultTitle'),
      description: t('defaultDescription'),
      siteName: t('defaultTitle'),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: t('defaultTitle'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('defaultTitle'),
      description: t('defaultDescription'),
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

import { ScrollHighlightScript } from '@/feature/layout/view/component/ScrollHighlightScript'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`dark ${inter.variable} ${spaceGrotesk.variable} ${materialSymbols.variable}`}>
      <head />

      <body className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary-fixed min-h-screen overflow-x-hidden">
        <AppLayout>{children}</AppLayout>
        <ScrollHighlightScript />
      </body>
    </html>
  )
}
