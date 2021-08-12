import React, { FC } from "react";
import styles from "./Grid.module.css";

const Grid: FC = ({ children }) =>
  <div className={styles.gridContainer}>
    {children}
  </div>;

export default Grid;