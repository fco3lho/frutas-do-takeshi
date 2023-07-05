import React from "react";
import styles from "./Home.module.css";

//Hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Icons
import { IoAddOutline } from "react-icons/io5";

const Home = () => {
  const [fruits, setFruits] = useState(new Array());

  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/cadastrar");
  };

  useEffect(() => {
    if (localStorage.hasOwnProperty("fruits")) {
      setFruits(JSON.parse(localStorage.getItem("fruits")));
    }
  }, []);

  return (
    <div className={styles.home}>
      {fruits.length === 0 ? (
        <>
          <div className={styles.p}>
            <p>Cadastre sua primeira fruta</p>
          </div>
          <div>
            <button className={styles.button} onClick={handleClick}>
              <IoAddOutline className={styles.icons} />
              <span>Cadastrar fruta</span>
            </button>
          </div>
        </>
      ) : (
        fruits.map((value, index) => {
          return (
            <div key={index}>
              <p>{index}</p>
              <p>{value.name}</p>
              <p>{value.price}</p>
              <p>{value.amount}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Home;
