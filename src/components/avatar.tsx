"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "../utils/cn"


function useImagePreload(src?: string) {
    const [isLoaded, setIsLoaded] = React.useState(false)
    const [isError, setIsError] = React.useState(false)
    React.useEffect(() => {
        if (!src) {
            setIsLoaded(false)
            setIsError(false)
            return
        }

        setIsLoaded(false)
        setIsError(false)

        const img = new Image()

        const handleLoad = () => {
            setIsLoaded(true)
            setIsError(false)
        }

        const handleError = () => {
            setIsError(true)
            setIsLoaded(false)
        }

        img.addEventListener('load', handleLoad)
        img.addEventListener('error', handleError)

        img.src = src

        return () => {
            img.removeEventListener('load', handleLoad)
            img.removeEventListener('error', handleError)
        }
    }, [src])

    return { isLoaded, isError }
}

function Avatar({
    className,
    ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
    return (
        <AvatarPrimitive.Root
            data-slot="avatar"
            className={cn(
                "relative flex size-8 shrink-0 overflow-hidden rounded-full",
                className
            )}
            {...props}
        />
    )
}

interface AvatarImageProps extends React.ComponentProps<typeof AvatarPrimitive.Image> {
    showLoadingState?: boolean
}

function AvatarImage({
    className,
    src,
    showLoadingState = true,
    ...props
}: AvatarImageProps) {
    const { isLoaded, isError } = useImagePreload(src)

    return (
        <>
            <AvatarPrimitive.Image
                data-slot="avatar-image"
                className={cn(
                    "aspect-square size-full transition-opacity duration-200",
                    !isLoaded && showLoadingState ? "opacity-0" : "opacity-100",
                    className
                )}
                src={src}
                {...props}
            />
            {showLoadingState && !isLoaded && !isError && (
                <div
                    data-slot="avatar-loading"
                    className="absolute inset-0 flex items-center justify-center bg-muted rounded-full"
                >
                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
            )}
        </>
    )
}

function AvatarFallback({
    className,
    ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
    return (
        <AvatarPrimitive.Fallback
            data-slot="avatar-fallback"
            className={cn(
                "bg-muted flex size-full items-center justify-center rounded-full",
                className
            )}
            {...props}
        />
    )
}

export { Avatar, AvatarImage, AvatarFallback }
export type { AvatarImageProps }
