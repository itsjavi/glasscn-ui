import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import * as React from "react";

import { type ButtonProps, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const twStyles = {
  pagination: "mx-auto flex w-full justify-center",
  paginationContent: "flex flex-row items-center gap-1",
  paginationItem: "",
  paginationLink: [
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2",
    "text-sm font-medium transition-colors hover:bg-neutral-100 hover:text-neutral-900",
    "focus:bg-neutral-100 focus:text-neutral-900 focus:outline-none disabled:pointer-events-none",
    "disabled:opacity-50 data-[active]:bg-neutral-100/50 data-[state=open]:bg-neutral-100/50",
    "dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
    "dark:focus:bg-neutral-800 dark:focus:text-neutral-50 dark:data-[active]:bg-neutral-800/50",
    "dark:data-[state=open]:bg-neutral-800/50",
  ],
  paginationPrevious: "gap-1 pl-2.5",
  paginationNext: "gap-1 pr-2.5",
  paginationEllipsis: "flex h-9 w-9 items-center justify-center",
  chevronIcon: "h-4 w-4",
  ellipsisIcon: "h-4 w-4",
};

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn(twStyles.pagination, className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(twStyles.paginationContent, className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn(twStyles.paginationItem, className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn(twStyles.paginationPrevious, className)}
    {...props}
  >
    <ChevronLeft className={twStyles.chevronIcon} />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn(twStyles.paginationNext, className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className={twStyles.chevronIcon} />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn(twStyles.paginationEllipsis, className)}
    {...props}
  >
    <MoreHorizontal className={twStyles.ellipsisIcon} />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
