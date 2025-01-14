'use client';

import type { ComponentPropsWithRef, JSX } from 'react';
import { cn } from '@hooklab/design-system/lib/utils';
import * as ProgressPrimitive from '@radix-ui/react-progress';

interface ProgressProps
  extends ComponentPropsWithRef<typeof ProgressPrimitive.Root> {
  value?: number;
}

function Progress({
  className,
  value,
  ref,
  ...props
}: ProgressProps): JSX.Element {
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'relative h-2 w-full overflow-hidden rounded-full bg-primary/20',
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
