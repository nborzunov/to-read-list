import React, { FC, useCallback } from "react";
import { book } from "../../../types/types";
import styles from "./BookItem.module.css";

type propTypes = {
  book: book,
  selectedBook: book | null,
  onBookSelection: (book: book) => void
}

const BookItem: FC<propTypes> = ({ book, selectedBook, onBookSelection }) => {
  const handleClick = useCallback(() => onBookSelection(book), [book]);
  const isBookSelected = selectedBook?.key === book.key;

  return (
    <div
      onClick={handleClick}

      className={`${styles.bookItem} ${isBookSelected && styles.bookItemSelected}`}
    >
      <div className={styles.bookItemTitle}>{book.title}</div>

      <small>{book.subtitle}</small>

      {book.author_name &&
      <div>Author: {book.author_name?.join(", ")}</div>}

    </div>
  );
};

export default BookItem;
