import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
// @ts-expect-error TS(6142): Module './sharedHeader/SharedLayout/SharedLayout' ... Remove this comment to see the full error message
import { SharedLayout } from "./sharedHeader/SharedLayout/SharedLayout";

// @ts-expect-error TS(2307): Cannot find module 'pages/Home' or its correspondi... Remove this comment to see the full error message
const Home = lazy(() => import('pages/Home'));
// @ts-expect-error TS(2307): Cannot find module 'pages/Favorites' or its corres... Remove this comment to see the full error message
const Favorites = lazy(() => import('pages/Favorites'))

export const App = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Routes>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Route path="/" element={<SharedLayout />}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Route index element={<Home />}></Route>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Route path="favorites" element={<Favorites />}></Route>
        </Route>
      </Routes>
    </div>
  );
};