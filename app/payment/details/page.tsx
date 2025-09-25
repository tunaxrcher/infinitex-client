import { MobileHeader } from "@/components/mobile-header"
import { BottomNavigation } from "@/components/bottom-navigation"
import { PaymentDetails } from "@/components/payment-details"

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
