import { VirtualClassroom } from "@/components/classroom/virtual-classroom"

interface ClassroomPageProps {
  params: {
    sessionId: string
  }
}

export default function ClassroomPage({ params }: ClassroomPageProps) {
  return (
    <div className="h-screen overflow-hidden">
      <VirtualClassroom sessionId={params.sessionId} />
    </div>
  )
}
