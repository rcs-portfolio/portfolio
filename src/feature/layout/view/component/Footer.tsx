import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

export async function Footer() {
  const t = await getTranslations('footer')
  const commonT = await getTranslations('common')
  
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface-container-low w-full pt-12 pb-24 px-6 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full max-w-7xl mx-auto">
        <div className="text-center md:text-left">
          <span className="text-primary font-bold text-lg">Rafael Couto</span>
          <p className="text-xs text-slate-500 mt-1">
            {commonT('copyright', { year: currentYear })}
          </p>
        </div>
        
        <div className="flex gap-8">
          <Link
            href="https://github.com/rafaelcsilvadev"
            target="_blank"
            className="text-slate-500 hover:text-primary transition-all text-xs font-medium uppercase tracking-widest"
          >
            {t('github')}
          </Link>
          <Link
            href="https://www.linkedin.com/in/rafa-couto"
            target="_blank"
            className="text-slate-500 hover:text-primary transition-all text-xs font-medium uppercase tracking-widest"
          >
            {t('linkedin')}
          </Link>
          <Link
            href="https://www.youtube.com/@rafa_couto_dev"
            target="_blank"
            className="text-slate-500 hover:text-primary transition-all text-xs font-medium uppercase tracking-widest"
          >
            {t('youtube')}
          </Link>
          <Link
            href="https://www.99freelas.com.br/dashboard"
            target="_blank"
            className="text-slate-500 hover:text-primary transition-all text-xs font-medium uppercase tracking-widest"
          >
            {t('freelas')}
          </Link>
        </div>
      </div>
    </footer>
  )
}
