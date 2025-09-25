import { MobileHeader } from "@src/shared/components/mobile-header"
import { BottomNavigation } from "@src/shared/components/bottom-navigation"
import { NotificationsList } from "@src/features/notifications/components/notifications-list"

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
