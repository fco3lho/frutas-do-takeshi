import React from "react";
import styles from "./ModalConfig.module.css";

//Hooks
import { useNavigate } from "react-router-dom";

//Context
import { useContext } from "react";
import { ModalConfigContext } from "../../context/ModalConfigContext";
import { ModalDeleteContext } from "../../context/ModalDeleteContext";

//Icons
import { ReactComponent as Pencil } from "../../icons/pencil-outline.svg";
import { ReactComponent as Trash } from "../../icons/trash-outline.svg";

const Modal = ({ isOpen, fruitIndex, fruitName, fruitPrice, fruitAmount }) => {
  const Navigate = useNavigate();

  const { setFalse } = useContext(ModalConfigContext);
  const { toggleModalDelete } = useContext(ModalDeleteContext);

  const navigateToEdit = () => {
    setFalse();
    Navigate("/editar", {
      state: { fruitIndex, fruitName, fruitPrice, fruitAmount },
    });
  };

  if (isOpen) {
    return (
      <div className={styles.modal}>
        <div onClick={navigateToEdit}>
          <Pencil />
          Editar {fruitName}
        </div>
        <div onClick={() => toggleModalDelete(fruitIndex)}>
          <Trash />
          Excluir {fruitName}
        </div>
      </div>
    );
  }

  return null;
};

export default Modal;
