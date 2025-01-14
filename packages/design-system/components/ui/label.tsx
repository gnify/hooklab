'use client';

import type { ComponentPropsWithRef, JSX } from 'react';
import { cn } from '@hooklab/design-system/lib/utils';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
);

interface LabelProps
  extends ComponentPropsWithRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}

function Label({ className, ref, ...props }: LabelProps): JSX.Element {
  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants(), className)}
      {...props}
    />
  );
}

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
