import React from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "@/icons"

interface Props {
  onPrev: (event: React.MouseEvent) => void
  onNext: (event: React.MouseEvent) => void
  children: React.ReactNode
  disabled?: boolean
}

export default function ArrowsButton(props: Props) {
  return (
    <div className="flex justify-between w-full mt-6 items-center">
      <Image
        src={ArrowLeft}
        alt="arrow_left"
        className={`w-5 h-5 cursor-pointer ${props.disabled ? "opacity-50 cursor-auto" : "opacity-100"}`}
        onClick={props.onPrev}
      />
      {props.children}
      <Image
        src={ArrowRight}
        alt="arrow_right"
        className="w-5 h-5 cursor-pointer"
        onClick={props.onNext}
      />
    </div>
  )
}
