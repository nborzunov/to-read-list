import React, { FC } from "react";
import styles from "./Column.module.css";

const Column: FC = ({ children }) => (
  <div className={styles.column}>{children}</div>
);

export default Column;