import style from './Input.module.css';
import { clsx } from 'clsx';
import { forwardRef, HTMLProps, useId } from 'react';

type InputProps = HTMLProps<HTMLInputElement> & {
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error = '', placeholder = '...', ...rest }, ref) => {
    const generatedId = useId();

    const inputId = generatedId ?? id;

    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={inputId} className="px-3 text-white truncate">
          {label}
        </label>
        <input
          {...rest}
          ref={ref}
          placeholder={placeholder}
          className={clsx(
            style.input,
            'rounded-md border-pink-700 bg-baltic-sea text-white px-3 py-1 disabled:cursor-not-allowed border-[1px] focus-visible:border-secondary focus-visible:outline-none transition-all',
            {
              'border-error': !!error,
              'border-black': !error,
            },
          )}
          id={inputId}
        />
        <p className="px-3 min-h-[24px] text-error truncate">{error}</p>
      </div>
    );
  },
);
