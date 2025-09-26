import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { StudentProfileManagement } from "@/components/dashboard/student-profile-management"

export default function StudentProfilePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <StudentProfileManagement />
      </main>
      <Footer />
    </div>
  )
}
