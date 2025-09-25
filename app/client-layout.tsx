"use client"

import type React from "react"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { ThemeProvider } from "@/features/shared/components/theme-provider"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const searchParams = useSearchParams()

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="mobile-container">{children}</div>
        </ThemeProvider>
      </Suspense>
    </>
  )
}
