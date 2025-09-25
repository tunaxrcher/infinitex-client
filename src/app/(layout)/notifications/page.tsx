import { MobileHeader } from "@/shared/components/mobile-header"
import { BottomNavigation } from "@/shared/components/bottom-navigation"
import { NotificationsList } from "@/features/notifications/components/notifications-list"

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
