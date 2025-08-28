import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2, ImageIcon, AlertCircle } from "lucide-react";
import { cn } from "../utils/cn";


const imageVariants = cva(
    "",
    {
        variants: {
            variant: {
                default: "",
                circle: "rounded-full",
                square: "rounded-none",
                rounded: "rounded-lg",
            },
            size: {
                xs: "w-8 h-8",
                sm: "w-12 h-12", 
                md: "w-16 h-16",
                lg: "w-24 h-24",
                xl: "w-32 h-32",
                "2xl": "w-40 h-40",
                auto: "w-auto h-auto",
                full: "w-full h-full",
            },
            aspect: {
                square: "aspect-square",
                video: "aspect-video",
                portrait: "aspect-[3/4]",
                landscape: "aspect-[4/3]",
                auto: "",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
            aspect: "auto",
        },
    }
);

const placeholderVariants = cva(
    "absolute inset-0 flex items-center justify-center bg-muted transition-opacity duration-300",
    {
        variants: {
            state: {
                loading: "opacity-100",
                loaded: "opacity-0 pointer-events-none",
                error: "opacity-100",
            },
        },
        defaultVariants: {
            state: "loading",
        },
    }
);

type ImageState = "loading" | "loaded" | "error";

export interface ImageProps
    extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'size'>,
        VariantProps<typeof imageVariants> {
    src: string;
    alt: string;
    fallbackSrc?: string;
    lazy?: boolean;
    preload?: boolean;
    showPlaceholder?: boolean;
    placeholderIcon?: React.ComponentType<{ className?: string }>;
    onLoad?: () => void;
    onError?: () => void;
    containerClassName?: string;
}

const useImagePreload = (src: string, preload: boolean = false) => {
    const [state, setState] = React.useState<ImageState>("loading");

    React.useEffect(() => {
        if (!src || !preload) return;

        setState("loading");
        
        const img = new window.Image();
        
        img.onload = () => setState("loaded");
        img.onerror = () => setState("error");
        
        img.src = src;

        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, [src, preload]);

    return state;
};

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
    ({ 
        className,
        containerClassName,
        variant,
        size,
        aspect,
        src,
        alt,
        fallbackSrc,
        lazy = false,
        preload = false,
        showPlaceholder = true,
        placeholderIcon: PlaceholderIcon = ImageIcon,
        onLoad,
        onError,
        ...props 
    }, ref) => {
        const [imageState, setImageState] = React.useState<ImageState>("loading");
        const [currentSrc, setCurrentSrc] = React.useState(src);
        const [hasError, setHasError] = React.useState(false);
        
        const preloadState = useImagePreload(src, preload);
        
        // Resetar estado quando src mudar
        React.useEffect(() => {
            setImageState("loading");
            setCurrentSrc(src);
            setHasError(false);
        }, [src]);

        // Se preload está ativo, usar seu estado
        React.useEffect(() => {
            if (preload) {
                setImageState(preloadState);
            }
        }, [preload, preloadState]);

        const handleLoad = React.useCallback(() => {
            setImageState("loaded");
            onLoad?.();
        }, [onLoad]);

        const handleError = React.useCallback(() => {
            if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
                setCurrentSrc(fallbackSrc);
                setHasError(true);
                return;
            }
            
            setImageState("error");
            onError?.();
        }, [fallbackSrc, currentSrc, hasError, onError]);

        const containerClasses = cn(
            imageVariants({ variant, size, aspect }),
            containerClassName
        );

        const imageClasses = cn(
            "w-full h-full object-cover transition-opacity duration-300",
            imageState === "loaded" ? "opacity-100" : "opacity-0",
            className
        );

        const PlaceholderContent = () => {
            if (imageState === "error") {
                return (
                    <div className="flex flex-col items-center justify-center text-muted-foreground gap-2">
                        <AlertCircle className="w-6 h-6" />
                        <span className="text-xs text-center">{('Erro ao carregar')}</span>
                    </div>
                );
            }

            if (imageState === "loading") {
                return (
                    <div className="flex flex-col items-center justify-center text-muted-foreground gap-2">
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span className="text-xs">{('Carregando...')}</span>
                    </div>
                );
            }

            return (
                <PlaceholderIcon className="w-6 h-6 text-muted-foreground" />
            );
        };

        return (
            <div className={containerClasses}>
                <img
                    ref={ref}
                    src={currentSrc}
                    alt={alt}
                    className={imageClasses}
                    loading={lazy ? "lazy" : "eager"}
                    onLoad={handleLoad}
                    onError={handleError}
                    {...props}
                />
                
                {showPlaceholder && (
                    <div className={placeholderVariants({ state: imageState })}>
                        <PlaceholderContent />
                    </div>
                )}
            </div>
        );
    }
);

Image.displayName = "Image";

export { Image, imageVariants };
