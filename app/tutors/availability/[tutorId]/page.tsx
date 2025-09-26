import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { TutorPublicAvailability } from "@/components/tutors/tutor-public-availability"

interface TutorAvailabilityPageProps {
  params: {
    tutorId: string
  }
}

export default function TutorAvailabilityPage({ params }: TutorAvailabilityPageProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <TutorPublicAvailability tutorId={params.tutorId} />
      </main>
      <Footer />
    </div>
  )
}
