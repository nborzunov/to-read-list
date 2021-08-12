import React, { FC } from "react";
import styles from "./ListContainer.module.css";
import { useStore } from "../../../store/store";

const BookListContainer: FC = ({ children }) => {

  const container: any = React.useRef();
  const store = useStore();

  const { setCurrentPage, isLoading, currentUploadPage } = store;

  const handleScroll = (event: any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight * 3 && !isLoading) {
      setCurrentPage(currentUploadPage + 1);
    }
  };

  if (currentUploadPage === 1 && container.current) {
    container.current.scrollIntoView();
  }

  return (
    <div className={`${styles.listContainer} ${styles.bookListContainer}`} onScroll={handleScroll} ref={container}>
      {children}
    </div>
  );
};

export default BookListContainer;
