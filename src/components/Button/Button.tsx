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
  const defaultClassName = 'bg-blue-gradient text-primary';
  const outlineClassName = 'border-2 border-secondary text-gradient';

  const appearanceClassName =
    appearance === 'default' ? defaultClassName : outlineClassName;

  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className={`${appearanceClassName} rounded-xl disabled:opacity-70 disabled:cursor-not-allowed px-4 py-2 ${className}`}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};
