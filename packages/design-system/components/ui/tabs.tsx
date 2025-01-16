'use client';

import type { JSX } from 'react';
import { cn } from '@hooklab/design-system/lib/utils';
import * as TabsPrimitive from '@radix-ui/react-tabs';

const Tabs = TabsPrimitive.Root;

function TabsList({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof TabsPrimitive.List>): JSX.Element {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
        className,
      )}
      {...props}
    />
  );
}

TabsList.displayName = TabsPrimitive.List.displayName;

function TabsTrigger({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof TabsPrimitive.Trigger>): JSX.Element {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
        className,
      )}
      {...props}
    />
  );
}

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

function TabsContent({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof TabsPrimitive.Content>): JSX.Element {
  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    />
  );
}

TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
