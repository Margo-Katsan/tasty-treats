import { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { useExistingSearchParams } from './useExistingSearchParams';

interface IUseModal {
  searchParams: URLSearchParams;
  showModal: boolean;
  openModal: () => void;
  closeModal: () => void;
  closeRatingModal: () => void;
  handleCloseModal: () => void;
  handleOpenModal: (id: string) => void;
}

export const useModal = (): IUseModal => {
  
  const [searchParams] = useSearchParams();
  const [showModal, setShowModal] = useState<boolean>(false);
  const { updatingSearchParams } = useExistingSearchParams();

  const openModal = () => {
    setShowModal(true);
    document.documentElement.classList.add('ReactModal__Html--open');
  }

  const closeModal = () => {
    setShowModal(false);
    document.documentElement.classList.remove('ReactModal__Html--open');
  }

  const closeRatingModal = () => {
    setShowModal(false);
  }

  const handleCloseModal = () => {
    updatingSearchParams('id', '')
    setShowModal(false);
    document.documentElement.classList.remove('ReactModal__Html--open');
  }

  const handleOpenModal = (id: string) => {
    document.documentElement.classList.add('ReactModal__Html--open');
    if (!searchParams.get('id')) {
      updatingSearchParams('id', id)
    }
    setShowModal(true)
  }
  
  return { showModal, handleOpenModal, handleCloseModal, searchParams, openModal, closeModal, closeRatingModal };
};