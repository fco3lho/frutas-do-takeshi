import React from "react";
import styles from "./Cards.module.css";

const Cards = (props) => {
  return <div className={styles.cardContainer}>
    <p>{props.name}</p>
    <p>R${props.price}</p>
    <p>{props.amount} em estoque</p>
  </div>;
};

export default Cards;
