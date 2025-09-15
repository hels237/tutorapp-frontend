import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { TutorProfile } from "@/components/tutors/tutor-profile"

interface TutorProfilePageProps {
  params: {
    id: string
  }
}

export default function TutorProfilePage({ params }: TutorProfilePageProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <TutorProfile tutorId={params.id} />
      </main>
      <Footer />
    </div>
  )
}
