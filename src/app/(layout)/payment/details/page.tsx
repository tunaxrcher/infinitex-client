import { MobileHeader } from "@/shared/components/mobile-header"
import { BottomNavigation } from "@/shared/components/bottom-navigation"
import { PaymentDetails } from "@/features/payment/components/payment-details"

export default function PaymentDetailsPage() {
  return (
    <>
      <MobileHeader title="รายละเอียดการชำระเงิน" />
      <main className="flex-1 pb-20">
        <PaymentDetails />
      </main>
      <BottomNavigation />
    </>
  )
}
