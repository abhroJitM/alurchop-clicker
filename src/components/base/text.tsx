import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"

import { HtmlHTMLAttributes } from "react"

type TextProps = HtmlHTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof textVariants>

export const textVariants = cva("", {
  variants: {
    variant: {
      default: "font-medium",
      destructive:
        "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline:
        "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary:
        "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    level: {
      default: "",
      1: "mt-4 scroll-m-20 text-base font-semibold tracking-tight leading-7 [&:not(:first-child)]:mt-6",
      2: "mt-6 scroll-m-20 text-lg font-semibold tracking-tight",
      3: "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
      4: "mt-10 scroll-m-20 text-2xl font-semibold tracking-tight",
      5: "mt-12 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      6: "mt-12 scroll-m-20 text-4xl font-bold",
      7: "text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]",
    },
  },
  defaultVariants: {
    variant: "default",
    level: "default",
  },
})

export function Text({
  className,
  variant,
  level,
  children,
  ...props
}: TextProps) {
  return (
    <span
      className={cn(textVariants({ variant, level, className }))}
      {...props}
    >
      {children}
    </span>
  )
}
