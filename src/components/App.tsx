import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./sharedHeader/SharedLayout/SharedLayout";

const Home = lazy(() => import('pages/Home'));
const Favorites = lazy(() => import('pages/Favorites'))

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="favorites" element={<Favorites />}></Route>
        </Route>
      </Routes>
    </div>
  );
};