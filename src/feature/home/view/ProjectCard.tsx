import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/core/utils'

interface CodeLink {
  label: string
  url: string
}

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  challenge: string
  codeUrls: CodeLink[]
  imageUrl: string
  challengeLabel: string
  reversed?: boolean
}

export function ProjectCard({
  title,
  description,
  tags,
  challenge,
  codeUrls,
  imageUrl,
  challengeLabel,
  reversed = false,
}: ProjectCardProps) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center bg-surface-container-high rounded-2xl overflow-hidden group">
      <div
        className={cn(
          'lg:col-span-7 relative h-72 lg:h-125 overflow-hidden',
          reversed ? 'order-1 lg:order-2' : 'order-1'
        )}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-700"
        />
        <div
          className={cn(
            'absolute inset-0',
            reversed
              ? 'bg-linear-to-l from-surface-container-high via-transparent to-transparent'
              : 'bg-linear-to-r from-transparent via-transparent to-surface-container-high'
          )}
        />
        <div className="absolute inset-0 bg-linear-to-t from-surface-container-high via-transparent to-transparent lg:hidden" />
      </div>

      <div
        className={cn(
          'lg:col-span-5 p-8 lg:p-12',
          reversed ? 'order-2 lg:order-1' : 'order-2'
        )}
      >
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span
              key={tag}
              className={cn(
                'px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider',
                i === 0
                  ? 'bg-secondary-container text-on-secondary-container'
                  : 'bg-surface-container-highest text-on-surface-variant'
              )}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-headline text-3xl font-bold mb-4 tracking-tight">{title}</h3>

        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{description}</p>

        <div className="mb-8">
          <p className="text-[10px] uppercase font-bold text-primary mb-2 tracking-widest">
            {challengeLabel}
          </p>
          <p className="text-on-surface text-sm leading-relaxed">{challenge}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {codeUrls.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-outline-variant/20 rounded-lg hover:bg-white/5 transition-all duration-200 text-sm font-medium"
            >
              <span className="material-symbols-outlined text-lg">terminal</span>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </article>
  )
}
