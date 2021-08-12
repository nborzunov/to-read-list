import React, { FC, useCallback } from "react";

import { ReadListService } from "../services/ReadListService";
import Placeholder from "../components/layout/Placeholder/Placeholder";
import ReadListItem from "../components/modules/ReadListItem/ReadListItem";
import ReadListContainer from "../components/layout/ListContainer/ReadListContainer";
import { bookList } from "../types/types";

type propTypes = {
  readList: bookList,
  setReadList: (bookList: bookList) => void
}

const ReadList: FC<propTypes> = ({ readList, setReadList }) => {
  readList = readList.sort((x: any, y: any) => {
    if (x.read && !y.read) return 1;
    if (!x.read && y.read) return -1;
    return 0;
  });

  const handleMark = useCallback(
    (key: string) => {
      const newReadList = ReadListService.markBook(key);
      setReadList(newReadList);
    },
    []
  );

  const handleDelete = useCallback(
    (key: string) => {
      const newReadList = ReadListService.deleteBook(key);
      setReadList(newReadList);
    },
    []
  );


  return (
    <ReadListContainer>
      {readList.length === 0 && (
        <Placeholder>
          There will be list of your saved books.
        </Placeholder>
      )}
      {readList.map((book) => (

        <ReadListItem
          key={book.key}
          book={book}
          onMark={handleMark}
          onDelete={handleDelete} />

      ))}


    </ReadListContainer>
  );
};


export default ReadList;
