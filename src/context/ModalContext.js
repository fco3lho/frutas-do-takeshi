import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [changeModal, setChangeModal] = useState(false);

  const handleModal = () => {
    setChangeModal(!changeModal);
  };

  return (
    <ModalContext.Provider value={{ changeModal, handleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
