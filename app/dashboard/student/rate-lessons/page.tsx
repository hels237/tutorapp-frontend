import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { StudentLessonsToRate } from "@/components/dashboard/student-lessons-to-rate"

export default function RateLessonsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <StudentLessonsToRate />
      </main>
      <Footer />
    </div>
  )
}
