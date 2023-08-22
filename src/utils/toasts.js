import { toast } from 'react-toastify';

export const errorToast = (message) => {
  toast.error(message);
};

export const successToast = (message) => {
  toast.success(message);
};

export const warnToast = (message) => {
  toast.warn(message);
};
