import React, { FC } from "react";
import styles from "./MobileNav.module.css";

type propTypes = {
  setCurrentPage: (categoryId: number) => void
}
const MobileNav: FC<propTypes> = ({ setCurrentPage }) => {
  return (
    <div className={styles.nav}>
      <button className={styles.navItem} onClick={() => setCurrentPage(1)}>search</button>
      <button className={styles.navItem} onClick={() => setCurrentPage(2)}>read list</button>
    </div>
  );
};

export default MobileNav;
