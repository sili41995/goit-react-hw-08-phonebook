import { toast } from 'react-toastify';

export const errorNotify = (message) => {
  toast.error(message);
};
