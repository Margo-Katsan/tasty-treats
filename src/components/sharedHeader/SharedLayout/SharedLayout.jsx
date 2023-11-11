import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "components/sharedHeader/Header/Header"
import css from "./SharedLayout.module.css"

export const SharedLayout = () => {
  return (
    <>
      <Header/>
      <main className={css.main}>
        <Suspense fallback={"Loading..."}>
        <Outlet />
        </Suspense>
      </main>
    </>
  );
};