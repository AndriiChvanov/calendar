import React, { useCallback, useMemo } from "react"
import ArrowsButton from "@/components/Calendar/ArrowsButton"
import Day from "@/components/Calendar/Week/Day"
import { format, getWeek } from "date-fns"
import { useGetStartOfWeek } from "@/hooks/useGetStartOfWeek"

interface Props {
  currWeek: number
  setCurrWeek: (e: number) => void
  setCurrMonth: (e: string) => void
  setActive: (e: any) => void
}

export default function Week(props: Props) {
  const getStartOfWeek = useGetStartOfWeek()
  const days = useMemo(() => ["mo", "tu", "we", "th", "fr", "sa", "su"], [])

  const disabledArrowButton = useMemo(
    (): boolean => props.currWeek <= getWeek(new Date()),
    [props.currWeek]
  )

  const getPrevWeek = useCallback(
    (event: React.MouseEvent) => {
      if (disabledArrowButton) return

      event.preventDefault()
      props.setCurrWeek(props.currWeek - 1)
      props.setCurrMonth(format(getStartOfWeek(props.currWeek - 2), "MMMM"))
      props.setActive(getStartOfWeek(props.currWeek))
    },
    [
      props.currWeek,
      props.setCurrWeek,
      props.setCurrMonth,
      props.setActive,
      getStartOfWeek,
    ]
  )

  const getNextWeek = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault()
      props.setCurrWeek(props.currWeek + 1)
      props.setCurrMonth(format(getStartOfWeek(props.currWeek + 1), "MMMM"))
      props.setActive(getStartOfWeek(props.currWeek))
    },
    [
      props.setCurrWeek,
      props.setCurrMonth,
      props.setActive,
      props.currWeek,
      getStartOfWeek,
    ]
  )

  return (
    <ArrowsButton
      onPrev={getPrevWeek}
      onNext={getNextWeek}
      disabled={disabledArrowButton}
    >
      <div className="grid grid-cols-7 gap-5 place-items-center pt-2.5 px-1 pb-0 mt-0 mb-2 ">
        {days.map((day, idx) => (
          <Day day={day} key={idx} />
        ))}
      </div>
    </ArrowsButton>
  )
}
