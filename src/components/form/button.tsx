import { ButtonHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { type, className, ...props },
  ref,
) {
  return (
    <button
      {...props}
      type={type}
      ref={ref}
      className={twMerge(
        'flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md border hover:bg-accent disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-accent-dark',
        className,
      )}
    />
  )
})

export default Button
