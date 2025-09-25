import { MobileHeader } from "@src/shared/components/mobile-header"
import { BottomNavigation } from "@src/shared/components/bottom-navigation"
import { BarcodePayment } from "@src/features/payment/components/barcode-payment"

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
