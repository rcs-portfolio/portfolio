import { getTranslations } from 'next-intl/server'
import { ContactInfo } from './ContactInfo'

export async function ContactSection() {
  const t = await getTranslations('contact')
  const commonT = await getTranslations('common')

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-16">
      {/* Header */}
      <header className="mb-16 md:mb-24 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-secondary"></div>
          <span className="font-label text-secondary text-xs uppercase tracking-[0.3em]">
            {commonT('contactsLabel')}
          </span>
          <div className="h-px w-8 bg-secondary"></div>
        </div>
        <h2 className="font-headline text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-none">
          {t('title')}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('titleHighlight')}
          </span>
        </h2>
        <p className="text-on-surface-variant max-w-xl mx-auto text-lg md:text-xl font-light leading-relaxed">
          {t('subtitle')}
        </p>
      </header>

      <ContactInfo />
    </section>
  )
}
