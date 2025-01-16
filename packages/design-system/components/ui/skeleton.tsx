import type { ComponentProps, JSX } from 'react';
import { cn } from '@hooklab/design-system/lib/utils';

function Skeleton({ className, ...props }: ComponentProps<'div'>): JSX.Element {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-primary/10', className)}
      {...props}
    />
  );
}

export { Skeleton };
