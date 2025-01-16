import type { ComponentProps, ComponentPropsWithRef, JSX } from 'react';
import { cn } from '@hooklab/design-system/lib/utils';
import { ChevronRightIcon, DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Slot } from '@radix-ui/react-slot';

function Breadcrumb({
  ref,
  ...props
}: ComponentPropsWithRef<'nav'> & {
  separator?: React.ReactNode;
}): JSX.Element {
  return <nav ref={ref} aria-label="breadcrumb" {...props} />;
}

Breadcrumb.displayName = 'Breadcrumb';

function BreadcrumbList({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<'ol'>): JSX.Element {
  return (
    <ol
      ref={ref}
      className={cn(
        'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
        className,
      )}
      {...props}
    />
  );
}

BreadcrumbList.displayName = 'BreadcrumbList';

function BreadcrumbItem({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<'li'>): JSX.Element {
  return (
    <li
      ref={ref}
      className={cn('inline-flex items-center gap-1.5', className)}
      {...props}
    />
  );
}

BreadcrumbItem.displayName = 'BreadcrumbItem';

function BreadcrumbLink({
  asChild,
  className,
  ref,
  ...props
}: ComponentPropsWithRef<'a'> & {
  asChild?: boolean;
}): JSX.Element {
  const Comp = asChild ? Slot : 'a';
  return (
    <Comp
      ref={ref}
      className={cn('transition-colors hover:text-foreground', className)}
      {...props}
    />
  );
}

BreadcrumbLink.displayName = 'BreadcrumbLink';

function BreadcrumbPage({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<'span'>): JSX.Element {
  return (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('font-normal text-foreground', className)}
      {...props}
    />
  );
}

BreadcrumbPage.displayName = 'BreadcrumbPage';

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: ComponentProps<'li'>): JSX.Element {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn('[&>svg]:w-3.5 [&>svg]:h-3.5', className)}
      {...props}
    >
      {children ?? <ChevronRightIcon />}
    </li>
  );
}

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

function BreadcrumbEllipsis({
  className,
  ...props
}: ComponentProps<'span'>): JSX.Element {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      <DotsHorizontalIcon className="h-4 w-4" />
      <span className="sr-only">More</span>
    </span>
  );
}

BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
