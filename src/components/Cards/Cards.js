import React from "react";
import styles from "./Cards.module.css";

//Icons
import { ReactComponent as Cash } from "../../icons/cash-outline-green.svg";
import { ReactComponent as RightContent } from "../../icons/RightContent.svg";

const Cards = (props) => {
  return (
    <div className={styles.cardContainer}>
      <p className={styles.name}>{props.name}</p>
      <div>
        <p className={styles.price}>
          <Cash className={styles.icons} /> R${props.price}
        </p>
        <p className={styles.amount}>{props.amount} em estoque</p>
      </div>
      <RightContent className={styles.config}/>
    </div>
  );
};

export default Cards;
