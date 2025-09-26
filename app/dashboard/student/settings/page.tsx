import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { StudentSettingsManagement } from "@/components/dashboard/student-settings-management"

export default function StudentSettingsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <StudentSettingsManagement />
      </main>
      <Footer />
    </div>
  )
}
