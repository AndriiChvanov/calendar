"use client"
import React, { memo, useCallback, useMemo } from "react"
import { format, getDay, getWeek, isSameDay, isSameMonth } from "date-fns"
import { View } from "@/components/Calendar"
import { DateProps } from "@/components/Calendar/Dates"

interface Props extends DateProps {
  day: Date
}

function Date(props: Props) {
  const colStartClasses = useMemo(() => {
    return [
      "",
      "col-start-2",
      "col-start-3",
      "col-start-4",
      "col-start-5",
      "col-start-6",
      "col-start-7",
    ]
  }, [])

  const isActiveDay = useMemo(() => {
    let active = false
    props.workTimes.forEach(
      (el) =>
        (active = el.workDates.some(
          (i) => i === format(props.day, "yyyy-MM-dd")
        ))
    )
    return active
  }, [props.workTimes, props.day])

  const dateClasses = useMemo(() => {


    return `${props.activeDay && isSameDay(props.activeDay, props.day) && "bg-blue-500 text-white"} ${(
        isSameMonth(props.day, props.firstDayOfMonth) ||
        props.type === View.WEEK
    ) ? "text-gray-900" : "text-gray-400"} flex items-center flex-col  justify-center text-xs font-semibold h-8 w-8 rounded-full  ${isActiveDay && " cursor-pointer hover:text-white hover:bg-blue-500"}`
  }, [
    props.active,
    props.activeDay,
    props.day,
    props.type,
    isActiveDay,
    props.firstDayOfMonth,
  ])

  const onClick = useCallback(() => {
    if (!isActiveDay) return
    props.setActiveDay(props.day)
    if (props.type === View.MONTH) {
      props.setCurrentView(View.WEEK)
      props.setCurrWeek(getWeek(props.day, { weekStartsOn: 1 }))
    }
  }, [
    props.setActiveDay,
    props.day,
    props.setCurrentView,
    props.setCurrWeek,
    props.type,
  ])

  const item = useMemo(() => format(props.day, "d"), [props.day])

  return (
    <div className={colStartClasses[getDay(props.day) - 1]} onClick={onClick}>
      <p className={dateClasses}>
        {item}
        {isActiveDay && (
          <span className="absolute mt-3 text-blue-500 text-[22px]">.</span>
        )}
      </p>
    </div>
  )
}

export default memo(Date)
