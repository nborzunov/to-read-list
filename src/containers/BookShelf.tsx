import React, { FC, useCallback, useState } from "react";
import ReadList from "./ReadList";
import BooksList from "./BooksList";
import Grid from "../components/Layout/Grid/Grid";
import Column from "../components/layout/Column/Column";
import MobileNav from "../components/ui/MobileNav/MobileNav";
import { ReadListService } from "../services/ReadListService";
import Placeholder from "../components/layout/Placeholder/Placeholder";
import SelectedBook from "../components/modules/SelectedBook/SelectedBook";
import ReadListHeader from "../components/layout/ReadListHeader/ReadListHeader";
import useMediaQuery from "../hooks/useMediaQuery";
import { book } from "../types/types";

const BookShelf: FC = () => {
  const [selectedBook, setSelectedBook] = useState<book | null>(null);
  const [readList, setReadList] = useState(ReadListService.readList);

  const handleBookSelection = useCallback((book: book) => {
    setSelectedBook(book);
  }, []);

  const handleAddBook = useCallback((book: book) => {
    book.read = false;
    const newReadList = ReadListService.addBook(book);
    setReadList(newReadList);
  }, []);

  const isMobile = useMediaQuery("(max-width: 768px)");
  const [currentPage, setCurrentPage] = useState(1);

  if (isMobile) {
    return (
      <>
        {currentPage === 1 && (
          <Column>
            <BooksList
              selectedBook={selectedBook}
              onBookSelection={handleBookSelection}
            />
            {!selectedBook && (
              <Placeholder>
                Pick any book to preview details.
              </Placeholder>
            )}
            {selectedBook && (
              <SelectedBook
                selectedBook={selectedBook}
                isRead={Boolean(readList.find(book => book.key === selectedBook.key))}
                onAddBook={handleAddBook}
              />
            )}
          </Column>
        )}

        {currentPage === 2 && (
          <Column>
            <ReadListHeader
              booksCount={readList.length}
              readCount={readList.filter(book => book.read).length}
            />
            <ReadList
              readList={readList}
              setReadList={setReadList}
            />
          </Column>
        )}

        <MobileNav setCurrentPage={setCurrentPage} />
      </>
    );
  } else {
    return (
      <Grid>
        <Column>
          <BooksList
            selectedBook={selectedBook}
            onBookSelection={handleBookSelection}
          />
        </Column>
        <Column>
          {!selectedBook && (
            <Placeholder>
              Pick any book to preview details.
            </Placeholder>
          )}
          {selectedBook && (
            <SelectedBook
              selectedBook={selectedBook}
              isRead={Boolean(readList.find(book => book.key === selectedBook.key))}
              onAddBook={handleAddBook}
            />
          )}
        </Column>
        <Column>
          <ReadListHeader
            booksCount={readList.length}
            readCount={readList.filter(book => book.read).length}
          />
          <ReadList
            readList={readList}
            setReadList={setReadList}
          />
        </Column>
      </Grid>
    );
  }

};

export default BookShelf;
