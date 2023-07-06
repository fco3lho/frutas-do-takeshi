import React from "react";
import styles from "./Home.module.css";

//Hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Icons
import { IoAddOutline } from "react-icons/io5";
import { ReactComponent as Search } from "../../icons/search.svg";

//Components
import Cards from "../../components/Cards/Cards";

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
        <div>
          <label className={styles.label}>
            <Search className={styles.icons}/>
            <input type="text" placeholder="Pesquisar fruta" />
          </label>
          {fruits.map((value, index) => {
            return (
              <Cards
                key={index}
                listCard={fruits}
                setListCard={setFruits}
                name={value.name}
                price={value.price}
                amount={value.amount}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
