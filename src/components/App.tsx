import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./sharedHeader/SharedLayout/SharedLayout";
import { useModal } from "hooks/useModal";
import { Modal } from "./modals/Modal/Modal";
import { RecipesDetails } from "./modals/RecipeDetails/RecipeDetails";

const Home = lazy(() => import('pages/Home'));
const Favorites = lazy(() => import('pages/Favorites'))



export const App = () => {
  const { showModal, handleOpenModal, handleCloseModal, searchParams } = useModal();

  useEffect(() => {
    if (searchParams.get('id')) {
      handleOpenModal(searchParams.get('id') as string);
    }
    // eslint-disable-next-line
  }, [])
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="favorites" element={<Favorites />}></Route>
        </Route>
      </Routes>
      {showModal && (
        <Modal onClose={handleCloseModal}>
        <RecipesDetails />
      </Modal>
      )}
    </div>
  );
};