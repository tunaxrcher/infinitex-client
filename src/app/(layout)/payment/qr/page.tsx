import { MobileHeader } from "@src/shared/components/mobile-header"
import { BottomNavigation } from "@src/shared/components/bottom-navigation"
import { QRPayment } from "@src/features/payment/components/qr-payment"

export default function QRPaymentPage() {
  return (
    <>
      <MobileHeader title="ชำระด้วย QR Code" />
      <main className="flex-1 pb-20">
        <QRPayment />
      </main>
      <BottomNavigation />
    </>
  )
}
