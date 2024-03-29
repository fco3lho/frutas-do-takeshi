import React from "react";
import styles from "./Cards.module.css";

//Icons
import { ReactComponent as Cash } from "../../icons/cash-outline-green.svg";
import { ReactComponent as RightContent } from "../../icons/RightContent.svg";

//Context
import { useContext } from "react";
import { ModalConfigContext } from "../../context/ModalConfigContext";

const Cards = (props) => {
  const { toggleModalConfig } = useContext(ModalConfigContext);

  const price = parseFloat(props.price).toFixed(2);

  return (
    <>
      <div className={styles.cardContainer}>
        <p className={styles.name}>{props.name}</p>
        <div>
          <p className={styles.price}>
            <Cash className={styles.icons} /> R${price}
          </p>
          <p className={styles.amount}>{props.amount} em estoque</p>
        </div>
        <RightContent
          className={styles.config}
          onClick={() =>
            toggleModalConfig(
              props.index,
              props.name,
              props.price,
              props.amount
            )
          }
        />
      </div>
    </>
  );
};

export default Cards;
