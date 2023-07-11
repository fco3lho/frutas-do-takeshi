import { createContext, useState } from "react";

export const ModalConfigContext = createContext();

export const ModalConfigProvider = ({ children }) => {
  const [booleanModalConfig, setBooleanModalConfig] = useState(false);

  

  const toggleModalConfig = () => {
    setBooleanModalConfig(!booleanModalConfig);
  };

  const setFalse = () => {
    setBooleanModalConfig(false);
  };

  return (
    <ModalConfigContext.Provider value={{ booleanModalConfig, toggleModalConfig, setFalse }}>
      {children}
    </ModalConfigContext.Provider>
  );
};
