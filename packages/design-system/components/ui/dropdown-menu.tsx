'use client';

import type { ComponentProps, ComponentPropsWithRef, JSX } from 'react';
import { cn } from '@hooklab/design-system/lib/utils';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from '@radix-ui/react-icons';

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

interface DropdownMenuSubTriggerProps
  extends ComponentPropsWithRef<typeof DropdownMenuPrimitive.SubTrigger> {
  inset?: boolean;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ref,
  ...props
}: DropdownMenuSubTriggerProps): JSX.Element {
  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
        'flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        inset && 'pl-8',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

interface DropdownMenuSubContentProps
  extends ComponentPropsWithRef<typeof DropdownMenuPrimitive.SubContent> {}

function DropdownMenuSubContent({
  className,
  ref,
  ...props
}: DropdownMenuSubContentProps): JSX.Element {
  return (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  );
}

DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

interface DropdownMenuContentProps
  extends ComponentPropsWithRef<typeof DropdownMenuPrimitive.Content> {
  sideOffset?: number;
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ref,
  ...props
}: DropdownMenuContentProps): JSX.Element {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

interface DropdownMenuItemProps
  extends ComponentPropsWithRef<typeof DropdownMenuPrimitive.Item> {
  inset?: boolean;
}

function DropdownMenuItem({
  className,
  inset,
  ref,
  ...props
}: DropdownMenuItemProps): JSX.Element {
  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
        inset && 'pl-8',
        className,
      )}
      {...props}
    />
  );
}

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

interface DropdownMenuCheckboxItemProps
  extends ComponentPropsWithRef<typeof DropdownMenuPrimitive.CheckboxItem> {}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ref,
  ...props
}: DropdownMenuCheckboxItemProps): JSX.Element {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

interface DropdownMenuRadioItemProps
  extends ComponentPropsWithRef<typeof DropdownMenuPrimitive.RadioItem> {}

function DropdownMenuRadioItem({
  className,
  children,
  ref,
  ...props
}: DropdownMenuRadioItemProps): JSX.Element {
  return (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <DotFilledIcon className="h-4 w-4 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

interface DropdownMenuLabelProps
  extends ComponentPropsWithRef<typeof DropdownMenuPrimitive.Label> {
  inset?: boolean;
}

// to-function
const DropdownMenuLabel = ({
  className,
  inset,
  ref,
  ...props
}: DropdownMenuLabelProps): JSX.Element => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
);

DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

interface DropdownMenuSeparatorProps
  extends ComponentPropsWithRef<typeof DropdownMenuPrimitive.Separator> {}

function DropdownMenuSeparator({
  className,
  ref,
  ...props
}: DropdownMenuSeparatorProps): JSX.Element {
  return (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-muted', className)}
      {...props}
    />
  );
}

DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

interface DropdownMenuShortcutProps extends ComponentProps<'span'> {}

function DropdownMenuShortcut({
  className,
  ...props
}: DropdownMenuShortcutProps): JSX.Element {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
      {...props}
    />
  );
}

DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
};
