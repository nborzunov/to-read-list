import React, { FC } from "react";
import { useStore } from "../store/store";
import { observer } from "mobx-react-lite";
import Header from "../components/layout/Header/Header";
import Spinner from "../components/layout/Spinner/Spinner";
import BookItem from "../components/modules/BookItem/BookItem";
import SearchForm from "../components/ui/SearchForm/SearchForm";
import Placeholder from "../components/layout/Placeholder/Placeholder";
import BookListContainer from "../components/layout/ListContainer/BookListContainer";
import { book } from "../types/types";

type propTypes = {
  selectedBook: book | null,
  onBookSelection: (book: book) => void
}

const BooksList: FC<propTypes> = observer(({ selectedBook, onBookSelection }) => {
  const { bookList, isLoading, onSearch, currentUploadPage, setCurrentPage } = useStore();

  return (
    <>
      <Header>
        <SearchForm isLoading={isLoading} onSearch={onSearch} />
      </Header>

      <BookListContainer>
        {bookList.length === 0 && (
          <Placeholder>
            Search list.
          </Placeholder>
        )}
        {bookList && bookList.map((book: book) => (
          <BookItem
            key={book.key}
            book={book}
            selectedBook={selectedBook}
            onBookSelection={onBookSelection}
          />
        ))}
        {isLoading && <Spinner />}
      </BookListContainer>
    </>
  );
});

export default BooksList;


