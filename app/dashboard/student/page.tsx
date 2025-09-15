import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { StudentDashboard } from "@/components/dashboard/student-dashboard"

export default function StudentDashboardPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <StudentDashboard />
      </main>
      <Footer />
    </div>
  )
}
