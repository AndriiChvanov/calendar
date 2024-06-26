import React from "react"
import Month from "@/components/Calendar/Month";
import Week from "@/components/Calendar/Week";
import {View} from "@/components/Calendar";

interface Props {
    type: View
    currWeek: number
    setCurrWeek: (e: number) => void
    firstDayOfMonth: Date
    currMonth: string
    setCurrMonth: (e: string) => void
    setActive: (e: Date) => void
}

export default function Slider(props: Props) {


    switch (props.type) {
        case View.WEEK:
            return <Week setCurrMonth={props.setCurrMonth}
                         setActive={props.setActive} currWeek={props.currWeek} setCurrWeek={props.setCurrWeek}/>
        case View.MONTH:
            return <Month setCurrMonth={props.setCurrMonth} firstDayOfMonth={props.firstDayOfMonth}
                          currMonth={props.currMonth}
                          setActive={props.setActive}/>
    }
}