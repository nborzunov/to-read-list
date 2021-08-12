import React, { FC, useCallback } from "react";
import { book } from "../../../types/types";
import styles from "./SelectedBook.module.css";

type propTypes = {
  selectedBook: book,
  isRead: boolean,
  onAddBook: (selectedBook: book) => void
}
const SelectedBook: FC<propTypes> = ({ selectedBook, isRead, onAddBook }) => {
  const handleClick = useCallback(() => {
    onAddBook(selectedBook);
  }, [selectedBook]);

  return (
    <div className={styles.selectedBook}>
      <h1 className={styles.selectedBookTitle}>
        {selectedBook.title}
      </h1>
      {selectedBook.subtitle && (
        <h3 className={styles.selectedBookSubtitle}>
          {selectedBook.subtitle}
        </h3>
      )}

      {selectedBook.language && (
        <div>
          Languages available: {
          selectedBook.language.length <= 5 ?
            selectedBook.language.join(", ")
            :
            selectedBook.language.slice(0, 5).join(", ")
            + " and " + (selectedBook.language.length - 5) + " more language(s)"
        }
        </div>
      )}

      <div>
        Full text available: {selectedBook.has_full_text ? "yes" : "no"}
      </div>

      {selectedBook.first_publish_year && (
        <div>
          First publish year: {selectedBook.first_publish_year}
        </div>)}

      {selectedBook.publish_date && (
        <div>
          Year published: {
          selectedBook.publish_date.length <= 5 ?
            selectedBook.publish_date.join(", ")
            :
            selectedBook.publish_date.slice(0, 5).join("; ")
            + " and " + (selectedBook.publish_date.length - 5) + " more date(s)"
        }
        </div>)}

      <button
        onClick={handleClick}
        className={styles.selectedBookButton}
        disabled={isRead}
        title={`${isRead ? "The book is already saved" : "Save the book"}`}
      >
        Add book to Read List
      </button>
    </div>
  );
};
export default SelectedBook;