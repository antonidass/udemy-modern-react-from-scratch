import React, { useContext, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import cartImage from "../../assets/cart.png";
import Cart from "../Cart/Cart";
import CartContext from "../../context/cart-context";

export default function HeaderCartButton(props) {
  const [modal, setModal] = useState(false);
  const ctx = useContext(CartContext);

  return (
    <React.Fragment>
      <button className={styles.button} onClick={() => setModal(!modal)}>
        <img className={styles.icon} src={cartImage} alt="cart" />
        <span>Корзина</span>
        <span className={styles.badge}>{ctx.countAll}</span>
      </button>
      <Cart onClose={() => setModal(false)} show={modal} />
    </React.Fragment>
  );
}
