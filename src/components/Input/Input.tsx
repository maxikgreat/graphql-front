import { forwardRef, HTMLProps, useId } from 'react';

type InputProps = HTMLProps<HTMLInputElement> & {
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error = '', ...rest }, ref) => {
    const generatedId = useId();

    const inputId = generatedId ?? id;

    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={inputId} className="text-blue-900">
          {label}
        </label>
        <input
          {...rest}
          ref={ref}
          className="rounded-md px-3 py-1 disabled:cursor-not-allowed"
          id={inputId}
        />
        <p className="min-h-[24px] text-red-700">{error}</p>
      </div>
    );
  },
);
