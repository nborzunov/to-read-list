import React, { FC } from "react";
import styles from "./ListContainer.module.css";

const ReadListContainer: FC = ({ children }) => {

  return (
    <div className={styles.listContainer}>
      {children}
    </div>
  );
};

export default ReadListContainer;
