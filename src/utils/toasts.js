import { toast } from 'react-toastify';

const errorToast = (message) => {
  toast.error(message);
};

const successToast = (message) => {
  toast.success(message);
};

const warnToast = (message) => {
  toast.warn(message);
};

const toasts = { errorToast, successToast, warnToast };

export default toasts;
