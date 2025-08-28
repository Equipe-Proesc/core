import { default as React } from 'react';
interface Option {
    label: string;
    value: string;
    disabled?: boolean;
}
interface NativeSelectProps {
    options: Option[];
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    itemHeight?: number;
    listHeight?: number;
    virtualizationThreshold?: number;
    searchable?: boolean;
    clearable?: boolean;
    emptyMessage?: string;
    "aria-label"?: string;
}
export declare const NativeSelect: React.ForwardRefExoticComponent<NativeSelectProps & React.RefAttributes<HTMLDivElement>>;
export {};
