'use client';

import type { ComponentProps, ComponentPropsWithRef, JSX } from 'react';
import { cn } from '@hooklab/design-system/lib/utils';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

interface DialogOverlayProps
  extends ComponentPropsWithRef<typeof DialogPrimitive.Overlay> {}

function DialogOverlay({
  className,
  ref,
  ...props
}: DialogOverlayProps): JSX.Element {
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className,
      )}
      {...props}
    />
  );
}

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

interface DialogContentProps
  extends ComponentPropsWithRef<typeof DialogPrimitive.Content> {}

function DialogContent({
  className,
  children,
  ref,
  ...props
}: DialogContentProps): JSX.Element {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <Cross2Icon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

DialogContent.displayName = DialogPrimitive.Content.displayName;

interface DialogHeaderProps extends ComponentProps<'div'> {}

function DialogHeader({ className, ...props }: DialogHeaderProps): JSX.Element {
  return (
    <div
      className={cn(
        'flex flex-col space-y-1.5 text-center sm:text-left',
        className,
      )}
      {...props}
    />
  );
}

DialogHeader.displayName = 'DialogHeader';

interface DialogFooterProps extends ComponentProps<'div'> {}

function DialogFooter({ className, ...props }: DialogFooterProps): JSX.Element {
  return (
    <div
      className={cn(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
        className,
      )}
      {...props}
    />
  );
}

DialogFooter.displayName = 'DialogFooter';

interface DialogTitleProps
  extends ComponentPropsWithRef<typeof DialogPrimitive.Title> {}

function DialogTitle({
  className,
  ref,
  ...props
}: DialogTitleProps): JSX.Element {
  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn(
        'text-lg font-semibold leading-none tracking-tight',
        className,
      )}
      {...props}
    />
  );
}

DialogTitle.displayName = DialogPrimitive.Title.displayName;

interface DialogDescriptionProps
  extends ComponentPropsWithRef<typeof DialogPrimitive.Description> {}

function DialogDescription({
  className,
  ref,
  ...props
}: DialogDescriptionProps): JSX.Element {
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
}

DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
