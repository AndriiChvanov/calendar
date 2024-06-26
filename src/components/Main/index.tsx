"use client"
import React, { useCallback, useMemo, useState } from "react"
import Calendar from "@/components/Calendar"
import { Schedule } from "@/api/Schedules"
import { eachDayOfInterval, endOfDay, format, startOfDay } from "date-fns"
import TimeSlots from "@/components/TimeSlots"
import Header from "@/components/Header"

export interface DataProps {
  workDates: string[]
  id: string
  startTime: string
  duration: number
  price: number
}

export default function Main(props: { data: Schedule[] }) {
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTimes, setSelectedTimes] = useState<
    { day: string; times: string[] }[]
  >([])
  const data = useMemo((): DataProps[] => {
    return props.data.map((el) => {
      return {
        workDates: eachDayOfInterval({
          start: startOfDay(el.eventSlotDto.startDate),
          end: endOfDay(el.eventSlotDto.endEndDate),
        }).map((el) => format(el, "yyyy-MM-dd")),
        id: el.eventSlotDto.id,
        startTime: el.eventSlotDto.startTime,
        duration: el.eventSlotDto.duration,
        price: el.eventSlotDto.price,
      }
    })
  }, [props.data])

  const setActiveTimes = useCallback((day: string, id: string) => {
    setSelectedTimes((state) => {
      if (state.length === 0) return [{ day, times: [id] }]
      else if (!state.find((el) => el.day === day)) {
        return [...state, { day, times: [id] }]
      } else
        return state.map((el) => {
          if (el.day === day && el.times.includes(id)) {
            return {
              day,
              times: el.times.filter((i) => i !== id),
            }
          } else if (el.day === day && !el.times.includes(id)) {
            return {
              day,
              times: [...el.times, id],
            }
          } else return el
        })
    })
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 ">
      <main className="max-w-md mx-auto bg-white ">
        <Header />
        <hr className="text-[#E5E6EB] w-full h-0.5" />
        <Calendar onDateSelect={setSelectedDate} workTimes={data} />
        <hr className="text-[#E5E6EB] w-full h-0.5" />
        <TimeSlots
          data={data}
          selectedDate={selectedDate}
          setActiveTimes={setActiveTimes}
          selectedTimes={selectedTimes}
        />
      </main>
    </div>
  )
}
