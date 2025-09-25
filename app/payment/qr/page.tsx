import { MobileHeader } from "@/shared/components/mobile-header"
import { BottomNavigation } from "@/shared/components/bottom-navigation"
import { QRPayment } from "@/features/payment/components/qr-payment"

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
