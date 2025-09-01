import { VariantProps } from 'class-variance-authority';
import * as React from "react";
/**
 * buttonVariants: Utility for Tailwind-based button variants and sizes.
 */
declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
/**
 * ButtonProps: Props for the Button component.
 * @prop asChild - If true, renders as Slot (for custom wrappers).
 * @prop variant - Visual style variant.
 * @prop size - Button size.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    /**
     * If true, renders as Slot (for custom wrappers like links).
     */
    asChild?: boolean;
}
/**
 * Button: A reusable, accessible button component with variants and sizes.
 */
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
