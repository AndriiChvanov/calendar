import {useCallback} from "react";
import {addDays} from "date-fns";
import {useGetStartOfWeek} from "@/hooks/useGetStartOfWeek";

export function useGetDaysOfWeekByWeekNumber() {
    const getStartOfWeek = useGetStartOfWeek()
    return useCallback((weekNumber: number) => {
        const days = [];

        for (let i = 0; i < 7; i++) {
            days.push(addDays(getStartOfWeek(weekNumber), i));
        }

        return days;
    }, [getStartOfWeek])
}