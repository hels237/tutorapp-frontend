import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { JoinClassroom } from "@/components/classroom/join-classroom"

interface JoinClassroomPageProps {
  params: {
    sessionId: string
  }
}

export default function JoinClassroomPage({ params }: JoinClassroomPageProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <JoinClassroom sessionId={params.sessionId} />
      </main>
      <Footer />
    </div>
  )
}
