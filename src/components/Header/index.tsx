import React from "react"
import Image from "next/image"
import { Logo } from "@/icons"

export default function Header() {
  return (
    <div className="flex text-center justify-between p-4">
      <Image src={Logo} alt="logo" />
      <button className="border border-[#E5E6EB] rounded-lg text-base font-semibold text-[#222222] px-6 pb-3 pt-2 box-border h-11">
        Account
      </button>
    </div>
  )
}
