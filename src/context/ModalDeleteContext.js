import { createContext, useState } from "react";

export const ModalDeleteContext = createContext();

export const ModalDeleteProvider = ({ children }) => {
  const [booleanModalDelete, setBooleanModalDelete] = useState(false);
  const [fruitIndex, setFruitIndex] = useState(-1);

  function toggleModalDelete(index) {
    setFruitIndex(index);
    setBooleanModalDelete(!booleanModalDelete);
  }

  return (
    <ModalDeleteContext.Provider
      value={{ booleanModalDelete, fruitIndex, toggleModalDelete }}
    >
      {children}
    </ModalDeleteContext.Provider>
  );
};
