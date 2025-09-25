"use client"

import type React from "react"
import { useState } from "react"
import { Upload, Camera, FileText, X, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/shared/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"
import { Alert, AlertDescription } from "@/shared/ui/alert"

interface TitleDeedUploadStepProps {
  data: any
  onUpdate: (data: any) => void
  onNext: () => void
  onPrev: () => void
  isFirstStep: boolean
}

export function TitleDeedUploadStep({ data, onUpdate, onNext, onPrev, isFirstStep }: TitleDeedUploadStepProps) {
  const [dragActive, setDragActive] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isProcessed, setIsProcessed] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      onUpdate({ titleDeedImage: file })
      setIsProcessed(false)
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      onUpdate({ titleDeedImage: file })
      setIsProcessed(false)
    }
  }

  const removeImage = () => {
    onUpdate({ titleDeedImage: null, titleDeedData: null })
    setIsProcessed(false)
  }

  const processWithAI = async () => {
    setIsProcessing(true)

    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Mock AI processed data
    const mockData = {
      ownerName: "นายสมชาย ใจดี",
      landNumber: "เลขที่ดิน 123/45",
      area: "2 ไร่ 1 งาน 50 ตารางวา",
      location: "ตำบลบางพลี อำเภอบางพลี จังหวัดสมุทรปราการ",
    }

    onUpdate({ titleDeedData: mockData })
    setIsProcessing(false)
    setIsProcessed(true)
  }

  const canProceed = data.titleDeedImage && isProcessed

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            อัพโหลดโฉนดที่ดิน
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* File Upload Area */}
          <div
            className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
              dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground mb-1">ลากไฟล์มาวางที่นี่</p>
            <p className="text-xs text-muted-foreground mb-4">หรือเลือกไฟล์จากเครื่อง</p>

            <div className="flex gap-2 justify-center">
              <Button variant="outline" size="sm" asChild>
                <label className="cursor-pointer">
                  <Upload className="h-4 w-4 mr-2" />
                  เลือกไฟล์
                  <input type="file" accept="image/*" className="hidden" onChange={handleFileInput} />
                </label>
              </Button>
              <Button variant="outline" size="sm">
                <Camera className="h-4 w-4 mr-2" />
                ถ่ายรูป
              </Button>
            </div>
          </div>

          {/* Uploaded Image */}
          {data.titleDeedImage && (
            <div className="space-y-3">
              <div className="relative bg-muted rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-foreground truncate">{data.titleDeedImage.name}</span>
                  {isProcessed && <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -top-1 -right-1 h-6 w-6 bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  onClick={removeImage}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>

              {/* AI Processing Button */}
              {!isProcessed && (
                <Button onClick={processWithAI} disabled={isProcessing} className="w-full" variant="secondary">
                  {isProcessing ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      กำลังประมวลผล...
                    </>
                  ) : (
                    "ตรวจสอบข้อมูลโฉนด"
                  )}
                </Button>
              )}

              {/* AI Processed Data */}
              {isProcessed && data.titleDeedData && (
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <div className="space-y-1">
                      <p className="font-medium">ข้อมูลจากโฉนดที่ดิน:</p>
                      <p className="text-sm">ชื่อเจ้าของ: {data.titleDeedData.ownerName}</p>
                      <p className="text-sm">เลขที่ดิน: {data.titleDeedData.landNumber}</p>
                      <p className="text-sm">เนื้อที่: {data.titleDeedData.area}</p>
                      <p className="text-sm">ที่ตั้ง: {data.titleDeedData.location}</p>
                    </div>
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex gap-3">
        {!isFirstStep && (
          <Button variant="outline" onClick={onPrev} className="flex-1 bg-transparent">
            ย้อนกลับ
          </Button>
        )}
        <Button onClick={onNext} disabled={!canProceed} className="flex-1">
          ถัดไป
        </Button>
      </div>
    </div>
  )
}
