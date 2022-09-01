import { clsx } from 'clsx';
import { PropsWithChildren } from 'react';

interface ContainerProps {
  className?: string;
}

export const Container = ({
  className,
  children,
}: PropsWithChildren<ContainerProps>) => (
  <div className={clsx('bg flex-start', className)}>
    <div className="box-width">{children}</div>
  </div>
);
