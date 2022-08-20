import { HTMLProps, MouseEventHandler, PropsWithChildren } from 'react';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  appearance?: 'default' | 'outline';
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'submit';
  loading?: boolean;
}

export const Button = ({
  children,
  appearance = 'default',
  className = '',
  loading = false,
  disabled,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  const defaultClassName = 'bg-blue-900 text-white hover:bg-blue-700';
  const outlineClassName =
    'border-2 border-blue-900 text-blue-900 hover:bg-blue-700 hover:text-white hover:border-blue-700';

  const appearanceClassName =
    appearance === 'default' ? defaultClassName : outlineClassName;

  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className={`${appearanceClassName} disabled:opacity-70 disabled:cursor-not-allowed transition-colors px-4 py-2 rounded-xl ${className}`}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};
