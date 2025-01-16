'use client';

import type { ComponentPropsWithRef, JSX } from 'react';
import { cn } from '@hooklab/design-system/lib/utils';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const Accordion = AccordionPrimitive.Root;

function AccordionItem({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof AccordionPrimitive.Item>): JSX.Element {
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn('border-b', className)}
      {...props}
    />
  );
}

AccordionItem.displayName = 'AccordionItem';

function AccordionTrigger({
  className,
  children,
  ref,
  ...props
}: ComponentPropsWithRef<typeof AccordionPrimitive.Trigger>): JSX.Element {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

function AccordionContent({
  className,
  children,
  ref,
  ...props
}: ComponentPropsWithRef<typeof AccordionPrimitive.Content>): JSX.Element {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn('pb-4 pt-0', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
