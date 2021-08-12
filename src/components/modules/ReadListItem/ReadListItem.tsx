import React, { FC } from "react";
import { book } from "../../../types/types";
import styles from "./ReadListItem.module.css";


type propTypes = {
  book: book
  onMark: (key: string) => void,
  onDelete: (key: string) => void
}
const ReadListItem: FC<propTypes> = ({ book, onMark, onDelete }) => {
  return (
    <div className={`item ${styles.readListItem} ${book.read ? styles.markedAsRead : ""}`}>
      <div>
        {book.title} {book.language && <span>(
        {
          book.language.length <= 5 ?
            book.language.join(", ")
            :
            book.language.slice(0, 5).join(", ")
            + ", etc.."
        }
        )</span>}
      </div>

      {book.subtitle && (
        <small>{book.subtitle}</small>
      )}

      {book.author_name && (
        <div>Author{book.author_name.length > 1 ? "s" : ""}: {
          book.author_name.length <= 5 ?
            book.author_name.join(", ")
            :
            book.author_name.slice(0, 5).join(", ")
            + " and " + (book.author_name.length - 5) + " more author(s)"
        }
        </div>
      )}


      <div className={styles.readListButtons}>
        <button
          className={styles.readListButton}
          onClick={(e) => onMark(book.key)}
        >
          Mark as {book.read ? "unread" : "read"}
        </button>
        <button
          className={styles.readListButton}
          onClick={(e) => onDelete(book.key)}
        >
          Remove from list
        </button>
      </div>

    </div>
  );
};
export default ReadListItem;