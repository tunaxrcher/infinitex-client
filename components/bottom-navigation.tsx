"use client"

import { Home, CreditCard, Bell, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"

const navigationItems = [
  {
    name: "หน้าหลัก",
    href: "/",
    icon: Home,
  },
  {
    name: "ผลิตภัณฑ์ของฉัน",
    href: "/products",
    icon: CreditCard,
  },
  {
    name: "แจ้งเตือน",
    href: "/notifications",
    icon: Bell,
  },
  {
    name: "เมนูอื่น ๆ",
    href: "/more",
    icon: Menu,
  },
]

export function BottomNavigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-card border-t border-border pb-2">
      <div className="flex items-center justify-around py-2">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors",
                isActive ? "text-primary bg-accent" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
