import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90 dark:bg-transparent dark:text-foreground dark:hover:bg-primary/10',
        soft: 'relative soft-base soft-hover active:soft-active focus-visible:ring-2 focus-visible:ring-[var(--focus)]',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
        soft: 'h-12 w-12',
      },
      radius: {
        default: 'rounded-md',
        soft: 'rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      radius: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, radius, asChild = false, children, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, radius, className }))}
        ref={ref}
        {...props}
      >
        {/* Layers do efeito soft */}
        {variant === 'soft' && (
          <>
            <span aria-hidden className="soft-inset" />
            <span aria-hidden className="soft-edge" />
          </>
        )}
        <span className="relative z-10">{children}</span>
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
