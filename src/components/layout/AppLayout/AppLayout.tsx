import React, { FC } from "react";
import styles from "./AppLayout.module.css";

export const AppLayout: FC = ({ children }) => (
  <div className={styles.appContainer}>{children}</div>
);
