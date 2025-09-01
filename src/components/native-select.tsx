import React, {
    useState,
    useRef,
    useEffect,
    useCallback,
    forwardRef,
    useMemo,
} from "react";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import { ChevronDownIcon, CheckIcon, XIcon } from "lucide-react";
import { cn } from "../utils/cn";

function useClickOutside({ open, rootRef, setOpen, setSearchTerm }: {
    open: boolean;
    rootRef: React.RefObject<HTMLDivElement | null>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) {
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                open &&
                rootRef.current &&
                !rootRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
                setSearchTerm("");
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open, rootRef, setOpen, setSearchTerm]);
}

function useFocusInput({ open, searchable, searchInputRef }: {
    open: boolean;
    searchable: boolean;
    searchInputRef: React.RefObject<HTMLInputElement | null>;
}) {
    useEffect(() => {
        if (open && searchable && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [open, searchable, searchInputRef]);
}

function useEscapeClose({ open, setOpen, setSearchTerm }: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) {
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape" && open) {
                setOpen(false);
                setSearchTerm("");
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, setOpen, setSearchTerm]);
}

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

export const NativeSelect = forwardRef<HTMLDivElement, NativeSelectProps>(
    (
        {
            options,
            value,
            onChange,
            placeholder = ("Selecione..."),
            disabled = false,
            className = "",
            itemHeight = 36,
            listHeight = 200,
            virtualizationThreshold = 100,
            searchable = false,
            clearable = false,
            emptyMessage = ("Nenhuma opção encontrada"),
            "aria-label": ariaLabel,
        },
        ref
    ) => {
        const [open, setOpen] = useState(false);
        const [searchTerm, setSearchTerm] = useState("");
        const rootRef = useRef<HTMLDivElement | null>(null);
        const searchInputRef = useRef<HTMLInputElement | null>(null);
        const [SelectedOpt, setSelectedOpt] = useState<Option | undefined>(options?.find(opt => opt.value == value) || undefined);

        const mergedRef = useCallback(
            (node: HTMLDivElement) => {
                rootRef.current = node;
                if (typeof ref === "function") {
                    ref(node);
                } else if (ref) {
                    (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
                }
            },
            [ref]
        );


        const filteredOptions = useMemo(() => {
            if (!searchable || !searchTerm.trim()) return options;
            return options.filter(option =>
                option.label.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }, [options, searchTerm, searchable]);
                
        useFocusInput({ open, searchable, searchInputRef });
        useEscapeClose({ open, setOpen, setSearchTerm });
        useClickOutside({ open, rootRef, setOpen, setSearchTerm });

        const useVirtualization = filteredOptions.length > virtualizationThreshold;

        const handleOptionSelect = (optionValue: string) => {
            onChange(optionValue);
            setSelectedOpt(options.find(opt => opt.value === optionValue));
            setOpen(false);
            setSearchTerm("");
        };

        const handleClearValue = (e: React.MouseEvent) => {
            e.stopPropagation();
            onChange("");
            setSelectedOpt(undefined);
            setOpen(false);
            setSearchTerm("");
        };

        const handleToggleOpen = () => {
            if (disabled) return;
            setOpen(prev => !prev);
            if (!open) setSearchTerm("");
        };

        return (
            <div
                ref={mergedRef}
                className={cn("relative inline-block w-full", className)}
            >
                <button
                    type="button"
                    className={cn(
                        "w-full flex items-center justify-between rounded px-4 py-2",
                        "border border-border bg-white text-foreground",
                        "hover:border-theta-primary/50 focus:outline-none focus:ring-2 focus:ring-theta-primary/50 focus:border-theta-primary",
                        "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-muted/50",
                        "text-sm transition-colors min-h-[40px]",
                        open && "ring-2 ring-theta-primary/50 border-theta-primary"
                    )}
                    onClick={handleToggleOpen}
                    disabled={disabled}
                    aria-label={ariaLabel}
                    aria-expanded={open}
                    aria-haspopup="listbox"
                >
                    <span className={cn(
                        "truncate text-left",
                        !SelectedOpt?.label && "text-muted-foreground",
                        SelectedOpt?.label && "text-theta-primary font-medium"
                    )}>
                        {SelectedOpt?.label || placeholder}
                    </span>
                    <div className="flex items-center ml-2 flex-shrink-0">
                        {clearable && SelectedOpt?.value && (
                            <XIcon
                                className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer mr-1"
                                onClick={handleClearValue}
                            />
                        )}
                        <ChevronDownIcon
                            className={cn(
                                "h-4 w-4 transition-transform text-muted-foreground",
                                open && "rotate-180"
                            )}
                        />
                    </div>
                </button>

                {open && (
                    <div className="absolute z-50 mt-1 w-full bg-white border border-border shadow-lg rounded max-h-64 overflow-hidden">
                        {searchable && (
                            <div className="p-2 border-b border-border bg-white">
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder={("Buscar...")}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-3 py-2 border border-border rounded text-sm bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-theta-primary/50 focus:border-theta-primary"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </div>
                        )}

                        {filteredOptions.length === 0 ? (
                            <div className="px-4 py-2 text-muted-foreground text-sm bg-white">
                                {emptyMessage}
                            </div>
                        ) : useVirtualization ? (
                            <List
                                height={Math.min(listHeight, filteredOptions.length * itemHeight)}
                                itemCount={filteredOptions.length}
                                itemSize={itemHeight}
                                width="100%"
                            >
                                {({ index, style }: ListChildComponentProps) => {
                                    const opt = filteredOptions[index];
                                    const isSelected = opt.value === value;
                                    return (
                                        <div
                                            key={opt.value}
                                            style={style}
                                            className={cn(
                                                "px-4 py-2 flex items-center justify-between cursor-pointer text-sm rounded transition-colors",
                                                isSelected
                                                    ? "bg-theta-primary/10 text-theta-primary"
                                                    : "hover:bg-accent hover:text-accent-foreground text-foreground",
                                                opt.disabled && "opacity-50 cursor-not-allowed"
                                            )}
                                            onClick={() => {
                                                if (!opt.disabled) {
                                                    handleOptionSelect(opt.value);
                                                }
                                            }}
                                        >
                                            <span className="truncate">{opt.label}</span>
                                            {isSelected && <CheckIcon className="h-4 w-4 ml-2 flex-shrink-0 text-theta-primary" />}
                                        </div>
                                    );
                                }}
                            </List>
                        ) : (
                            <div className="max-h-48 overflow-y-auto bg-white">
                                {filteredOptions.map((opt, index) => {
                                    const isSelected = opt.value === value;
                                    return (
                                        <div
                                            key={`${opt.value}-${index}`}
                                            className={cn(
                                                "px-4 py-2 flex items-center justify-between cursor-pointer text-sm rounded transition-colors",
                                                isSelected
                                                    ? "bg-theta-primary/10 text-theta-primary"
                                                    : "hover:bg-accent hover:text-accent-foreground text-foreground",
                                                opt.disabled && "opacity-50 cursor-not-allowed"
                                            )}
                                            onClick={() => {
                                                if (!opt.disabled) {
                                                    handleOptionSelect(opt.value);
                                                }
                                            }}
                                        >
                                            <span className="truncate">{opt.label}</span>
                                            {isSelected && <CheckIcon className="h-4 w-4 ml-2 flex-shrink-0 text-theta-primary" />}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
);

NativeSelect.displayName = "NativeSelect";
