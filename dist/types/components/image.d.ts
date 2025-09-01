import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const imageVariants: (props?: ({
    variant?: "default" | "circle" | "square" | "rounded" | null | undefined;
    size?: "sm" | "lg" | "xs" | "md" | "xl" | "2xl" | "auto" | "full" | null | undefined;
    aspect?: "video" | "square" | "auto" | "portrait" | "landscape" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'size'>, VariantProps<typeof imageVariants> {
    src: string;
    alt: string;
    fallbackSrc?: string;
    lazy?: boolean;
    preload?: boolean;
    showPlaceholder?: boolean;
    placeholderIcon?: React.ComponentType<{
        className?: string;
    }>;
    onLoad?: () => void;
    onError?: () => void;
    containerClassName?: string;
}
declare const Image: React.ForwardRefExoticComponent<ImageProps & React.RefAttributes<HTMLImageElement>>;
export { Image, imageVariants };
