import React, {memo, useMemo} from "react"
import Date from "@/components/Calendar/Dates/Date";
import {DateProps} from "@/components/Calendar/Dates";
import {eachDayOfInterval, endOfMonth, endOfWeek, startOfWeek} from "date-fns";


function MonthDate(props: DateProps) {
    const daysInMonth = useMemo(() => eachDayOfInterval({
        start: startOfWeek(props.firstDayOfMonth, {weekStartsOn: 1}),
        end: endOfWeek(endOfMonth(props.firstDayOfMonth), {weekStartsOn: 1}),
    }), [props.firstDayOfMonth]);

    return (
        <div className="grid grid-cols-7 gap-5 mt-4 place-items-center pt-1 px-5 pb-2">
            {daysInMonth.map((day, idx) => <Date key={idx} day={day} {...props}/>)}
        </div>
    )
}

export default memo(MonthDate)