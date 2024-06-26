import React, { useCallback, useMemo } from "react"
import ArrowsButton from "@/components/Calendar/ArrowsButton"
import { add, format, startOfToday } from "date-fns"

interface Props {
  firstDayOfMonth: Date
  currMonth: string
  setCurrMonth: (e: string) => void
  setActive: (e: Date) => void
}

export default function Month(props: Props) {
  const today = startOfToday()

  const disabledArrowButton = useMemo(
    (): boolean => props.currMonth === format(today, "MMMM"),
    [props.currMonth, today]
  )

  const getPrevMonth = useCallback(
    (event: React.MouseEvent) => {
      if (disabledArrowButton) return
      event.preventDefault()
      const firstDayOfPrevMonth = add(props.firstDayOfMonth, { months: -1 })
      props.setCurrMonth(format(firstDayOfPrevMonth, "MMMM"))
      props.setActive(firstDayOfPrevMonth)
    },
    [
      props.setActive,
      props.setCurrMonth,
      props.currMonth,
      props.firstDayOfMonth,
    ]
  )

  const getNextMonth = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault()
      const firstDayOfNextMonth = add(props.firstDayOfMonth, { months: 1 })
      props.setCurrMonth(format(firstDayOfNextMonth, "MMMM"))
      props.setActive(firstDayOfNextMonth)
    },
    [props.setActive, props.setCurrMonth, props.firstDayOfMonth]
  )

  return (
    <ArrowsButton
      onPrev={getPrevMonth}
      onNext={getNextMonth}
      disabled={disabledArrowButton}
    >
      <p className="font-semibold text-base">
        {format(props.firstDayOfMonth, "MMMM")}
      </p>
    </ArrowsButton>
  )
}
