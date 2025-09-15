"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, BookOpen, Users, Calendar } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container safe-area flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="heading-lg text-xl">TutorApp</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Matières</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <div className="row-span-3">
                    <NavigationMenuLink asChild>
                      <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                        <BookOpen className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">Toutes les matières</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Mathématiques, Sciences, Langues, Histoire et plus encore
                        </p>
                      </div>
                    </NavigationMenuLink>
                  </div>
                  <div className="grid gap-1">
                    <Link
                      href="/subjects/mathematics"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Mathématiques</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Algèbre, Géométrie, Calcul
                      </p>
                    </Link>
                    <Link
                      href="/subjects/sciences"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Sciences</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Physique, Chimie, Biologie
                      </p>
                    </Link>
                    <Link
                      href="/subjects/languages"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Langues</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Français, Anglais, Espagnol
                      </p>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/tutors" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Trouver un Tuteur
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/become-tutor" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Devenir Tuteur
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Connexion</Link>
            </Button>
            <Button asChild>
              <Link href="/register">S'inscrire</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] safe-area">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/tutors"
                  className="flex items-center space-x-2 text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <Users className="h-5 w-5" />
                  <span>Trouver un Tuteur</span>
                </Link>
                <Link
                  href="/become-tutor"
                  className="flex items-center space-x-2 text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <BookOpen className="h-5 w-5" />
                  <span>Devenir Tuteur</span>
                </Link>
                <Link
                  href="/subjects"
                  className="flex items-center space-x-2 text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <Calendar className="h-5 w-5" />
                  <span>Matières</span>
                </Link>
                <div className="pt-4 border-t">
                  <div className="flex flex-col space-y-2">
                    <Button variant="ghost" asChild className="justify-start">
                      <Link href="/login" onClick={() => setIsOpen(false)}>
                        Connexion
                      </Link>
                    </Button>
                    <Button asChild className="justify-start">
                      <Link href="/register" onClick={() => setIsOpen(false)}>
                        S'inscrire
                      </Link>
                    </Button>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
