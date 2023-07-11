import React from "react";
import styles from "./Editar.module.css";

//Hooks
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

//Icons
import { IoClose } from "react-icons/io5";
import { ReactComponent as Nutrition } from "../../icons/nutrition-outline.svg";
import { ReactComponent as Cash } from "../../icons/cash-outline.svg";
import { ReactComponent as Server } from "../../icons/server-outline.svg";

const Editar = () => {
  const { state } = useLocation();

  const index = state.fruitIndex;
  const [name, setName] = useState(state.fruitName);
  const [price, setPrice] = useState(state.fruitPrice);
  const [amount, setAmount] = useState(state.fruitAmount);

  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let fruits = [];

    if (localStorage.hasOwnProperty("fruits")) {
      fruits = JSON.parse(localStorage.getItem("fruits"));
    }

    fruits[index] = { name, price, amount };

    localStorage.setItem("fruits", JSON.stringify(fruits));

    Navigate("/edicaoRealizada", { state: { name } });
  };

  return (
    <div className={styles.editar}>
      <div className={styles.title}>
        <p>Editar fruta</p>
        <IoClose className={styles.icons} onClick={() => Navigate("/")} />
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          <Nutrition />
          <input
            type="text"
            name="name"
            placeholder="Nome da fruta"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          <Cash />
          <input
            type="number"
            step="0.01"
            name="price"
            placeholder="Preço do Kilo"
            value={price}
            required
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          <Server />
          <input
            type="number"
            name="amount"
            placeholder="Quantidade no estoque"
            value={amount}
            required
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button className={styles.button}>Editar fruta</button>
      </form>
    </div>
  );
};

export default Editar;
