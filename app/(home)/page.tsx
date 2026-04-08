import { HomePage } from '@/feature/home/view/HomePage'
import type { Metadata } from 'next'

import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('common.seo')

  return {
    title: t('defaultTitle'),
    description: t('defaultDescription'),
    alternates: {
      canonical: '/',
    },
  }
}

export default function Page() {
  return <HomePage />
}
