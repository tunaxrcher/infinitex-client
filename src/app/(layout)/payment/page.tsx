import { MobileHeader } from "@src/shared/components/mobile-header"
import { BottomNavigation } from "@src/shared/components/bottom-navigation"
import { PaymentMethodSelection } from "@src/features/payment/components/payment-method-selection"

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
