import { MobileHeader } from "@/components/mobile-header"
import { BottomNavigation } from "@/components/bottom-navigation"
import { NotificationsList } from "@/components/notifications-list"

export default function NotificationsPage() {
  return (
    <>
      <MobileHeader title="แจ้งเตือน" />
      <main className="flex-1 pb-20">
        <NotificationsList />
      </main>
      <BottomNavigation />
    </>
  )
}
