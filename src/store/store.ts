import { action, IObservableArray, makeObservable, observable, reaction } from "mobx";
import { book, bookList } from "../types/types";
import { OpenLibraryService } from "../services/OpenLibraryService";
import { createContext, useContext } from "react";


export default class BookListStore {
  bookList: IObservableArray<book> | bookList;
  isLoading: boolean;
  query: string;
  currentUploadPage: number;

  constructor() {
    this.bookList = [];
    this.isLoading = false;
    this.query = "";
    this.currentUploadPage = 1;
    makeObservable(this, {
      bookList: observable,
      isLoading: observable,
      query: observable,
      currentUploadPage: observable,
      onSearch: action,
      getReadList: action,
      setReadList: action,
      setLoading: action,
      setCurrentPage: action
    });
    reaction(
      () => this.query,
      () => this.firstLoad()
    );

    reaction(
      () => this.currentUploadPage,
      () => this.appendData()
    );
  }

  async firstLoad() {
    this.setCurrentPage(1);
    const newList = await this.loadData();
    this.setReadList([]);
    this.setReadList(newList);
  };

  async appendData() {
    if (this.currentUploadPage === 1) {
      return;
    }

    const newList = await this.loadData();
    this.setReadList([...this.bookList, ...newList]);
  };

  setReadList = (newList: any) => {
    this.bookList = newList;
    this.setLoading(false);
  };

  setLoading(status: boolean) {
    this.isLoading = status;
  };

  async loadData() {
    const query = this.query, page = this.currentUploadPage;
    if (query === "") {
      return;
    }
    this.setLoading(true);
    const newData = await OpenLibraryService.searchBooks(query, page);
    return newData.docs;

  };

  setCurrentPage = (newPage: number) => {
    this.currentUploadPage = newPage;
  };

  onSearch = (newQuery: string) => {
    this.query = newQuery;
  };

  getReadList = () => {
    return this.bookList;
  };
}

export const StoreContext = createContext(new BookListStore());
export const useStore = () => useContext(StoreContext);