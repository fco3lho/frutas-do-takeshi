import { createContext, useState } from "react";

export const ModalConfigContext = createContext();

export const ModalConfigProvider = ({ children }) => {
  const [booleanModalConfig, setBooleanModalConfig] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState(0);
  const [editAmount, setEditAmount] = useState(0);

  const toggleModalConfig = (index, name, price, amount) => {
    setEditIndex(index);
    setEditName(name);
    setEditPrice(price);
    setEditAmount(amount);
    setBooleanModalConfig(!booleanModalConfig);
  };

  const setFalse = () => {
    setBooleanModalConfig(false);
  };

  return (
    <ModalConfigContext.Provider
      value={{
        booleanModalConfig,
        editIndex,
        editName,
        editPrice,
        editAmount,
        toggleModalConfig,
        setFalse,
      }}
    >
      {children}
    </ModalConfigContext.Provider>
  );
};
