'use client';

import type { ComponentPropsWithRef, JSX } from 'react';
import { cn } from '@hooklab/design-system/lib/utils';
import { DashIcon } from '@radix-ui/react-icons';
import { OTPInput, OTPInputContext } from 'input-otp';
import { useContext } from 'react';

function InputOTP({
  className,
  containerClassName,
  ref,
  ...props
}: ComponentPropsWithRef<typeof OTPInput> & {
  containerClassName?: string;
}): JSX.Element {
  return (
    <OTPInput
      ref={ref}
      containerClassName={cn(
        'flex items-center gap-2 has-[:disabled]:opacity-50',
        containerClassName,
      )}
      className={cn('disabled:cursor-not-allowed', className)}
      {...props}
    />
  );
}

InputOTP.displayName = 'InputOTP';

interface InputOTPGroupProps extends ComponentPropsWithRef<'div'> {}

function InputOTPGroup({
  className,
  ref,
  ...props
}: InputOTPGroupProps): JSX.Element {
  return (
    <div ref={ref} className={cn('flex items-center', className)} {...props} />
  );
}

InputOTPGroup.displayName = 'InputOTPGroup';

interface InputOTPSlotProps extends ComponentPropsWithRef<'div'> {
  index: number;
}

function InputOTPSlot({
  index,
  className,
  ref,
  ...props
}: InputOTPSlotProps): JSX.Element {
  const inputOTPContext = useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        'relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
        isActive && 'z-10 ring-1 ring-ring',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
}

InputOTPSlot.displayName = 'InputOTPSlot';

interface InputOTPSeparatorProps extends ComponentPropsWithRef<'div'> {}

function InputOTPSeparator({
  ref,
  ...props
}: InputOTPSeparatorProps): JSX.Element {
  return (
    <div ref={ref} role="separator" {...props}>
      <DashIcon />
    </div>
  );
}

InputOTPSeparator.displayName = 'InputOTPSeparator';

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
