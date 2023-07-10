import React from "react";
import styles from "./ModalConfig.module.css";

//Hooks
import { useNavigate } from "react-router-dom";

//Icons
import { ReactComponent as Pencil } from "../../icons/pencil-outline.svg";
import { ReactComponent as Trash } from "../../icons/trash-outline.svg";

const Modal = ({ isOpen, fruitIndex, fruitName, fruitPrice, fruitAmount }) => {
  const Navigate = useNavigate();

  const navigateToEdit = () => {
    Navigate("/editar", { state: { fruitIndex, fruitName, fruitPrice, fruitAmount } });
  };

  if (isOpen) {
    return (
      <div className={styles.modal}>
        <div onClick={navigateToEdit}>
          <Pencil />
          Editar {fruitName}
        </div>
        <div>
          <Trash />
          Excluir {fruitName}
        </div>
      </div>
    );
  }

  return null;
};

export default Modal;
