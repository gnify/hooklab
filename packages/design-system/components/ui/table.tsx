import type { ComponentPropsWithRef, JSX } from 'react';
import { cn } from '@hooklab/design-system/lib/utils';

function Table({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<'table'>): JSX.Element {
  return (
    <div className="relative w-full overflow-auto">
      <table
        ref={ref}
        className={cn('w-full caption-bottom text-sm', className)}
        {...props}
      />
    </div>
  );
}
Table.displayName = 'Table';

function TableHeader({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<'thead'>): JSX.Element {
  return (
    <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
  );
}
TableHeader.displayName = 'TableHeader';

function TableBody({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<'tbody'>): JSX.Element {
  return (
    <tbody
      ref={ref}
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  );
}
TableBody.displayName = 'TableBody';

function TableFooter({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<'tfoot'>): JSX.Element {
  return (
    <tfoot
      ref={ref}
      className={cn(
        'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
        className,
      )}
      {...props}
    />
  );
}
TableFooter.displayName = 'TableFooter';

function TableRow({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<'tr'>): JSX.Element {
  return (
    <tr
      ref={ref}
      className={cn(
        'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
        className,
      )}
      {...props}
    />
  );
}
TableRow.displayName = 'TableRow';

function TableHead({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<'th'>): JSX.Element {
  return (
    <th
      ref={ref}
      className={cn(
        'h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className,
      )}
      {...props}
    />
  );
}
TableHead.displayName = 'TableHead';

function TableCell({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<'td'>): JSX.Element {
  return (
    <td
      ref={ref}
      className={cn(
        'p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className,
      )}
      {...props}
    />
  );
}
TableCell.displayName = 'TableCell';

function TableCaption({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<'caption'>): JSX.Element {
  return (
    <caption
      ref={ref}
      className={cn('mt-4 text-sm text-muted-foreground', className)}
      {...props}
    />
  );
}
TableCaption.displayName = 'TableCaption';

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
