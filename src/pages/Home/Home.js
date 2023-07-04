import React from "react";
import styles from "./Home.module.css";
import { IoAddOutline } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/cadastrar");
  };

  return (
    <div className={styles.home}>
      <div className={styles.p}>
        <p>Cadastre sua primeir fruta</p>
      </div>
      <div>
        <button className={styles.button} onClick={handleClick}>
          <IoAddOutline className={styles.icons} /> <span>Cadastrar fruta</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
