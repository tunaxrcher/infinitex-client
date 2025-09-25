"use client"
import { FileText, CreditCard, History } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@src/shared/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@src/shared/ui/tabs"
import { Badge } from "@src/shared/ui/badge"
import { Progress } from "@src/shared/ui/progress"
import { useParams } from "next/navigation"
import { MobileHeader } from "@src/shared/components/mobile-header"
import { BottomNavigation } from "@src/shared/components/bottom-navigation"

// Mock data - in real app this would come from API
const loanDetails = {
  1: {
    id: 1,
    name: "สินเชื่อจำนองบ้านและโฉนดที่ดิน",
    loanNumber: "LN001234567",
    titleDeedNumber: "TD789456123",
    contractDate: "15 มี.ค. 67",
    expiryDate: "15 มี.ค. 69",
    currentInstallment: 6,
    totalInstallments: 12,
    monthlyPayment: 2000.5,
    remainingBalance: 12000.0,
    totalAmount: 24000.0,
    interestRate: 3.5,
    status: "ปกติ",
    paymentHistory: [
      { installment: 6, date: "15 ส.ค. 68", amount: 2000.5, status: "ชำระแล้ว" },
      { installment: 5, date: "15 ก.ค. 68", amount: 2000.5, status: "ชำระแล้ว" },
      { installment: 4, date: "15 มิ.ย. 68", amount: 2000.5, status: "ชำระแล้ว" },
      { installment: 3, date: "15 พ.ค. 68", amount: 2000.5, status: "ชำระแล้ว" },
      { installment: 2, date: "15 เม.ย. 68", amount: 2000.5, status: "ชำระแล้ว" },
      { installment: 1, date: "15 มี.ค. 68", amount: 2000.5, status: "ชำระแล้ว" },
    ],
  },
}

export default function LoanDetailPage() {
  const params = useParams()
  const loanId = Number.parseInt(params.id as string)
  const loan = loanDetails[loanId as keyof typeof loanDetails]

  if (!loan) {
    return (
      <>
        <MobileHeader title="รายละเอียดสินเชื่อ" showBackButton={true} />
        <main className="flex-1 pb-20 page-main-bg-animate-gradient bg-gradient-to-b from-transparent via-transparent to-gray-50 dark:to-gray-900 min-h-screen p-4">
          <div className="flex items-center justify-center h-64">
            <p className="text-muted-foreground">ไม่พบข้อมูลสินเชื่อ</p>
          </div>
        </main>
        <BottomNavigation />
      </>
    )
  }

  const progress = (loan.currentInstallment / loan.totalInstallments) * 100

  return (
    <>
      <MobileHeader title="รายละเอียดสินเชื่อ" showBackButton={true} />
      <main className="flex-1 pb-20 page-main-bg-animate-gradient bg-gradient-to-b from-transparent via-transparent to-gray-50 dark:to-gray-900 min-h-screen p-4">
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-base text-foreground mb-2">{loan.name}</CardTitle>
                <p className="text-sm text-muted-foreground">เลขที่สัญญา: {loan.loanNumber}</p>
              </div>
              <Badge variant="default" className="text-xs">
                {loan.status}
              </Badge>
            </div>
          </CardHeader>
        </Card>

        <Tabs defaultValue="loan-info" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="loan-info" className="text-xs">
              <FileText className="h-4 w-4 mr-1" />
              ข้อมูลสินเชื่อ
            </TabsTrigger>
            <TabsTrigger value="installment-info" className="text-xs">
              <CreditCard className="h-4 w-4 mr-1" />
              ข้อมูลการผ่อน
            </TabsTrigger>
            <TabsTrigger value="history" className="text-xs">
              <History className="h-4 w-4 mr-1" />
              ประวัติถอน/โอน
            </TabsTrigger>
          </TabsList>

          <TabsContent value="loan-info" className="space-y-4">
            <h2 className="text-base font-semibold text-foreground mb-3">ข้อมูลสินเชื่อ</h2>
            <Card>
              <CardContent className="space-y-4 pt-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">เลขที่สัญญา</span>
                    <span className="text-sm font-medium">{loan.loanNumber}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">เลขโฉนด</span>
                    <span className="text-sm font-medium">{loan.titleDeedNumber}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">วันที่ทำสัญญา</span>
                    <span className="text-sm font-medium">{loan.contractDate}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-muted-foreground">วันที่ครบสัญญา</span>
                    <span className="text-sm font-medium">{loan.expiryDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="installment-info" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">รายละเอียดการผ่อน</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">ความคืบหน้า</span>
                    <span className="font-medium">
                      {loan.currentInstallment}/{loan.totalInstallments} งวด
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-xs text-muted-foreground">{progress.toFixed(1)}% เสร็จสิ้น</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">ยอดชำระรายเดือน</p>
                    <p className="text-sm font-semibold">
                      {loan.monthlyPayment.toLocaleString("th-TH", { minimumFractionDigits: 2 })} บาท
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">ยอดคงเหลือ</p>
                    <p className="text-sm font-semibold">
                      {loan.remainingBalance.toLocaleString("th-TH", { minimumFractionDigits: 2 })} บาท
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">ยอดเงินกู้ทั้งหมด</p>
                    <p className="text-sm font-semibold">
                      {loan.totalAmount.toLocaleString("th-TH", { minimumFractionDigits: 2 })} บาท
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">อัตราดอกเบี้ย</p>
                    <p className="text-sm font-semibold">{loan.interestRate}% ต่อปี</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">ประวัติการผ่อน</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {loan.paymentHistory.map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div>
                        <p className="text-sm font-medium">งวดที่ {payment.installment}</p>
                        <p className="text-xs text-muted-foreground">{payment.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">
                          {payment.amount.toLocaleString("th-TH", { minimumFractionDigits: 2 })} บาท
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {payment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">ประวัติถอน/โอน</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center py-8">
                  <div className="text-center">
                    <History className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">ยังไม่มีประวัติการถอน/โอน</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <BottomNavigation />
    </>
  )
}
