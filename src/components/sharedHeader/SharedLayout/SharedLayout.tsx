import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
// @ts-expect-error TS(2307): Cannot find module 'components/sharedHeader/Header... Remove this comment to see the full error message
import { Header } from "components/sharedHeader/Header/Header"
// @ts-expect-error TS(2307): Cannot find module 'components/Loader/Loader' or i... Remove this comment to see the full error message
import { Loader } from "components/Loader/Loader";
// @ts-expect-error TS(2307): Cannot find module './SharedLayout.module.css' or ... Remove this comment to see the full error message
import css from "./SharedLayout.module.css"

export const SharedLayout = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Header/>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <main className={css.main}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Suspense fallback={<Loader />}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Outlet />
        </Suspense>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ToastContainer />
      </main>
    </>
  );
};