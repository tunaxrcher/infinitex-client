"use client"
import { MobileHeader } from "@/components/mobile-header"
import { BottomNavigation } from "@/components/bottom-navigation"
import { LoanApplicationFlow } from "@/components/loan-application-flow"

export default function ApplyPage() {
  return (
    <>
      <MobileHeader title="ขอสินเชื่อ" showNotifications={false} />
      <main className="flex-1 pb-20">
        <LoanApplicationFlow />
      </main>
      <BottomNavigation />
    </>
  )
}
