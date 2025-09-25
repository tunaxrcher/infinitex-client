import { BottomNavigation } from "@/components/bottom-navigation"
import { BannerCarousel } from "@/components/banner-carousel"
import { QuickActions } from "@/components/quick-actions"
import { PrivilegesSection } from "@/components/privileges-section"

export default function HomePage() {
  return (
    <>
      <main className="flex-1 pb-20 relative">
        {/* Animated gradient background for top section only */}
        <div className="absolute top-0 left-0 right-0 h-[35vh] page-main-bg-animate-gradient"></div>
        {/* Light background for bottom section */}
        <div className="absolute top-[35vh] left-0 right-0 bottom-0 bg-gray-50"></div>

        {/* Content with relative positioning to appear above backgrounds */}
        <div className="relative p-4 space-y-6">
          {/* Banner Section */}
          <BannerCarousel />

          {/* Quick Actions Section */}
          <QuickActions />

          {/* Privileges Section */}
          <PrivilegesSection />
        </div>
      </main>
      <BottomNavigation />
    </>
  )
}
