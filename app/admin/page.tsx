import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AdminDashboard } from "@/components/dashboard/admin-dashboard"

export default function AdminPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container safe-area section-padding">
        <AdminDashboard />
      </main>
      
      <Footer />
    </div>
  )
}