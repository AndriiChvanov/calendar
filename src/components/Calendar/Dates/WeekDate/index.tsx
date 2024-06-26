import React, { memo } from "react"
import { DateProps } from "@/components/Calendar/Dates"
import { useGetDaysOfWeekByWeekNumber } from "@/hooks/useGetDaysOfWeekByWeekNumber"
import Date from "../Date"

function WeekDate(props: DateProps) {
  const getDaysOfWeekByWeekNumber = useGetDaysOfWeekByWeekNumber()

  return (
    <div className="grid grid-cols-7 gap-5 mt-4 place-items-center pt-1 px-5 pb-2">
      {getDaysOfWeekByWeekNumber(props.currWeek).map((day, idx) => (
        <Date key={idx} day={day} {...props} />
      ))}
    </div>
  )
}

export default memo(WeekDate)
