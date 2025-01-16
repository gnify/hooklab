'use client';

import type * as LabelPrimitive from '@radix-ui/react-label';
import type { ComponentPropsWithRef, HTMLAttributes, JSX } from 'react';
import type {
  ControllerProps,
  FieldError,
  FieldPath,
  FieldValues,
} from 'react-hook-form';

import { Label } from '@hooklab/design-system/components/ui/label';
import { cn } from '@hooklab/design-system/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { createContext, useContext, useId } from 'react';
import { Controller, FormProvider, useFormContext } from 'react-hook-form';

const Form = FormProvider;

interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  name: TName;
}

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

interface FormItemContextValue {
  id: string;
}

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ ...props }: ControllerProps<TFieldValues, TName>): JSX.Element {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
}

function useFormField(): {
  invalid: boolean;
  isDirty: boolean;
  isTouched: boolean;
  isValidating: boolean;
  error?: FieldError;
  id: string;
  name: string;
  formItemId: string;
  formDescriptionId: string;
  formMessageId: string;
} {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
}

interface FormItemProps extends HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

const FormItem = ({ className, ref, ...props }: FormItemProps): JSX.Element => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn('space-y-2', className)} {...props} />
    </FormItemContext.Provider>
  );
};

FormItem.displayName = 'FormItem';

interface FormLabelProps
  extends ComponentPropsWithRef<typeof LabelPrimitive.Root> {}

const FormLabel = ({
  className,
  ref,
  ...props
}: FormLabelProps): JSX.Element => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && 'text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  );
};

FormLabel.displayName = 'FormLabel';

interface FormControlProps extends ComponentPropsWithRef<typeof Slot> {}

const FormControl = ({ ref, ...props }: FormControlProps): JSX.Element => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
};

FormControl.displayName = 'FormControl';

interface FormDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

const FormDescription = ({
  className,
  ref,
  ...props
}: FormDescriptionProps): JSX.Element => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn('text-[0.8rem] text-muted-foreground', className)}
      {...props}
    />
  );
};

FormDescription.displayName = 'FormDescription';

interface FormMessageProps extends HTMLAttributes<HTMLParagraphElement> {}

const FormMessage = ({
  className,
  children,
  ref,
  ...props
}: FormMessageProps): JSX.Element => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn('text-[0.8rem] font-medium text-destructive', className)}
      {...props}
    >
      {body}
    </p>
  );
};

FormMessage.displayName = 'FormMessage';

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
};
