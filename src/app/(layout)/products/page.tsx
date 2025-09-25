import { MobileHeader } from "@src/shared/components/mobile-header"
import { BottomNavigation } from "@src/shared/components/bottom-navigation"
import { LoansList } from "@src/features/products/components/loans-list"
import { FloatingActionButton } from "@src/shared/components/floating-action-button"

export default function ProductsPage() {
  return (
    <>
      <MobileHeader title="ผลิตภัณฑ์ของฉัน" />
      <main className="flex-1 pb-20 page-main-bg-animate-gradient bg-gradient-to-b from-transparent via-transparent to-gray-50 dark:to-gray-900 min-h-screen">
        <LoansList />
        <FloatingActionButton />
      </main>
      <BottomNavigation />
    </>
  )
}
