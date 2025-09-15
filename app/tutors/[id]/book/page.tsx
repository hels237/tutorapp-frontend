import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BookingForm } from "@/components/tutors/booking-form"

interface BookingPageProps {
  params: {
    id: string
  }
}

export default function BookingPage({ params }: BookingPageProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <BookingForm tutorId={params.id} />
      </main>
      <Footer />
    </div>
  )
}
