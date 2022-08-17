import { Button } from '@components/Button';
import { AppRoute } from '@pages/AppRoutes';
import { useNavigate } from 'react-router-dom';

interface TryForFreeProps {
  className?: string;
}

export const AuthorizationButtons = ({ className = '' }: TryForFreeProps) => {
  const navigate = useNavigate();
  return (
    <div className={`${className} gap-3`}>
      <Button onClick={() => navigate(AppRoute.SignUp)}>Sign up</Button>
      <Button onClick={() => navigate(AppRoute.SignIn)} appearance="outline">
        Sign in
      </Button>
    </div>
  );
};
