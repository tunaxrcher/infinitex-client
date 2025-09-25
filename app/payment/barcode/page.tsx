import { MobileHeader } from "@/features/shared/components/mobile-header"
import { BottomNavigation } from "@/features/shared/components/bottom-navigation"
import { BarcodePayment } from "@/features/payment/components/barcode-payment"

export default function BarcodePaymentPage() {
  return (
    <>
      <MobileHeader title="ชำระด้วย Barcode" />
      <main className="flex-1 pb-20">
        <BarcodePayment />
      </main>
      <BottomNavigation />
    </>
  )
}
