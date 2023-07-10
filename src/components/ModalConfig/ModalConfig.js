import React from "react";
import styles from "./ModalConfig.module.css";

//Icons
import { ReactComponent as Pencil } from "../../icons/pencil-outline.svg";
import { ReactComponent as Trash } from "../../icons/trash-outline.svg";

const Modal = ({ isOpen, fruit }) => {
  if (isOpen) {
    return (
      <div className={styles.modal}>
        <div><Pencil/>Editar {fruit}</div>
        <div><Trash/>Excluir {fruit}</div>
      </div>
    );
  }

  return null;
};

export default Modal;
