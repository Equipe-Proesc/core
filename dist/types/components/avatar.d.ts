import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
declare function Avatar({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
interface AvatarImageProps extends React.ComponentProps<typeof AvatarPrimitive.Image> {
    showLoadingState?: boolean;
}
declare function AvatarImage({ className, src, showLoadingState, ...props }: AvatarImageProps): import("react/jsx-runtime").JSX.Element;
declare function AvatarFallback({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>): import("react/jsx-runtime").JSX.Element;
export { Avatar, AvatarImage, AvatarFallback };
export type { AvatarImageProps };
