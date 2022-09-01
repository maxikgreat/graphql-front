import { BaseSyntheticEvent, PropsWithChildren } from 'react';

interface AuthWrapperProps {
  onSubmit: (e: BaseSyntheticEvent) => void;
}

export const AuthWrapper = ({
  children,
  onSubmit,
}: PropsWithChildren<AuthWrapperProps>) => (
  <section className="w-screen h-[95vh] flex justify-center items-center bg-test">
    <form
      className="md:w-2/5 w-[90%] drop-shadow-md flex flex-col gap-3 p-5 bg-bastille rounded-2xl"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  </section>
);
