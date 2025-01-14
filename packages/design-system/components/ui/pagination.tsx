import type { ButtonProps } from '@hooklab/design-system/components/ui/button';
import type { ComponentProps, JSX } from 'react';
import { buttonVariants } from '@hooklab/design-system/components/ui/button';
import { cn } from '@hooklab/design-system/lib/utils';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from '@radix-ui/react-icons';

function Pagination({
  className,
  ...props
}: ComponentProps<'nav'>): JSX.Element {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  );
}

Pagination.displayName = 'Pagination';

interface PaginationContentProps extends ComponentProps<'ul'> {
  ref?: React.Ref<HTMLUListElement>;
}

function PaginationContent({
  className,
  ref,
  ...props
}: PaginationContentProps): JSX.Element {
  return (
    <ul
      ref={ref}
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  );
}

PaginationContent.displayName = 'PaginationContent';

interface PaginationItemProps extends ComponentProps<'li'> {
  ref?: React.Ref<HTMLLIElement>;
}

function PaginationItem({
  className,
  ref,
  ...props
}: PaginationItemProps): JSX.Element {
  return <li ref={ref} className={cn('', className)} {...props} />;
}

PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  ComponentProps<'a'>;

function PaginationLink({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps): JSX.Element {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? 'outline' : 'ghost',
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}

PaginationLink.displayName = 'PaginationLink';

function PaginationPrevious({
  className,
  ...props
}: ComponentProps<typeof PaginationLink>): JSX.Element {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn('gap-1 pl-2.5', className)}
      {...props}
    >
      <ChevronLeftIcon className="h-4 w-4" />
      <span>Previous</span>
    </PaginationLink>
  );
}

PaginationPrevious.displayName = 'PaginationPrevious';

function PaginationNext({
  className,
  ...props
}: ComponentProps<typeof PaginationLink>): JSX.Element {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn('gap-1 pr-2.5', className)}
      {...props}
    >
      <span>Next</span>
      <ChevronRightIcon className="h-4 w-4" />
    </PaginationLink>
  );
}

PaginationNext.displayName = 'PaginationNext';

function PaginationEllipsis({
  className,
  ...props
}: ComponentProps<'span'>): JSX.Element {
  return (
    <span
      aria-hidden
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      <DotsHorizontalIcon className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
