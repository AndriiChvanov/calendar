import React, {useMemo} from "react"
import {View} from "@/components/Calendar";
import Day from "@/components/Calendar/Week/Day";

interface Props {
    type: View
}

export default function WeekTitle(props: Props) {
    const days = useMemo(() => ["mo", "tu", "we", "th", "fr", "sa", "su"], [])

    switch (props.type) {
        case View.WEEK:
        default:
            return null
        case View.MONTH:
            return (
                <div
                    className="grid grid-cols-7 gap-5 place-items-center pt-1 px-5 pb-2 mt-4 ">
                    {days.map((day, idx) => (
                        <Day day={day} key={idx}/>
                    ))}
                </div>
            )
    }
}