import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

export async function MobileNav() {
  const t = await getTranslations('nav')

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 px-4 pb-6 flex justify-around items-center">
      <div className="bg-surface-variant/60 backdrop-blur-md w-full h-16 rounded-2xl border border-white/10 flex justify-around items-center shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]">
        <Link 
          href="#home" 
          data-nav-link="#home"
          className="flex flex-col items-center justify-center text-slate-400 p-2 hover:bg-white/10 transition-all duration-200"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-medium uppercase tracking-widest mt-1">{t('home')}</span>
        </Link>
        <Link 
          href="#about" 
          data-nav-link="#about"
          className="flex flex-col items-center justify-center text-slate-400 p-2 hover:bg-white/10 transition-all duration-200"
        >
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-medium uppercase tracking-widest mt-1">{t('about')}</span>
        </Link>
        <Link
          href="#skills"
          data-nav-link="#skills"
          className="flex flex-col items-center justify-center text-slate-400 p-2 hover:bg-white/10 transition-all duration-200"
        >
          <span className="material-symbols-outlined">code</span>
          <span className="text-[10px] font-medium uppercase tracking-widest mt-1">{t('skills')}</span>
        </Link>
        <Link
          href="#work"
          data-nav-link="#work"
          className="flex flex-col items-center justify-center text-slate-400 p-2 hover:bg-white/10 transition-all duration-200"
        >
          <span className="material-symbols-outlined">folder_open</span>
          <span className="text-[10px] font-medium uppercase tracking-widest mt-1">{t('work')}</span>
        </Link>
        <Link
          href="#contact"
          data-nav-link="#contact"
          className="flex flex-col items-center justify-center text-slate-400 p-2 hover:bg-white/10 transition-all duration-200"
        >
          <span className="material-symbols-outlined">mail</span>
          <span className="text-[10px] font-medium uppercase tracking-widest mt-1">{t('contact')}</span>
        </Link>
      </div>
    </nav>
  )
}
