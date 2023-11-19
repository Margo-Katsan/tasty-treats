 import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
export const useNotify = () => {
  const notifySuccess = (message: string) => toast.success(message, {
position: "top-center",
autoClose: 2000,
hideProgressBar: true,
closeOnClick: true,
  });
  const notifyError = (message: string) => toast.error(message, {
position: "top-center",
autoClose: 2000,
hideProgressBar: true,
closeOnClick: true,
  });
  return { notifySuccess, notifyError }

}