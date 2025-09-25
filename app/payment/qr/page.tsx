import { MobileHeader } from "@/components/mobile-header"
import { BottomNavigation } from "@/components/bottom-navigation"
import { QRPayment } from "@/components/qr-payment"

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
