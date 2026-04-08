import { cn } from '@/core/utils'
import { getTranslations } from 'next-intl/server'

interface AboutCard {
  id: string
  title: string
  description: string
  icon: string
  size: 'small' | 'large'
  tags?: string[]
}

export async function AboutSection() {
  const t = await getTranslations('about')
  const commonT = await getTranslations('common')
  const cards = t.raw('cards') as AboutCard[]

  return (
    <section id="about" className="py-24 px-6 mt-20 md:mt-0 bg-surface-container-low/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-4">
          <div className="space-y-4 max-w-xl">
             <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-secondary"></div>
              <span className="font-label text-secondary text-xs uppercase tracking-[0.3em]">{commonT('trajectoryLabel')}</span>
            </div>
            <h3 className="font-headline text-3xl md:text-5xl font-bold leading-tight">
              {t('title')}
            </h3>
          </div>
          <p className="text-on-surface-variant font-body text-lg max-w-sm leading-relaxed mt-4 md:mt-12">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ title, description, icon, size, tags }: Readonly<AboutCard>) {
  const isLarge = size === 'large'
  
  return (
    <div className={cn(
      "glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden group transition-all duration-500 hover:border-white/10 hover:shadow-[0_0_40px_rgba(188,0,251,0.1)]",
      isLarge ? "md:col-span-2" : "md:col-span-1"
    )}>
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
        <span className="material-symbols-outlined text-9xl">{icon}</span>
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between gap-8">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-surface-variant/50 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">{icon}</span>
          </div>
          
          <h4 className="font-headline text-2xl font-bold mb-4 bg-gradient-to-br from-on-surface to-on-surface-variant bg-clip-text text-transparent group-hover:text-on-surface">
            {title}
          </h4>
          <p className="text-on-surface-variant leading-relaxed max-w-md group-hover:text-on-surface/80 transition-colors whitespace-pre-line">
            {description}
          </p>
        </div>

        {tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span key={tag} className="px-4 py-1.5 bg-surface-container-highest/50 backdrop-blur rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
