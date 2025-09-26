import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { TutorNotificationsManagement } from "@/components/dashboard/tutor-notifications-management"

export default function TutorNotificationsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <TutorNotificationsManagement />
      </main>
      <Footer />
    </div>
  )
}
