import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const twStyles = {
  subTrigger: [
    "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
    "focus:bg-neutral-100 focus:text-neutral-900 data-[state=open]:bg-neutral-100",
    "data-[state=open]:text-neutral-900 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",
    "dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-50",
  ],
  chevronRight: "ml-auto h-4 w-4",
  checkboxItemIndicator:
    "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
  checkIcon: "h-4 w-4",
  radioItemIndicator:
    "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
  circleIcon: "h-2 w-2 fill-current",
  subContent: [
    "z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200",
    "bg-white p-1 text-neutral-950 shadow-lg data-[state=open]:animate-in",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
    "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    "dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
  ],
  content: [
    "z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200",
    "bg-white p-1 text-neutral-950 shadow-md animate-in fade-in-80",
    "data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
    "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    "dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
  ],
  item: [
    "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm",
    "outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none",
    "data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",
  ],
  checkboxItem: [
    "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm",
    "outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none",
    "data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",
  ],
  radioItem: [
    "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm",
    "outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none",
    "data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",
  ],
  label:
    "px-2 py-1.5 text-sm font-semibold text-neutral-950 dark:text-neutral-50",
  separator: "-mx-1 my-1 h-px bg-neutral-200 dark:bg-neutral-800",
  shortcut:
    "ml-auto text-xs tracking-widest text-neutral-500 dark:text-neutral-400",
};

const ContextMenu = ContextMenuPrimitive.Root;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
const ContextMenuGroup = ContextMenuPrimitive.Group;
const ContextMenuPortal = ContextMenuPrimitive.Portal;
const ContextMenuSub = ContextMenuPrimitive.Sub;
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(twStyles.subTrigger, inset && "pl-8", className)}
    {...props}
  >
    {children}
    <ChevronRight className={cn(twStyles.chevronRight)} />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(twStyles.subContent, className)}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(twStyles.content, className)}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(twStyles.item, inset && "pl-8", className)}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(twStyles.checkboxItem, className)}
    checked={checked}
    {...props}
  >
    <span className={cn(twStyles.checkboxItemIndicator)}>
      <ContextMenuPrimitive.ItemIndicator>
        <Check className={cn(twStyles.checkIcon)} />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(twStyles.radioItem, className)}
    {...props}
  >
    <span className={cn(twStyles.radioItemIndicator)}>
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className={cn(twStyles.circleIcon)} />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(twStyles.label, inset && "pl-8", className)}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn(twStyles.separator, className)}
    {...props}
  />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn(twStyles.shortcut, className)} {...props} />;
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
};