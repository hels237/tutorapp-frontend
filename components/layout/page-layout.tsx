import { Header } from "./header"
import { Footer } from "./footer"
import { cn } from "@/lib/utils"

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  showHeader?: boolean
  showFooter?: boolean
}

export function PageLayout({ 
  children, 
  className,
  containerClassName,
  showHeader = true,
  showFooter = true 
}: PageLayoutProps) {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      {showHeader && <Header />}
      
      <main className={cn(
        "flex-1 container safe-area section-padding",
        containerClassName
      )}>
        {children}
      </main>
      
      {showFooter && <Footer />}
    </div>
  )
}

// Composant pour les pages centrées (auth, etc.)
export function CenteredPageLayout({ 
  children, 
  className,
  maxWidth = "max-w-md"
}: {
  children: React.ReactNode
  className?: string
  maxWidth?: string
}) {
  return (
    <PageLayout containerClassName={cn("flex items-center justify-center", className)}>
      <div className={cn("w-full", maxWidth)}>
        {children}
      </div>
    </PageLayout>
  )
}

// Composant pour les sections avec titre
export function SectionLayout({
  title,
  description,
  children,
  className
}: {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn("section-padding", className)}>
      <div className="container safe-area">
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-xl text-3xl lg:text-4xl">{title}</h2>
          {description && (
            <p className="text-xl text-muted-foreground content-width-md mx-auto">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}