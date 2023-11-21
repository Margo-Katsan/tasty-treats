import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header } from "components/sharedHeader/Header/Header";
import { Loader } from "components/Loader/Loader";
import { Modal } from "components/modals/Modal/Modal";
import { RecipesDetails } from "components/modals/RecipeDetails/RecipeDetails";
import { useModal } from "hooks/useModal";
import css from "./SharedLayout.module.css"

export const SharedLayout = () => {

  const { showModal, handleOpenModal, handleCloseModal, searchParams } = useModal();

  useEffect(() => {
    if (searchParams.get('id')) {
      handleOpenModal(searchParams.get('id') as string);
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Header/>
      <main className={css.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer />
        {showModal && (
          <Modal onClose={handleCloseModal}>
            <RecipesDetails />
          </Modal>
        )}
      </main>
    </>
  );
};