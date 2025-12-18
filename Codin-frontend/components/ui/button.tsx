import React from "react"
import clsx from "clsx"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg"
  variant?: "default" | "outline"
}

export function Button({ children, className, size = "md", variant = "default", ...props }: ButtonProps) {
  const sizeClasses =
    size === "lg" ? "px-8 py-3 text-lg" : size === "sm" ? "px-3 py-1 text-sm" : "px-4 py-2"
  const variantClasses =
    variant === "outline"
      ? "bg-transparent border border-cyan-500/30 text-cyan-400"
      : "bg-cyan-500 text-black"

  return (
    <button {...props} className={clsx("rounded-xl font-semibold", sizeClasses, variantClasses, className)}>
      {children}
    </button>
  )
}
