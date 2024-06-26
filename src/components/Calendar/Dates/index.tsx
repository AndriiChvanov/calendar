import React from "react"
import { View } from "@/components/Calendar"
import WeekDate from "@/components/Calendar/Dates/WeekDate"
import MonthDate from "@/components/Calendar/Dates/MonthDate"
import { DataProps } from "@/components/Main"

export interface DateProps {
  type: View
  currWeek: number
  setCurrWeek: (e: number) => void
  firstDayOfMonth: Date
  currMonth: string
  setCurrMonth: (e: string) => void
  setCurrentView: (e: View) => void
  setActive: (e: Date) => void
  activeDay?: Date
  active?: Date
  setActiveDay: (e: Date) => void
  workTimes: DataProps[]
}

export default function Dates(props: DateProps) {
  switch (props.type) {
    case View.WEEK:
      return <WeekDate {...props} />
    case View.MONTH:
      return <MonthDate {...props} />

    default:
      throw new Error(`Incorrect calendar type ${props.type}`)
  }
}
