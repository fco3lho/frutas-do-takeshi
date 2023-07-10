import React from "react";
import styles from "./ModalDelete.module.css";

//Context
import { useContext } from "react";
import { ModalDeleteContext } from "../../context/ModalDeleteContext";

const ModalDelete = ({ isOpen, fruitIndex }) => {
  const { toggleModalDelete } = useContext(ModalDeleteContext);

  const index = fruitIndex;

  const handleDelete = () => {
    let fruits = [];

    if (localStorage.hasOwnProperty("fruits")) {
      fruits = JSON.parse(localStorage.getItem("fruits"));
    }

    fruits.splice(index, 1);

    localStorage.setItem("fruits", JSON.stringify(fruits));

    toggleModalDelete();
  };

  const handleCancel = () => {
    toggleModalDelete();
  };

  if (isOpen) {
    return (
      <div className={styles.containerModal}>
        <p className={styles.title}>Excluir Fruta</p>
        <p className={styles.text}>
          Tem certeza que quer excluir essa fruta? Você perderá todas as
          informações cadastradas sobre ela.
        </p>
        <button className={styles.buttonCancel} onClick={handleCancel}>
          Não
        </button>
        <button className={styles.buttonConfirm} onClick={handleDelete}>
          Sim, excluir
        </button>
      </div>
    );
  }

  return null;
};

export default ModalDelete;
