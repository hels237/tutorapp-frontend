import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { TutorAvailabilityManagement } from "@/components/dashboard/tutor-availability-management"

export default function TutorAvailabilityPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <TutorAvailabilityManagement />
      </main>
      <Footer />
    </div>
  )
}
