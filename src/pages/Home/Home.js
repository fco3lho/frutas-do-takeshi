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
import ModalDelete from "../../components/ModalDelete/ModalDelete";
import ModalConfig from "../../components/ModalConfig/ModalConfig";

//Context
import { useContext } from "react";
import { ModalConfigContext } from "../../context/ModalConfigContext";
import { ModalDeleteContext } from "../../context/ModalDeleteContext";

const Home = () => {
  const [fruits, setFruits] = useState([]);
  const [query, setQuery] = useState("");

  const {
    booleanModalConfig,
    setFalse,
    editIndex,
    editName,
    editPrice,
    editAmount,
  } = useContext(ModalConfigContext);
  const { booleanModalDelete, fruitIndex } = useContext(ModalDeleteContext);

  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/cadastrar");
  };

  useEffect(() => {
    if (localStorage.hasOwnProperty("fruits")) {
      setFruits(JSON.parse(localStorage.getItem("fruits")));
    }
  }, [booleanModalDelete]);

  return (
    <div
      className={styles.home}
      onClick={() => {
        if (booleanModalConfig) setFalse();
      }}
    >
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
          <div
            className={
              booleanModalDelete || booleanModalConfig ? styles.mask : null
            }
          ></div>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <Search className={styles.icons} />
            <input
              type="text"
              placeholder="Pesquisar fruta"
              onChange={(e) => {
                setQuery(e.target.value);
                setFalse();
              }}
            />
          </form>
          <div className={styles.cards}>
            {fruits.map(
              (value, index) =>
                (query.length === 0 ||
                  value.name.toLowerCase().indexOf(query.toLowerCase()) !==
                    -1) && (
                  <Cards
                    key={index}
                    listCard={fruits}
                    setListCard={setFruits}
                    index={index}
                    name={value.name}
                    price={value.price}
                    amount={value.amount}
                  />
                )
            )}
          </div>
          <button className={styles.add}>
            <IoAddOutline className={styles.iconAdd} onClick={handleClick} />
          </button>
        </>
      )}
      {booleanModalDelete && (
        <ModalDelete isOpen={booleanModalDelete} fruitIndex={fruitIndex} />
      )}
      {booleanModalConfig && (
        <ModalConfig
          isOpen={booleanModalConfig}
          fruitIndex={editIndex}
          fruitName={editName}
          fruitPrice={editPrice}
          fruitAmount={editAmount}
        />
      )}
    </div>
  );
};

export default Home;
