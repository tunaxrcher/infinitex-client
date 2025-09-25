import { MobileHeader } from "@/shared/components/mobile-header"
import { BottomNavigation } from "@/shared/components/bottom-navigation"
import { BillsList } from "@/features/bills/components/bills-list"

export default function BillsPage() {
  return (
    <>
      <MobileHeader title="ดูบิล / จ่ายบิล" showBackButton={true} />
      <main className="flex-1 pb-20 page-main-bg-animate-gradient bg-gradient-to-b from-transparent via-transparent to-gray-50 dark:to-gray-900 min-h-screen">
        <BillsList />
      </main>
      <BottomNavigation />
    </>
  )
}
