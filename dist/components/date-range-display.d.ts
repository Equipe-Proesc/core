import { default as React } from 'react';
export interface DateRangeItem {
    day: string;
    month: string;
    count: number;
    day_number: number;
    month_number: number;
    month_abbr: string;
    day_abbr: string;
    year: number;
}
interface DateRangeDisplayProps {
    dateRange: DateRangeItem[];
    dateValue?: string;
    onSelect?: (date: Date) => void;
}
declare const DateRangeDisplay: React.ForwardRefExoticComponent<DateRangeDisplayProps & React.RefAttributes<HTMLDivElement>>;
export default DateRangeDisplay;
