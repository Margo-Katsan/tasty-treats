import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import { Header } from "components/sharedHeader/Header/Header"
import { Loader } from "components/Loader/Loader";
import css from "./SharedLayout.module.css"

export const SharedLayout = () => {
  return (
    <>
      <Header/>
      <main className={css.main}>
        <Suspense fallback={<Loader />}>
        <Outlet />
        </Suspense>
        <ToastContainer />
      </main>
    </>
  );
};