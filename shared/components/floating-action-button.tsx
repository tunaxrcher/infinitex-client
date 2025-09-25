import { Plus } from "lucide-react"
import { Button } from "@/features/shared/ui/button"
import Link from "next/link"

export function FloatingActionButton() {
  return (
    <div className="fixed bottom-24 right-4 z-40">
      <Button
        asChild
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-shadow bg-primary hover:bg-primary/90"
      >
        <Link href="/apply">
          <Plus className="h-6 w-6" />
          <span className="sr-only">ขอสินเชื่อเพิ่ม</span>
        </Link>
      </Button>
    </div>
  )
}
