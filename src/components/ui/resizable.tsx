import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "@/lib/utils";

const twStyles = {
  panelGroup: [
    "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
  ],
  resizeHandle: [
    "relative flex w-px items-center justify-center bg-neutral-200 after:absolute",
    "after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none",
    "focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-1",
    "data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full",
    "data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1",
    "data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2",
    "data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
    "dark:bg-neutral-800 dark:focus-visible:ring-neutral-300",
  ],
  resizeHandleInner: [
    "z-10 flex h-4 w-3 items-center justify-center rounded-sm border border-neutral-200",
    "bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-800",
  ],
  grip: "h-2.5 w-2.5",
};

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(twStyles.panelGroup, className)}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(twStyles.resizeHandle, className)}
    {...props}
  >
    {withHandle && (
      <div className={cn(twStyles.resizeHandleInner)}>
        <GripVertical className={cn(twStyles.grip)} />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

export { ResizableHandle, ResizablePanel, ResizablePanelGroup };
