import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

export const useModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const toogleModal = () => setShowModal(showModal => !showModal);

  const handleCloseModal = () => {
    setSearchParams({});
    setShowModal(false);
  }
  const handleOpenModal = id => {
    const nextParams = id !== "" ? { id } : {};

    setSearchParams(nextParams);
    setShowModal(true)
  }
  

  return { showModal, handleOpenModal, handleCloseModal, searchParams, openModal, closeModal, toogleModal };
};