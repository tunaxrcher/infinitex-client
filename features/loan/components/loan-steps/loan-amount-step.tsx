"use client"

import { DollarSign } from "lucide-react"
import { Button } from "@/shared/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"
import { Alert, AlertDescription } from "@/shared/ui/alert"

interface LoanAmountStepProps {
  data: any
  onUpdate: (data: any) => void
  onNext: () => void
  onPrev: () => void
}

export function LoanAmountStep({ data, onUpdate, onNext, onPrev }: LoanAmountStepProps) {
  const systemEvaluatedAmount = 2500000 // 2.5 million baht
  const monthlyPayment = Math.round(systemEvaluatedAmount * 0.008) // Approximate monthly payment

  const handleConfirm = () => {
    onUpdate({ loanAmount: systemEvaluatedAmount })
    onNext()
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            วงเงินที่ระบบประเมินให้
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <DollarSign className="h-4 w-4" />
            <AlertDescription>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-lg">วงเงินสินเชื่อที่อนุมัติ</p>
                  <p className="text-2xl font-bold text-primary">{systemEvaluatedAmount.toLocaleString()} บาท</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">อัตราดอกเบี้ย</p>
                    <p className="font-medium">9.5% ต่อปี</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">ระยะเวลาผ่อน</p>
                    <p className="font-medium">30 ปี</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">ค่าผ่อนต่อเดือน (โดยประมาณ)</p>
                    <p className="font-medium text-primary">{monthlyPayment.toLocaleString()} บาท</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">ค่าธรรมเนียม</p>
                    <p className="font-medium">1% ของวงเงิน</p>
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <p className="text-xs text-muted-foreground">
                    * วงเงินและเงื่อนไขนี้เป็นการประเมินเบื้องต้น อาจมีการปรับเปลี่ยนหลังจากการตรวจสอบเอกสารครบถ้วน
                  </p>
                </div>
              </div>
            </AlertDescription>
          </Alert>

          {data.titleDeedData && (
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm font-medium mb-2">ข้อมูลหลักทรัพย์ที่ใช้ประกอบการพิจารณา:</p>
              <div className="text-sm space-y-1 text-muted-foreground">
                <p>เจ้าของ: {data.titleDeedData.ownerName}</p>
                <p>เนื้อที่: {data.titleDeedData.area}</p>
                <p>ที่ตั้ง: {data.titleDeedData.location}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex gap-3">
        <Button variant="outline" onClick={onPrev} className="flex-1 bg-transparent">
          ย้อนกลับ
        </Button>
        <Button onClick={handleConfirm} className="flex-1">
          ยืนยันและดำเนินการต่อ
        </Button>
      </div>
    </div>
  )
}
