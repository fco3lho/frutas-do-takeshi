import React from "react";
import styles from "./Cards.module.css";

//Hooks
import { useState } from "react";

//Icons
import { ReactComponent as Cash } from "../../icons/cash-outline-green.svg";
import { ReactComponent as RightContent } from "../../icons/RightContent.svg";

//Components
import ModalConfig from "../ModalConfig/ModalConfig.js";

//Context
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

const Cards = (props) => {
  const [index, setIndex] = useState(0);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState(0);
  const [editAmount, setEditAmount] = useState(0);
  const [boolean, setBoolean] = useState(false);

  const { changeModal, toggleModal } = useContext(ModalContext);

  const toggleBoolean = () => {
    setBoolean(!boolean);
  };

  const handleClick = () => {
    setIndex(props.index);
    setEditName(props.name);
    setEditPrice(props.price);
    setEditAmount(props.amount);
    toggleModal();
    toggleBoolean();
  };

  return (
    <>
      <div className={styles.cardContainer}>
        <p className={styles.name}>{props.name}</p>
        <div>
          <p className={styles.price}>
            <Cash className={styles.icons} /> R${props.price}
          </p>
          <p className={styles.amount}>{props.amount} em estoque</p>
        </div>
        <RightContent className={styles.config} onClick={handleClick} />
      </div>
      {boolean && changeModal && (
        <ModalConfig
          isOpen={changeModal}
          fruitIndex={index}
          fruitName={editName}
          fruitPrice={editPrice}
          fruitAmount={editAmount}
        />
      )}
    </>
  );
};

export default Cards;
