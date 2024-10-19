'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const twStyles = {
  trigger: [
    'flex h-10 w-full items-center justify-between rounded-md border border-gray-200',
    'bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500',
    'focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-neutral-950',
    'dark:placeholder:text-neutral-400 dark:focus:ring-gray-300',
  ],
  triggerIcon: 'h-4 w-4 opacity-50',
  scrollUpButton: 'flex cursor-default items-center justify-center py-1',
  scrollDownButton: 'flex cursor-default items-center justify-center py-1',
  content: [
    'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border',
    'border-gray-200 bg-white text-neutral-950 shadow-md data-[state=open]:animate-in',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
    'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    'dark:border-gray-800 dark:bg-gray-950 dark:text-neutral-50',
  ],
  viewport: 'p-1',
  label: 'py-1.5 pl-8 pr-2 text-sm font-semibold',
  item: [
    'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2',
    'text-sm outline-none focus:bg-gray-100 focus:text-neutral-900',
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    'dark:focus:bg-gray-800 dark:focus:text-neutral-50',
  ],
  itemIndicator: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
  itemIndicatorIcon: 'h-4 w-4',
  separator: '-mx-1 my-1 h-px bg-gray-100 dark:bg-gray-800',
  chevrons: 'h-4 w-4',
}

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <SelectPrimitive.Trigger ref={ref} className={cn(twStyles.trigger, className)} {...props}>
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className={twStyles.triggerIcon} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
})
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => {
  return (
    <SelectPrimitive.ScrollUpButton ref={ref} className={cn(twStyles.scrollUpButton, className)} {...props}>
      <ChevronUp className={cn(twStyles.chevrons)} />
    </SelectPrimitive.ScrollUpButton>
  )
})
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => {
  return (
    <SelectPrimitive.ScrollDownButton ref={ref} className={cn(twStyles.scrollDownButton, className)} {...props}>
      <ChevronDown className={cn(twStyles.chevrons)} />
    </SelectPrimitive.ScrollDownButton>
  )
})
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content ref={ref} className={cn(twStyles.content, className)} position={position} {...props}>
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            twStyles.viewport,
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
})
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => {
  return <SelectPrimitive.Label ref={ref} className={cn(twStyles.label, className)} {...props} />
})
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <SelectPrimitive.Item ref={ref} className={cn(twStyles.item, className)} {...props}>
      <span className={twStyles.itemIndicator}>
        <SelectPrimitive.ItemIndicator>
          <Check className={twStyles.itemIndicatorIcon} />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
})
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => {
  return <SelectPrimitive.Separator ref={ref} className={cn(twStyles.separator, className)} {...props} />
})
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
