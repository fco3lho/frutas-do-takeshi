import React from "react";
import styles from "./EditarRealizado.module.css";

//Hooks
import { useLocation, useNavigate } from "react-router-dom";

//Icons
import { IoClose } from "react-icons/io5";
import { ReactComponent as RegistrationDone } from "../../icons/registration-done.svg";

const EditarRealizado = () => {
  const { state } = useLocation();
  const Navigate = useNavigate();

  const handleNavigateHome = () => {
    Navigate("/");
  };

  return (
    <div className={styles.cadastroRealizado}>
      <div>
        <IoClose className={styles.icons} onClick={handleNavigateHome} />
      </div>
      <div>
        <RegistrationDone className={styles.registrationIcon} />
      </div>
      <div className={styles.title}>Fruta editada</div>
      <div className={styles.text}>
        Você editou a fruta {state.name} com sucesso!
      </div>
      <button className={styles.button} onClick={handleNavigateHome}>
        Voltar ao início
      </button>
    </div>
  );
};

export default EditarRealizado;
