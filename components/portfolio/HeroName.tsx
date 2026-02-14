"use client"

import { useTypewriter } from "@/hooks/use-typewriter"

export const HeroName = () => {
    const displayText = useTypewriter({
        words: ["Khwanchai Sopa"],
        typingSpeed: 100,
        deletingSpeed: 70,
        pauseTime: 3000,
    })

    // Split text for styling: "Khwanchai" (first 9 chars) is white, rest is gradient
    const firstName = displayText.slice(0, 9)
    const lastName = displayText.slice(9)

    return (
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white animate-fade-in-up delay-100 min-h-[1.2em]">
            {firstName}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dev-purple to-dev-cyan">
                {lastName}
            </span>
            <span className="animate-blink ml-1 text-dev-cyan">|</span>
        </h1>
    )
}
