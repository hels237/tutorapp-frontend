import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { StudentGoalsManagement } from "@/components/dashboard/student-goals-management"

export default function StudentGoalsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <StudentGoalsManagement />
      </main>
      <Footer />
    </div>
  )
}
