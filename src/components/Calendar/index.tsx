import React, { useCallback, useMemo, useState } from "react"
import { format, getWeek, parse, startOfToday } from "date-fns"
import ToggleSwitch from "@/components/ToggleSwitch"
import Slider from "@/components/Calendar/Slider"
import MonthTitle from "@/components/Calendar/MonthTitle"
import WeekTitle from "@/components/Calendar/WeekTitle"
import Dates from "@/components/Calendar/Dates"
import { DataProps } from "@/components/Main"

export enum View {
  WEEK = "week",
  MONTH = "month",
}

interface Props {
  onDateSelect: (e: string) => void
  workTimes: DataProps[]
}

export default function Calendar(props: Props) {
  const today = startOfToday()

  const [currMonth, setCurrMonth] = useState<string>(() =>
    format(today, "MMMM")
  )
  const [active, setActive] = useState<Date>()
  const [activeDay, setActiveDay] = useState<Date>()
  const [currWeek, setCurrWeek] = useState<number>(() => getWeek(new Date()))
  const [currentView, setCurrentView] = useState<View>(View.WEEK)

  const firstDayOfMonth = useMemo(
    () => parse(currMonth, "MMMM", new Date()),
    [currMonth]
  )
  const onDateSelect = useCallback(
    (date: Date) => {
      props.onDateSelect(format(date, "yyyy-MM-dd"))
      setActiveDay(date)
    },
    [props.onDateSelect, setActiveDay]
  )
  return (
    <div className="p-4 bg-white flex flex-col items-center">
      <MonthTitle type={currentView} firstDayOfMonth={firstDayOfMonth} />
      <ToggleSwitch view={currentView} onChange={setCurrentView} />
      <Slider
        type={currentView}
        currWeek={currWeek}
        setCurrWeek={setCurrWeek}
        firstDayOfMonth={firstDayOfMonth}
        currMonth={currMonth}
        setCurrMonth={setCurrMonth}
        setActive={setActive}
      />
      <WeekTitle type={currentView} />
      <hr className="text-[#E5E6EB] w-full h-0.5" />
      <Dates
        firstDayOfMonth={firstDayOfMonth}
        currMonth={currMonth}
        setCurrMonth={setCurrMonth}
        currWeek={currWeek}
        setCurrWeek={setCurrWeek}
        type={currentView}
        setActive={setActive}
        activeDay={activeDay}
        active={active}
        setActiveDay={onDateSelect}
        setCurrentView={setCurrentView}
        workTimes={props.workTimes}
      />
    </div>
  )
}
