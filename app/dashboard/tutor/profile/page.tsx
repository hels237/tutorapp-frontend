import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { TutorProfileManagement } from "@/components/dashboard/tutor-profile-management"

export default function TutorProfileManagementPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <TutorProfileManagement />
      </main>
      <Footer />
    </div>
  )
}
