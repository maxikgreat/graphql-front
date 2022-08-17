import { Navbar } from '@components/Navbar';
import { AppRoutes } from '@pages/AppRoutes';

export const App = () => (
  <>
    <Navbar />
    <main>
      <AppRoutes />
    </main>
  </>
);
