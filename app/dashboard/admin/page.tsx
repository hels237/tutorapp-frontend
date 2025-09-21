import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AdminDashboard } from "@/components/dashboard/admin-dashboard"

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <AdminDashboard />
      </main>
      <Footer />
    </div>
  )
}
