import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Calendar",
  description: "Calendar",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ background: "#EDEFF3" }}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
