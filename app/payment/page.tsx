import { MobileHeader } from "@/features/shared/components/mobile-header"
import { BottomNavigation } from "@/features/shared/components/bottom-navigation"
import { PaymentMethodSelection } from "@/features/payment/components/payment-method-selection"

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
