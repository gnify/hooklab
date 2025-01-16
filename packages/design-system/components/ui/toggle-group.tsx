'use client';

import type { VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithRef, JSX } from 'react';
import { toggleVariants } from '@hooklab/design-system/components/ui/toggle';
import { cn } from '@hooklab/design-system/lib/utils';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { createContext, useContext } from 'react';

const ToggleGroupContext = createContext<VariantProps<typeof toggleVariants>>({
  size: 'default',
  variant: 'default',
});

function ToggleGroup({
  className,
  variant,
  size,
  children,
  ref,
  ...props
}: ComponentPropsWithRef<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>): JSX.Element {
  return (
    <ToggleGroupPrimitive.Root
      ref={ref}
      className={cn('flex items-center justify-center gap-1', className)}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
}

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ref,
  ...props
}: ComponentPropsWithRef<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>): JSX.Element {
  const context = useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
