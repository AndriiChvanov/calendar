import {useCallback} from "react";
import {addWeeks, startOfISOWeek} from "date-fns";

export function useGetStartOfWeek() {
    return useCallback((weekNumber: number) => {
        const thisYear = new Date().getFullYear()
        const firstDayOfYear = new Date(thisYear, 0, 1);
        const startOfYearWeek = startOfISOWeek(firstDayOfYear);
        return addWeeks(startOfYearWeek, weekNumber - 1);

    }, [])
}