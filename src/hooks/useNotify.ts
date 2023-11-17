 import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
export const useNotify = () => {
  const notifySuccess = (message: any) => toast.success(message, {
position: "top-center",
autoClose: 2000,
hideProgressBar: true,
closeOnClick: true,
});
  return { notifySuccess }

}