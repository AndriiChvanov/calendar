import React, { memo, useCallback, useMemo } from "react"
import { format } from "date-fns"

interface Props {
  id: string
  time: string
  duration: number
  price: number
  selectedTimes: { day: string; times: string[] }[]
  setActiveTimes: (day: string, id: string) => void
  selectedDate: string
}

function Slot(props: Props) {
  const isActive = useMemo(
    () =>
      props.selectedTimes
        ?.find((i) => i.day === props.selectedDate)
        ?.times.some((i) => i === props.id),
    [props.selectedTimes, props.selectedDate, props.id]
  )
  const onClick = useCallback(
    () => props.setActiveTimes(props.selectedDate, props.id),
    [props.setActiveTimes, props.id, props.selectedDate]
  )

  const classes = useMemo(
    () =>
      `cursor-pointer flex justify-between items-center px-4 py-3 border border-[#E5E6EB] box-border rounded-lg hover:border-2 hover:border-[black] hover:py-[11px] hover:px-3 ${isActive && "border-2 border-[black] py-[11px] px-3"}`,
    [isActive]
  )
  return (
    <div onClick={onClick} className={classes}>
      <div className="flex items-center gap-2">
        <p className="font-semibold text-base">{format(props.time, "HH:mm")}</p>
        <p className="text-[#4D5461] text-sm">{`${props.duration} min`}</p>
      </div>
      <div>
        <p className="font-semibold text-sm text-[#4D5461]">{`€${props.price}`}</p>
      </div>
    </div>
  )
}

export default memo(Slot)
