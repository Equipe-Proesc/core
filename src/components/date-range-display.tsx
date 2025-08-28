import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '../components/card';
import { ScrollArea, ScrollBar } from '../components/scroll-area';
import { cn } from '../utils/cn';

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

const DateRangeDisplay = forwardRef<HTMLDivElement, DateRangeDisplayProps>(
    ({ dateRange, onSelect, dateValue }, ref) => {

        const scrollContentRef = useRef<HTMLDivElement>(null);
        const hasScrolledToSelected = useRef(false);
        useEffect(() => {
            if (!scrollContentRef.current || hasScrolledToSelected.current) return;

            const scrollToElement = () => {
                if (dateValue) {
                    const selectedElement = scrollContentRef.current?.querySelector<HTMLElement>(
                        `[data-key="${dateValue}"]`
                    );
                    if (selectedElement) {
                        selectedElement.scrollIntoView({
                            behavior: 'smooth',
                            inline: 'center',
                            block: 'nearest',
                        });
                        hasScrolledToSelected.current = true;
                        return;
                    }
                }

                if (dateRange.length > 0) {
                    const firstElement = scrollContentRef.current?.querySelector<HTMLElement>(
                        `[data-key]`
                    );
                    if (firstElement) {
                        firstElement.scrollIntoView({
                            behavior: 'smooth',
                            inline: 'start',
                            block: 'nearest',
                        });
                        hasScrolledToSelected.current = true;
                    }
                }
            };

            const timeoutId = setTimeout(scrollToElement, 100);
            
            return () => clearTimeout(timeoutId);
        }, [dateValue, dateRange]);

        const handleSelect = (
            e: React.MouseEvent<HTMLDivElement>,
            date: DateRangeItem
        ) => {
            const formattedDate = `${date.year}-${String(date.month_number).padStart(2, '0')}-${String(date.day_number).padStart(2, '0')}`;
            if (onSelect) {
                onSelect(formattedDate as any); // Passa string, o dashboard já trata
            }
            e.currentTarget.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest',
            });
        };

        return (
            <Card
                ref={ref}
                className={cn(
                    'bg-white m-4 border-none shadow-none max-w-[95%] min-w-[80%]'
                )}
            >
                <CardContent className="p-0">
                    <ScrollArea className="w-full">
                        <div
                            ref={scrollContentRef}
                            className="flex space-x-4 py-4 px-2 justify-start" // Mudado de justify-center para justify-start
                        >
                            {dateRange.map((date) => {
                                const formattedKey = `${date.year}-${String(date.month_number).padStart(2, '0')}-${String(date.day_number).padStart(2, '0')}`;
                                const isSelected = formattedKey === dateValue;
                                return (
                                    <div
                                        key={formattedKey}
                                        data-key={formattedKey}
                                        onClick={(e) => handleSelect(e, date)}
                                        role="button"
                                        tabIndex={0}
                                        className={cn(
                                            'flex flex-col items-center flex-shrink-0 px-4 cursor-pointer transition-colors p-2',
                                            isSelected
                                                ? 'bg-primary text-background rounded-xl'
                                                : 'text-foreground'
                                        )}
                                    >
                                        <span className="text-sm uppercase tracking-wide flex items-center">
                                            {isSelected && <span className="mr-1">🍃</span>}
                                            {date.day}
                                        </span>
                                        <span
                                            className={cn(
                                                'text-2xl font-semibold mt-1',
                                                isSelected ? 'text-background' : 'text-accent'
                                            )}
                                        >
                                            {date.day_number}
                                        </span>
                                        <span className="text-sm uppercase tracking-wide flex items-center">
                                            {date.count > 0 && (
                                                <div 
                                                    className="w-2 h-2 bg-primary rounded-full"
                                                    title={`Você tem ${date.count} solicitações pendentes`}
                                                />
                                            )}
                                        </span>
                                        <span
                                            className={cn(
                                                'text-xs mt-1',
                                                isSelected ? 'text-background/90' : 'text-muted-foreground/50'
                                            )}
                                        >
                                            {date.month} {date.year}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        <ScrollBar orientation="horizontal" className="bg-input hidden lg:block" />
                    </ScrollArea>
                </CardContent>
            </Card>
        );
    }
);

DateRangeDisplay.displayName = 'DateRangeDisplay';

export default DateRangeDisplay;