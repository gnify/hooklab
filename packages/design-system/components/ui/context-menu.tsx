'use client';

import type { ComponentProps, ComponentPropsWithRef, JSX } from 'react';
import { cn } from '@hooklab/design-system/lib/utils';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from '@radix-ui/react-icons';

const ContextMenu = ContextMenuPrimitive.Root;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
const ContextMenuGroup = ContextMenuPrimitive.Group;
const ContextMenuPortal = ContextMenuPrimitive.Portal;
const ContextMenuSub = ContextMenuPrimitive.Sub;
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

interface ContextMenuSubTriggerProps
  extends ComponentPropsWithRef<typeof ContextMenuPrimitive.SubTrigger> {
  inset?: boolean;
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ref,
  ...props
}: ContextMenuSubTriggerProps): JSX.Element {
  return (
    <ContextMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
        inset && 'pl-8',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </ContextMenuPrimitive.SubTrigger>
  );
}

ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

interface ContextMenuSubContentProps
  extends ComponentPropsWithRef<typeof ContextMenuPrimitive.SubContent> {}

function ContextMenuSubContent({
  className,
  ref,
  ...props
}: ContextMenuSubContentProps): JSX.Element {
  return (
    <ContextMenuPrimitive.SubContent
      ref={ref}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  );
}

ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

interface ContextMenuContentProps
  extends ComponentPropsWithRef<typeof ContextMenuPrimitive.Content> {}

function ContextMenuContent({
  className,
  ref,
  ...props
}: ContextMenuContentProps): JSX.Element {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        ref={ref}
        className={cn(
          'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
}

ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

interface ContextMenuItemProps
  extends ComponentPropsWithRef<typeof ContextMenuPrimitive.Item> {
  inset?: boolean;
}

function ContextMenuItem({
  className,
  inset,
  ref,
  ...props
}: ContextMenuItemProps): JSX.Element {
  return (
    <ContextMenuPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        className,
      )}
      {...props}
    />
  );
}

ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

interface ContextMenuCheckboxItemProps
  extends ComponentPropsWithRef<typeof ContextMenuPrimitive.CheckboxItem> {}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ref,
  ...props
}: ContextMenuCheckboxItemProps): JSX.Element {
  return (
    <ContextMenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}

ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName;

interface ContextMenuRadioItemProps
  extends ComponentPropsWithRef<typeof ContextMenuPrimitive.RadioItem> {}

function ContextMenuRadioItem({
  className,
  children,
  ref,
  ...props
}: ContextMenuRadioItemProps): JSX.Element {
  return (
    <ContextMenuPrimitive.RadioItem
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <DotFilledIcon className="h-4 w-4 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}

ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

interface ContextMenuLabelProps
  extends ComponentPropsWithRef<typeof ContextMenuPrimitive.Label> {
  inset?: boolean;
}

function ContextMenuLabel({
  className,
  inset,
  ref,
  ...props
}: ContextMenuLabelProps): JSX.Element {
  return (
    <ContextMenuPrimitive.Label
      ref={ref}
      className={cn(
        'px-2 py-1.5 text-sm font-semibold text-foreground',
        inset && 'pl-8',
        className,
      )}
      {...props}
    />
  );
}

ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

interface ContextMenuSeparatorProps
  extends ComponentPropsWithRef<typeof ContextMenuPrimitive.Separator> {}

function ContextMenuSeparator({
  className,
  ref,
  ...props
}: ContextMenuSeparatorProps): JSX.Element {
  return (
    <ContextMenuPrimitive.Separator
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-border', className)}
      {...props}
    />
  );
}

ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

interface ContextMenuShortcutProps extends ComponentProps<'span'> {}

function ContextMenuShortcut({
  className,
  ...props
}: ContextMenuShortcutProps): JSX.Element {
  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest text-muted-foreground',
        className,
      )}
      {...props}
    />
  );
}

ContextMenuShortcut.displayName = 'ContextMenuShortcut';

export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
};
