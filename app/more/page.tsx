import { MobileHeader } from "@/components/mobile-header"
import { BottomNavigation } from "@/components/bottom-navigation"
import { MoreMenuList } from "@/components/more-menu-list"

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
