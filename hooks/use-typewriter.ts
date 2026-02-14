"use client"

import { useState, useEffect } from "react"

interface TypewriterOptions {
    words: string[]
    typingSpeed?: number
    deletingSpeed?: number
    pauseTime?: number
}

export const useTypewriter = ({
    words,
    typingSpeed = 150,
    deletingSpeed = 100,
    pauseTime = 2000,
}: TypewriterOptions) => {
    const [text, setText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [wordIndex, setWordIndex] = useState(0)

    useEffect(() => {
        const currentWord = words[wordIndex % words.length]

        const tick = () => {
            setText((prev) => {
                if (isDeleting) {
                    return currentWord.substring(0, prev.length - 1)
                } else {
                    return currentWord.substring(0, prev.length + 1)
                }
            })
        }

        let timer: NodeJS.Timeout

        if (!isDeleting && text === currentWord) {
            // Finished typing, pause before deleting
            timer = setTimeout(() => setIsDeleting(true), pauseTime)
        } else if (isDeleting && text === "") {
            // Finished deleting, move to next word
            setIsDeleting(false)
            setWordIndex((prev) => prev + 1)
            timer = setTimeout(tick, typingSpeed)
        } else {
            // Typing or deleting
            timer = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed)
        }

        return () => clearTimeout(timer)
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

    return text
}
