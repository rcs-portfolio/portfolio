import { Header } from './component/Header'
import { Footer } from './component/Footer'
import { MobileNav } from './component/MobileNav'

interface AppLayoutProps {
  readonly children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header />
      
      <main className="relative pt-16 bg-mesh">
        {children}
      </main>
      
      <Footer />
      <MobileNav />
    </>
  )
}
