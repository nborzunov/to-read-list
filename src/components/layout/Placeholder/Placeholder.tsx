import React, { FC } from "react";
import styles from "./Placeholder.module.css";

const Placeholder: FC = ({ children }) => {
  return (
    <div className={styles.placeholder}>
      {children}
    </div>
  );
};

export default Placeholder;
