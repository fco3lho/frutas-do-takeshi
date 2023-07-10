import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [changeModal, setChangeModal] = useState(false);

  const toggleModal = () => {
    setChangeModal(!changeModal);
  };

  const setFalse = () => {
    setChangeModal(false);
  };

  return (
    <ModalContext.Provider value={{ changeModal, toggleModal, setFalse }}>
      {children}
    </ModalContext.Provider>
  );
};
