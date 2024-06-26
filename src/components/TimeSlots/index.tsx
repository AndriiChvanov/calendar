"use client"

import React from "react"
import Slot from "@/components/TimeSlots/Slot"
import { DataProps } from "@/components/Main"

interface TimeSlotsProps {
  data: DataProps[]
  selectedDate: string
  selectedTimes: { day: string; times: string[] }[]
  setActiveTimes: (day: string, id: string) => void
}

export default function TimeSlots(props: TimeSlotsProps) {
  if (
    !props.data?.find((el) =>
      el.workDates.some((i) => i === props.selectedDate)
    )
  )
    return null

  return (
    <div className="mt-4 gap-3 flex flex-col p-4">
      {props.data.map((el) => (
        <Slot
          key={el.id}
          time={el.startTime}
          duration={el.duration}
          price={el.price}
          id={el.id}
          selectedDate={props.selectedDate}
          selectedTimes={props.selectedTimes}
          setActiveTimes={props.setActiveTimes}
        />
      ))}
    </div>
  )
}
