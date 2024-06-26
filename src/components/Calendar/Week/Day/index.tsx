import React, {memo} from "react"
import {capitalizeFirstLetter} from "@/utils/capitalizeFirstLetter";

interface Props {
    day: string
}

function Day(props: Props) {
    return (
        <div className="text-xs text-[#898E98] w-8 h-5 text-center">
            {capitalizeFirstLetter(props.day)}
        </div>
    )
}

export default memo(Day)