import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { TutorProfilePreview } from "@/components/tutors/tutor-profile-preview"

interface TutorProfilePreviewPageProps {
  params: {
    tutorId: string
  }
}

export default function TutorProfilePreviewPage({ params }: TutorProfilePreviewPageProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <TutorProfilePreview tutorId={params.tutorId} />
      </main>
      <Footer />
    </div>
  )
}
