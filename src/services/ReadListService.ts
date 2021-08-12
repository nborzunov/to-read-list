import { book, bookList } from "../types/types";

export class ReadListService {
  static setReadList(readList: bookList) {
    localStorage.setItem("readList", JSON.stringify(readList));
  }

  static get readList(): bookList {
    const json = localStorage.getItem("readList");
    return json ? JSON.parse(json) : [];
  }

  static addBook(book: book) {
    const newReadList = [book, ...ReadListService.readList];
    ReadListService.setReadList(newReadList);
    return newReadList;
  }

  static markBook(bookId: string) {
    const newReadList = ReadListService.readList.filter(book => {
      if (book.key === bookId) book.read = !book.read;
      return book;
    });
    ReadListService.setReadList(newReadList);
    return newReadList;
  }

  static deleteBook(bookId: string) {
    const newReadList = ReadListService.readList.filter(book => book.key !== bookId);
    ReadListService.setReadList(newReadList);
    return newReadList;
  }
}


