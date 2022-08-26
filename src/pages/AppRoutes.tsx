import { SignIn, SignUp } from '@/pages/Auth';
import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';
import { Routes, Route } from 'react-router-dom';

export enum AppRoute {
  Home = '/',
  SignIn = 'sign-in',
  SignUp = 'sign-up',
}

export const AppRoutes = () => (
  <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path={AppRoute.Home} element={<Home />} />
    <Route path={AppRoute.SignIn} element={<SignIn />} />
    <Route path={AppRoute.SignUp} element={<SignUp />} />
  </Routes>
);
