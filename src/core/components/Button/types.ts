import { ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

export interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  icon?: string
  iconPosition?: 'left' | 'right'
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  type?: 'button' | 'submit' | 'reset'
  href?: string
  target?: string
  rel?: string
  blackText?: boolean
  disabled?: boolean
}
