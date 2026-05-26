"use client"

import { useRef, MouseEvent } from "react"
import { cn } from "@/lib/utils"

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    className?: string
    spotlightColor?: string
}

export const SpotlightCard = ({
    children,
    className,
    spotlightColor = "rgba(124, 58, 237, 0.25)", // Default dev-purple with opacity
    ...props
}: SpotlightCardProps) => {
    const divRef = useRef<HTMLDivElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || !overlayRef.current) return

        const rect = divRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        overlayRef.current.style.opacity = "1"
        overlayRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, ${spotlightColor}, transparent 40%)`
    }

    const handleMouseLeave = () => {
        if (!overlayRef.current) return
        overlayRef.current.style.opacity = "0"
    }

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50",
                className
            )}
            {...props}
        >
            <div
                ref={overlayRef}
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at 0px 0px, ${spotlightColor}, transparent 40%)`,
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    )
}
