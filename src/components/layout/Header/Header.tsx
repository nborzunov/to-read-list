import React, { FC } from "react";
import styles from "./Header.module.css";

const Header: FC = ({ children }) => {
  return (
    <div className={styles.header}>
      {children}
    </div>
  );
};

export default Header;
