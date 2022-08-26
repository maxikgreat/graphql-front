import { PropsWithChildren } from 'react';

export const Paragraph = ({ children }: PropsWithChildren) => (
  <p className="text-[18px] leading-[23px]">
    <span className="text-gradient">{children}</span>
  </p>
);
