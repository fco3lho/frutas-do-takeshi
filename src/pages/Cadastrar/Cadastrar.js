import React from "react";
import styles from "./Cadastrar.module.css";

//Hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//Icons
import { IoClose } from "react-icons/io5";
import { ReactComponent as Nutrition } from "../../icons/nutrition-outline.svg";
import { ReactComponent as Cash } from "../../icons/cash-outline.svg";
import { ReactComponent as Server } from "../../icons/server-outline.svg";

const Cadastrar = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);

  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let fruits = []

    if(localStorage.hasOwnProperty("fruits")){
      fruits = JSON.parse(localStorage.getItem("fruits"))
    }

    fruits.push({name, price, amount})

    localStorage.setItem("fruits", JSON.stringify(fruits))

    Navigate("/cadastroRealizado", {state: {name}});
  };

  return (
    <div className={styles.cadastrar}>
      <div className={styles.title}>
        <p>Cadastrar fruta</p>
        <IoClose className={styles.icons} onClick={() => Navigate("/")} />
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          <Nutrition />
          <input
            type="text"
            name="name"
            placeholder="Nome da fruta"
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
            required
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button className={styles.button}>Cadastrar fruta</button>
      </form>
    </div>
  );
};

export default Cadastrar;
