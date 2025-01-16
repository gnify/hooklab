'use client';

import type { DialogProps } from '@radix-ui/react-dialog';
import type { ComponentPropsWithRef, JSX } from 'react';
import {
  Dialog,
  DialogContent,
} from '@hooklab/design-system/components/ui/dialog';
import { cn } from '@hooklab/design-system/lib/utils';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Command as CommandPrimitive } from 'cmdk';

interface CommandProps extends ComponentPropsWithRef<typeof CommandPrimitive> {}

const Command = ({ className, ref, ...props }: CommandProps): JSX.Element => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
      className,
    )}
    {...props}
  />
);

Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

function CommandDialog({
  children,
  ...props
}: CommandDialogProps): JSX.Element {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
}

interface CommandInputProps
  extends ComponentPropsWithRef<typeof CommandPrimitive.Input> {}

const CommandInput = ({
  className,
  ref,
  ...props
}: CommandInputProps): JSX.Element => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  </div>
);

CommandInput.displayName = CommandPrimitive.Input.displayName;

interface CommandListProps
  extends ComponentPropsWithRef<typeof CommandPrimitive.List> {}

function CommandList({
  className,
  ref,
  ...props
}: CommandListProps): JSX.Element {
  return (
    <CommandPrimitive.List
      ref={ref}
      className={cn(
        'max-h-[300px] overflow-y-auto overflow-x-hidden',
        className,
      )}
      {...props}
    />
  );
}

CommandList.displayName = CommandPrimitive.List.displayName;

interface CommandEmptyProps
  extends ComponentPropsWithRef<typeof CommandPrimitive.Empty> {}

function CommandEmpty({ ref, ...props }: CommandEmptyProps): JSX.Element {
  return (
    <CommandPrimitive.Empty
      ref={ref}
      className="py-6 text-center text-sm"
      {...props}
    />
  );
}

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

interface CommandGroupProps
  extends ComponentPropsWithRef<typeof CommandPrimitive.Group> {}

function CommandGroup({
  className,
  ref,
  ...props
}: CommandGroupProps): JSX.Element {
  return (
    <CommandPrimitive.Group
      ref={ref}
      className={cn(
        'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
        className,
      )}
      {...props}
    />
  );
}

CommandGroup.displayName = CommandPrimitive.Group.displayName;

interface CommandSeparatorProps
  extends ComponentPropsWithRef<typeof CommandPrimitive.Separator> {}

function CommandSeparator({
  className,
  ref,
  ...props
}: CommandSeparatorProps): JSX.Element {
  return (
    <CommandPrimitive.Separator
      ref={ref}
      className={cn('-mx-1 h-px bg-border', className)}
      {...props}
    />
  );
}

CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

interface CommandItemProps
  extends ComponentPropsWithRef<typeof CommandPrimitive.Item> {}

function CommandItem({
  className,
  ref,
  ...props
}: CommandItemProps): JSX.Element {
  return (
    <CommandPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        className,
      )}
      {...props}
    />
  );
}

CommandItem.displayName = CommandPrimitive.Item.displayName;

interface CommandShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {}

function CommandShortcut({
  className,
  ...props
}: CommandShortcutProps): JSX.Element {
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

CommandShortcut.displayName = 'CommandShortcut';

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
};
