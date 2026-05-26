"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export type CalendarProps = React.HTMLAttributes<HTMLDivElement>

function Calendar({ className, ...props }: CalendarProps) {
  return (
    <div
      className={cn(
        "rounded-md border bg-background p-4 text-sm text-muted-foreground",
        className
      )}
      {...props}
    >
      Calendar component is currently unavailable in this build.
    </div>
  )
}

Calendar.displayName = "Calendar"

export { Calendar }
