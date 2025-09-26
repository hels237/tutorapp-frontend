import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { StudentLessonRating } from "@/components/dashboard/student-lesson-rating"

interface PageProps {
  params: {
    lessonId: string
  }
}

export default function RateLessonPage({ params }: PageProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <StudentLessonRating lessonId={params.lessonId} />
      </main>
      <Footer />
    </div>
  )
}
