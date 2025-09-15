import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ParentDashboard } from "@/components/dashboard/parent-dashboard"

export default function ParentDashboardPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <ParentDashboard />
      </main>
      <Footer />
    </div>
  )
}
