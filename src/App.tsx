import { Navbar } from '@/components';
import { AuthContext } from '@/context/auth/auth';
import { AppRoutes } from '@/pages/AppRoutes';
import { tokens } from '@/services/tokens';
import {
  CheckTokenQuery,
  useCheckTokenLazyQuery,
} from '@graphql/generated/types';
import { useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [checkTokenQuery] = useCheckTokenLazyQuery({
    onCompleted: (data: CheckTokenQuery) => checkTokenSuccess(data.checkToken),
  });

  const { checkTokenSuccess } = useContext(AuthContext);

  useEffect(() => {
    if (!tokens.get().access) {
      return;
    }

    checkTokenQuery();
  }, [checkTokenQuery]);

  return (
    <>
      <ToastContainer hideProgressBar />
      <main className="bg-primary w-full overflow-hidden">
        <Navbar />
        <AppRoutes />
      </main>
    </>
  );
};
