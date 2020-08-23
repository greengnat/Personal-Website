import React from "react";

import styles from "./NavBar.module.css";

import Logo from "../Logo/Logo";

function NavBar(props) {
  return (
    <header
      style={{ backgroundColor: `${props.color}` }}
      className={styles.header}
    >
      <Logo />
      <nav>{props.children}</nav>
    </header>
  );
}

export default NavBar;
