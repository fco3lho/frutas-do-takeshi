import React from "react";
import styles from "./ModalConfig.module.css";

//Icons
import { ReactComponent as Pencil } from "../../icons/pencil-outline.svg";
import { ReactComponent as Trash } from "../../icons/trash-outline.svg";

const Modal = ({ isOpen, fruitName, fruitPrice, fruitAmount }) => {
  if (isOpen) {
    return (
      <div className={styles.modal}>
        <div><Pencil/>Editar {fruitName}</div>
        <div><Trash/>Excluir {fruitName}</div>
      </div>
    );
  }

  return null;
};

export default Modal;
