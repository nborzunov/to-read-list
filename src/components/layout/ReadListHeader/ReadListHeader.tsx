import React, { FC } from "react";
import Header from "../Header/Header";

type propTypes = {
  booksCount: number,
  readCount: number
}
const ReadListHeader: FC<propTypes> = ({ booksCount, readCount }) => {
  return (
    <Header>
      <h1>To read list...</h1>
      <div>books: {booksCount} read: {readCount}</div>
    </Header>
  );
};
export default ReadListHeader;