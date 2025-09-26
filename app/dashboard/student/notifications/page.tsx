import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { StudentNotificationsManagement } from "@/components/dashboard/student-notifications-management"

export default function StudentNotificationsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <StudentNotificationsManagement />
      </main>
      <Footer />
    </div>
  )
}
