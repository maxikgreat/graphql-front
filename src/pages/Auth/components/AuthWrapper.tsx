import { BaseSyntheticEvent, PropsWithChildren } from 'react';

interface AuthWrapperProps {
  onSubmit: (e: BaseSyntheticEvent) => void;
}

export const AuthWrapper = ({
  children,
  onSubmit,
}: PropsWithChildren<AuthWrapperProps>) => (
  <section className="w-screen h-screen flex justify-center items-center">
    <form
      className="md:w-2/5 w-[90%] drop-shadow-md bg-blue-50 rounded-md flex flex-col gap-6 p-5"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  </section>
);
