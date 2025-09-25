"use client"
import { MobileHeader } from "@src/shared/components/mobile-header"
import { BottomNavigation } from "@src/shared/components/bottom-navigation"
import { LoanApplicationFlow } from "@src/features/loan/components/loan-application-flow"

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
