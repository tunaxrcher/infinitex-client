import { MobileHeader } from "@/components/mobile-header"
import { BottomNavigation } from "@/components/bottom-navigation"
import { BarcodePayment } from "@/components/barcode-payment"

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
