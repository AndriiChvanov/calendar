import React from "react"
import {View} from "@/components/Calendar";
import {format} from "date-fns";

interface Props {
    type: View
    firstDayOfMonth: Date
}

export default function MonthTitle(props: Props) {

    switch (props.type) {
        case View.MONTH:
        default:
            return null
        case View.WEEK:
            return (
                <p className={`font-semibold text-base mb-6  block`}>
                    {format(props.firstDayOfMonth, "MMMM")}
                </p>
            )
    }
}