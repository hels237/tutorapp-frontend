import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { TutorDashboard } from "@/components/dashboard/tutor-dashboard"

export default function TutorDashboardPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <TutorDashboard />
      </main>
      <Footer />
    </div>
  )
}
