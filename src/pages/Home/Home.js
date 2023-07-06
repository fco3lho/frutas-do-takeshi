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
  const [fruits, setFruits] = useState([]);

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
        <>
          <form className={styles.form}>
            <Search className={styles.icons} />
            <input type="text" placeholder="Pesquisar fruta" />
          </form>
          <div className={styles.cards}>
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
          <button className={styles.add}>
            <IoAddOutline className={styles.iconAdd} onClick={handleClick}/>
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
