import React, { FC } from "react";
import loader from "../../../assets/images/Spinner.gif";
import styles from "./Spinner.module.css";

const Spinner: FC = () => {

  return (
    <div className={styles.spinnerContainer}>
      <img src={loader} className="spinner" />
    </div>
  );
};

export default Spinner;