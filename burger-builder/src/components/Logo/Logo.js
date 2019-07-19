import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import styles from "./Logo.module.css";

const logo = props => (
  <div>
    <img
      src={burgerLogo}
      style={{ width: props.width }}
      alt="MyBurger"
      className={styles.Logo}
    />
  </div>
);

export default logo;
