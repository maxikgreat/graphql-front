import style from './ToastProvider.module.css';
import { ToastContainer } from 'react-toastify';

export const ToastProvider = () => (
  <ToastContainer hideProgressBar className={style.toast} />
);
