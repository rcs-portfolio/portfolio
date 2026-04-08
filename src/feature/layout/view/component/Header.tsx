import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

export async function Header() {
  const t = await getTranslations('nav')

  return (
    <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl shadow-[0_0_20px_rgba(188,0,251,0.15)]">
      <div className="flex items-center justify-between px-6 h-16 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">terminal</span>
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-headline tracking-tighter">
            Rafael Couto
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          <Link 
            href="#home" 
            data-nav-link="#home"
            className="text-slate-400 hover:text-secondary transition-colors duration-200"
          >
            {t('home')}
          </Link>
          <Link 
            href="#about" 
            data-nav-link="#about"
            className="text-slate-400 hover:text-secondary transition-colors duration-200"
          >
            {t('about')}
          </Link>
          <Link
            href="#skills"
            data-nav-link="#skills"
            className="text-slate-400 hover:text-secondary transition-colors duration-200"
          >
            {t('skills')}
          </Link>
          <Link
            href="#work"
            data-nav-link="#work"
            className="text-slate-400 hover:text-secondary transition-colors duration-200"
          >
            {t('work')}
          </Link>
          <Link
            href="#contact"
            data-nav-link="#contact"
            className="text-slate-400 hover:text-secondary transition-colors duration-200"
          >
            {t('contact')}
          </Link>
        </nav>
        
      </div>
    </header>
  )
}
