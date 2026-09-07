import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "h-auto w-full resize-y rounded border-0 bg-transparent px-3 py-2.5 text-base text-ink ring-1 ring-inset ring-ink placeholder:text-mute focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ink disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
