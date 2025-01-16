'use client';

import type { ComponentProps, ComponentPropsWithRef, JSX } from 'react';
import { cn } from '@hooklab/design-system/lib/utils';
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from '@radix-ui/react-icons';
import * as MenubarPrimitive from '@radix-ui/react-menubar';

const MenubarMenu: typeof MenubarPrimitive.Menu = MenubarPrimitive.Menu;
const MenubarGroup = MenubarPrimitive.Group;
const MenubarPortal = MenubarPrimitive.Portal;
const MenubarSub = MenubarPrimitive.Sub;
const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

interface MenubarProps
  extends ComponentPropsWithRef<typeof MenubarPrimitive.Root> {}

function Menubar({ className, ref, ...props }: MenubarProps): JSX.Element {
  return (
    <MenubarPrimitive.Root
      ref={ref}
      className={cn(
        'flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm',
        className,
      )}
      {...props}
    />
  );
}

Menubar.displayName = MenubarPrimitive.Root.displayName;

interface MenubarTriggerProps
  extends ComponentPropsWithRef<typeof MenubarPrimitive.Trigger> {}

function MenubarTrigger({
  className,
  ref,
  ...props
}: MenubarTriggerProps): JSX.Element {
  return (
    <MenubarPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
        className,
      )}
      {...props}
    />
  );
}

MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

interface MenubarSubTriggerProps
  extends ComponentPropsWithRef<typeof MenubarPrimitive.SubTrigger> {
  inset?: boolean;
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ref,
  ...props
}: MenubarSubTriggerProps): JSX.Element {
  return (
    <MenubarPrimitive.SubTrigger
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
    </MenubarPrimitive.SubTrigger>
  );
}

MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

interface MenubarSubContentProps
  extends ComponentPropsWithRef<typeof MenubarPrimitive.SubContent> {}

function MenubarSubContent({
  className,
  ref,
  ...props
}: MenubarSubContentProps): JSX.Element {
  return (
    <MenubarPrimitive.SubContent
      ref={ref}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  );
}

MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

interface MenubarContentProps
  extends ComponentPropsWithRef<typeof MenubarPrimitive.Content> {
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  sideOffset?: number;
}

function MenubarContent({
  className,
  align = 'start',
  alignOffset = -4,
  sideOffset = 8,
  ref,
  ...props
}: MenubarContentProps): JSX.Element {
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          'z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  );
}

MenubarContent.displayName = MenubarPrimitive.Content.displayName;

interface MenubarItemProps
  extends ComponentPropsWithRef<typeof MenubarPrimitive.Item> {
  inset?: boolean;
}

function MenubarItem({
  className,
  inset,
  ref,
  ...props
}: MenubarItemProps): JSX.Element {
  return (
    <MenubarPrimitive.Item
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

MenubarItem.displayName = MenubarPrimitive.Item.displayName;

interface MenubarCheckboxItemProps
  extends ComponentPropsWithRef<typeof MenubarPrimitive.CheckboxItem> {}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ref,
  ...props
}: MenubarCheckboxItemProps): JSX.Element {
  return (
    <MenubarPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
}

MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

interface MenubarRadioItemProps
  extends ComponentPropsWithRef<typeof MenubarPrimitive.RadioItem> {}

function MenubarRadioItem({
  className,
  children,
  ref,
  ...props
}: MenubarRadioItemProps): JSX.Element {
  return (
    <MenubarPrimitive.RadioItem
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <DotFilledIcon className="h-4 w-4 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  );
}

MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

interface MenubarLabelProps
  extends ComponentPropsWithRef<typeof MenubarPrimitive.Label> {
  inset?: boolean;
}

function MenubarLabel({
  className,
  inset,
  ref,
  ...props
}: MenubarLabelProps): JSX.Element {
  return (
    <MenubarPrimitive.Label
      ref={ref}
      className={cn(
        'px-2 py-1.5 text-sm font-semibold',
        inset && 'pl-8',
        className,
      )}
      {...props}
    />
  );
}

MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

interface MenubarSeparatorProps
  extends ComponentPropsWithRef<typeof MenubarPrimitive.Separator> {}

function MenubarSeparator({
  className,
  ref,
  ...props
}: MenubarSeparatorProps): JSX.Element {
  return (
    <MenubarPrimitive.Separator
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-muted', className)}
      {...props}
    />
  );
}

MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

interface MenubarShortcutProps extends ComponentProps<'span'> {}

function MenubarShortcut({
  className,
  ...props
}: MenubarShortcutProps): JSX.Element {
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

MenubarShortcut.displayName = 'MenubarShortcut';

export {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
};
