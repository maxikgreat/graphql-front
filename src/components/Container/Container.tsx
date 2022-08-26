import { PropsWithChildren } from 'react';

interface ContainerProps {
  className?: string;
}

export const Container = ({
  className = '',
  children,
}: PropsWithChildren<ContainerProps>) => (
  <div className={`bg-primary flex-start ${className}`}>
    <div className="box-width">{children}</div>
  </div>
);
