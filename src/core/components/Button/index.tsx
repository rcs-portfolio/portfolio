import Link from 'next/link'
import { cn } from '@/core/utils'
import { ButtonProps } from './types'

export function Button({
  children,
  variant = 'primary',
  icon,
  iconPosition = 'right',
  className,
  onClick,
  type = 'button',
  href,
  target,
  rel,
  blackText = false,
  disabled = false,
}: Readonly<ButtonProps>) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase tracking-wider text-sm transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
  
  const variants = {
    primary: cn(
      "bg-gradient-to-r from-primary to-secondary shadow-[0_0_24px_rgba(188,0,251,0.25)] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(188,0,251,0.35)]",
      blackText ? "text-black" : "text-on-primary-fixed"
    ),
    secondary: "bg-surface-variant/40 backdrop-blur border border-white/5 hover:bg-surface-variant/60 text-on-surface",
    ghost: "bg-transparent hover:bg-white/5 text-on-surface-variant"
  }

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="material-symbols-outlined text-xl">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="material-symbols-outlined text-xl">{icon}</span>
      )}
    </>
  )

  const combinedClassName = cn(baseStyles, variants[variant], "px-8 py-3 md:py-4", className)

  if (href) {
    return (
      <Link 
        href={href} 
        target={target} 
        rel={rel} 
        className={combinedClassName}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
    >
      {content}
    </button>
  )
}
