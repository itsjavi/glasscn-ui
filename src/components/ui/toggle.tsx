'use client'

import { cn } from '@/lib/utils'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors hover:bg-gray-100 hover:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-gray-100 data-[state=on]:text-neutral-900 dark:ring-offset-neutral-950 dark:hover:bg-gray-800 dark:hover:text-neutral-400 dark:focus-visible:ring-gray-300 dark:data-[state=on]:bg-gray-800 dark:data-[state=on]:text-neutral-50',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-gray-200 bg-transparent hover:bg-gray-100 hover:text-neutral-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-neutral-50',
      },
      size: {
        default: 'h-10 px-3',
        sm: 'h-9 px-2.5',
        lg: 'h-11 px-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => {
  return <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className }))} {...props} />
})
Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
