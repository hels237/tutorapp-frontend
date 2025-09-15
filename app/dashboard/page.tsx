import { redirect } from "next/navigation"

// This would normally check user authentication and role
// For demo purposes, we'll redirect to student dashboard
export default function DashboardPage() {
  // Mock user role check
  const userRole = "student" // This would come from auth context

  redirect(`/dashboard/${userRole}`)
}
