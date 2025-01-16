'use client';

import type { ComponentPropsWithRef, JSX } from 'react';
import { cn } from '@hooklab/design-system/lib/utils';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

function Avatar({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof AvatarPrimitive.Root>): JSX.Element {
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
        className,
      )}
      {...props}
    />
  );
}

Avatar.displayName = AvatarPrimitive.Root.displayName;

function AvatarImage({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof AvatarPrimitive.Image>): JSX.Element {
  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={cn('aspect-square h-full w-full', className)}
      {...props}
    />
  );
}

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

function AvatarFallback({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof AvatarPrimitive.Fallback>): JSX.Element {
  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-muted',
        className,
      )}
      {...props}
    />
  );
}

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarFallback, AvatarImage };
