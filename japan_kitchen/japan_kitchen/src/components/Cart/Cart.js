import styles from "./Cart.module.css";
import ReactDOM from "react-dom";
import React, { useState, useContext } from "react";
import CartList from "./CartList";
import CartContext from "../../context/cart-context";

export default function Cart(props) {
  const ctx = useContext(CartContext);

  if (!props.show) {
    return null;
  }

  const makeOrder = (event) => {
    console.log("make order");
  };

  return ReactDOM.createPortal(
    <React.Fragment>
      <div className={styles.modal} onClick={props.onClose}>
        <div
          className={styles["modal-content"]}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles["modal-body"]}>
            <CartList />
          </div>
          <div>
            <h1>Итого {ctx.costAll}</h1>
          </div>
          <div className={styles["modal-footer"]}>
            <button onClick={props.onClose} className={styles["button"]}>
              Закрыть
            </button>
            <button onClick={makeOrder} className={styles["button"]}>
              Заказать
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>,
    document.getElementById("root")
  );
}
