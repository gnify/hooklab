'use client';

import type { ComponentProps, ComponentPropsWithRef, JSX } from 'react';
import { cn } from '@hooklab/design-system/lib/utils';
import { Drawer as DrawerPrimitive } from 'vaul';

function Drawer({
  shouldScaleBackground = true,
  ...props
}: ComponentProps<typeof DrawerPrimitive.Root>): JSX.Element {
  return (
    <DrawerPrimitive.Root
      shouldScaleBackground={shouldScaleBackground}
      {...props}
    />
  );
}
Drawer.displayName = 'Drawer';

const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerClose = DrawerPrimitive.Close;

function DrawerOverlay({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof DrawerPrimitive.Overlay>): JSX.Element {
  return (
    <DrawerPrimitive.Overlay
      ref={ref}
      className={cn('fixed inset-0 z-50 bg-black/80', className)}
      {...props}
    />
  );
}

DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

function DrawerContent({
  className,
  children,
  ref,
  ...props
}: ComponentPropsWithRef<typeof DrawerPrimitive.Content>): JSX.Element {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background',
          className,
        )}
        {...props}
      >
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

DrawerContent.displayName = 'DrawerContent';

function DrawerHeader({
  className,
  ...props
}: ComponentProps<'div'>): JSX.Element {
  return (
    <div
      className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)}
      {...props}
    />
  );
}

DrawerHeader.displayName = 'DrawerHeader';

function DrawerFooter({
  className,
  ...props
}: ComponentProps<'div'>): JSX.Element {
  return (
    <div
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  );
}

DrawerFooter.displayName = 'DrawerFooter';

function DrawerTitle({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof DrawerPrimitive.Title>): JSX.Element {
  return (
    <DrawerPrimitive.Title
      ref={ref}
      className={cn(
        'text-lg font-semibold leading-none tracking-tight',
        className,
      )}
      {...props}
    />
  );
}

DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

function DrawerDescription({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof DrawerPrimitive.Description>): JSX.Element {
  return (
    <DrawerPrimitive.Description
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
}

DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
};
