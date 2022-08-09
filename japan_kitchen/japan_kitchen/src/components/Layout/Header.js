import React from "react";
import styles from "./Header.module.css";
import sushiImage from "../../assets/sushi.jpg";
import HeaderCartButton from "../UI/HeaderCartButton";

export default function Header(props) {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Япона кухня</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImage} alt="суши" />
      </div>
    </React.Fragment>
  );
}
