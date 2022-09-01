import { Button } from '@/components/Button';
import { AuthContext } from '@/context/auth/auth';
import { AppRoute } from '@/pages/AppRoutes';
import { clsx } from 'clsx';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

interface TryForFreeProps {
  className?: string;
}

export const AuthorizationButtons = ({ className }: TryForFreeProps) => {
  const navigate = useNavigate();
  const { user, signOut } = useContext(AuthContext);

  const signOutHandler = () => signOut().then(() => navigate(AppRoute.Home));

  return (
    <div className={clsx(className, 'gap-3')}>
      {user ? (
        <Button onClick={signOutHandler} appearance="outline">
          Sign out
        </Button>
      ) : (
        <>
          <Button onClick={() => navigate(AppRoute.SignUp)}>Sign up</Button>
          <Button
            onClick={() => navigate(AppRoute.SignIn)}
            appearance="outline"
          >
            Sign in
          </Button>
        </>
      )}
    </div>
  );
};
