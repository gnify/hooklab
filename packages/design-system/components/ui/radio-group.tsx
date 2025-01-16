'use client';

import type { ComponentPropsWithRef, JSX } from 'react';
import { cn } from '@hooklab/design-system/lib/utils';
import { CheckIcon } from '@radix-ui/react-icons';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

interface RadioGroupProps
  extends ComponentPropsWithRef<typeof RadioGroupPrimitive.Root> {}

function RadioGroup({
  className,
  ref,
  ...props
}: RadioGroupProps): JSX.Element {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  );
}

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

interface RadioGroupItemProps
  extends ComponentPropsWithRef<typeof RadioGroupPrimitive.Item> {}

function RadioGroupItem({
  className,
  ref,
  ...props
}: RadioGroupItemProps): JSX.Element {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <CheckIcon className="h-3.5 w-3.5 fill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
