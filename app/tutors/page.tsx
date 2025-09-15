import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { TutorSearch } from "@/components/tutors/tutor-search"

export default function TutorsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h1 className="font-playfair text-4xl font-bold">Trouvez votre tuteur idéal</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez des tuteurs qualifiés et expérimentés dans toutes les matières
            </p>
          </div>
          <TutorSearch />
        </div>
      </main>
      <Footer />
    </div>
  )
}
