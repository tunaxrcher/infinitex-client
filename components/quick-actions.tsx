import { CreditCard, Package, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function QuickActions() {
  return (
    <div className="space-y-4">
      <Card className="hover:shadow-md transition-shadow py-4">
        <CardContent className="p-0">
          <div className="grid grid-cols-3 divide-x divide-border">
            <Link href="/bills" className="block p-0 text-center hover:bg-muted/50 transition-colors">
              <CreditCard className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-foreground">ดูบิล/จ่ายบิล</p>
            </Link>

            <Link href="/products" className="block p-0 text-center hover:bg-muted/50 transition-colors">
              <Package className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-foreground">ผลิตภัณฑ์ของฉัน</p>
            </Link>

            <Link href="/contact" className="block p-0 text-center hover:bg-muted/50 transition-colors">
              <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-foreground">ติดต่อ</p>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
