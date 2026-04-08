import { cn } from '@/core/utils'
import { getTranslations } from 'next-intl/server'

interface SkillItem {
  name: string
  icon: string
  description: string
  color: 'primary' | 'secondary' | 'tertiary'
}

interface SkillCategory {
  id: string
  title: string
  items: SkillItem[]
}

const GradientSpan = (chunks: React.ReactNode) => (
  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
    {chunks}
  </span>
)

export async function SkillsSection() {
  const t = await getTranslations('skills')
  const commonT = await getTranslations('common')
  const categories = t.raw('categories') as SkillCategory[]

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16 md:mb-24 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-secondary"></div>
            <span className="font-label text-secondary text-xs uppercase tracking-[0.3em]">{commonT('skillsLabel')}</span>
          </div>
          <h2 className="text-[3.5rem] md:text-[5rem] font-headline font-bold leading-none tracking-tighter mb-4">
            {t.rich('title', {
              span: GradientSpan
            }) || (
              <>
                Arsenal <br/>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Tecnológico.</span>
              </>
            )}
          </h2>
          <p className="max-w-xl text-on-surface-variant text-lg font-light leading-relaxed">
            {t('description')}
          </p>
        </header>

        {categories.map((category) => (
          <div key={category.id} className="mb-24 last:mb-0">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent"></div>
              <h3 className="font-headline text-2xl font-medium tracking-tight whitespace-nowrap px-4 bg-surface/50 backdrop-blur-sm py-1 rounded-full border border-white/5">
                {category.title}
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-10 md:gap-14">
              {category.items.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function SkillCard({ name, icon, description, color }: Readonly<SkillItem>) {
  const glowClass = color === 'primary' ? 'group-hover:border-primary/30' : 'group-hover:border-secondary/30'
  const iconColorClass = color === 'primary' ? 'text-primary' : 'text-secondary'
  const tooltipBgClass = color === 'primary' ? 'bg-primary-container text-on-primary-container' : 'bg-secondary-container text-on-secondary-container'
  const tooltipGlowClass = color === 'primary' ? 'shadow-[0_0_24px_-4px_rgba(188,0,251,0.4)]' : 'shadow-[0_0_24px_-4px_rgba(0,203,254,0.4)]'

  return (
    <div className={cn(
      "group relative flex flex-col items-center justify-center p-6 sm:p-10 w-[140px] sm:w-[220px] rounded-2xl bg-surface-container-low border border-white/5 transition-all duration-300 flex-shrink-0",
      glowClass
    )}>
      <span className={cn("material-symbols-outlined text-4xl mb-3 group-hover:scale-110 transition-transform duration-300", iconColorClass)}>
        {icon}
      </span>
      <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant group-hover:text-on-surface transition-colors">
        {name}
      </span>

      {/* Tooltip emulation using CSS transitions */}
      <div className={cn(
        "absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wide whitespace-nowrap z-20",
        tooltipBgClass,
        tooltipGlowClass,
        "translate-y-2 group-hover:translate-y-0"
      )}>
        {description}
      </div>
    </div>
  )
}
