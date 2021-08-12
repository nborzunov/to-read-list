import { APIClient } from "./API";

export class OpenLibraryService {
  static apiClient = new APIClient();

  static async searchBooks(query: string, page: number) {
    if (query === "") return;
    return OpenLibraryService.apiClient.get(
      `/search.json?q=${query}&page=${page}`
    );
  }
}