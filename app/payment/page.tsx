import { MobileHeader } from "@/components/mobile-header"
import { BottomNavigation } from "@/components/bottom-navigation"
import { PaymentMethodSelection } from "@/components/payment-method-selection"

export default function PaymentPage() {
  return (
    <>
      <MobileHeader title="ชำระเงิน" />
      <main className="flex-1 pb-20">
        <PaymentMethodSelection />
      </main>
      <BottomNavigation />
    </>
  )
}
