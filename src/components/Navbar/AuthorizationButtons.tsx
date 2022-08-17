import { Button } from "@components/Button";

interface TryForFreeProps {
  className?: string;
}

export const AuthorizationButtons = ({ className = "" }: TryForFreeProps) => (
  <div className={`${className} gap-3`}>
    <Button>Sign up</Button>
    <Button appearance="outline">Sign in</Button>
  </div>
);
