import { getTranslations } from 'next-intl/server'

export async function ContactInfo() {
  const t = await getTranslations('contact')

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Direct Channel */}
      <div className="bg-surface-container-low p-8 rounded-xl space-y-8 border border-white/5 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-4">
              {t('directChannel.title')}
            </h3>
            <a
              href={`mailto:${t('directChannel.email')}`}
              className="text-lg md:text-2xl font-headline font-medium hover:text-primary transition-colors duration-200 flex items-center gap-3 whitespace-nowrap"
            >
              {t('directChannel.email')}
              <span className="material-symbols-outlined text-on-surface-variant text-base flex-shrink-0">
                open_in_new
              </span>
            </a>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-4">
              {t('social.title')}
            </h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/rafaelcsilvadev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-surface-container-highest rounded-full text-sm font-medium hover:bg-white/10 transition-all border border-white/5 flex items-center gap-2 group"
              >
                <span className="text-primary group-hover:scale-110 transition-transform">
                  {t('social.github')}
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/rafa-couto"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-surface-container-highest rounded-full text-sm font-medium hover:bg-white/10 transition-all border border-white/5 flex items-center gap-2 group"
              >
                <span className="text-primary group-hover:scale-110 transition-transform">
                  {t('social.linkedin')}
                </span>
              </a>
              <a
                href="https://www.youtube.com/@rafa_couto_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-surface-container-highest rounded-full text-sm font-medium hover:bg-white/10 transition-all border border-white/5 flex items-center gap-2 group"
              >
                <span className="text-primary group-hover:scale-110 transition-transform">
                  {t('social.youtube')}
                </span>
              </a>
              <a
                href="https://www.99freelas.com.br/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-surface-container-highest rounded-full text-sm font-medium hover:bg-white/10 transition-all border border-white/5 flex items-center gap-2 group"
              >
                <span className="text-primary group-hover:scale-110 transition-transform">
                  {t('social.freelas')}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
