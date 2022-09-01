import style from './ToastProvider.module.css';
import { toast } from 'react-toastify';

export const toastError = (text: string) =>
  toast.error(text, {
    className: style['error-toast'],
  });
