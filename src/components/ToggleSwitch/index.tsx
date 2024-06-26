import React, {useCallback} from 'react';
import {View} from "@/components/Calendar";

interface ToggleSwitchProps {
    view: View;
    onChange: (view: View) => void;
}

export default function ToggleSwitch(props: ToggleSwitchProps) {
    const onChange = useCallback((value: ToggleSwitchProps["view"]) => {
        props.onChange(value)
    }, [props.onChange])

    return (
        <div className="w-80 h-9 flex bg-gray-200 justify-between rounded-full p-0.5 ">
            <button
                onClick={() => onChange(View.WEEK)}
                className={`text-xs font-semibold px-4 py-1 w-full rounded-full focus:outline-none ${props.view === 'week' ? 'bg-white shadow' : ''}`}
            >
                Week
            </button>
            <button
                onClick={() => onChange(View.MONTH)}
                className={`text-xs font-semibold px-4 py-1 w-full rounded-full focus:outline-none ${props.view === 'month' ? 'bg-white shadow' : ''}`}
            >
                Month
            </button>
        </div>
    );
}

