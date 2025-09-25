import { MobileHeader } from "@/shared/components/mobile-header"
import { BottomNavigation } from "@/shared/components/bottom-navigation"
import { MoreMenuList } from "@/features/more/components/more-menu-list"

export default function MorePage() {
  return (
    <>
      <MobileHeader title="เมนูอื่น ๆ" />
      <main className="flex-1 pb-20">
        <MoreMenuList />
      </main>
      <BottomNavigation />
    </>
  )
}
