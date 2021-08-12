export class APIClient {
  url: string;

  constructor() {
    this.url = "http://openlibrary.org";
  }

  async get(fullQuery: string) {
    const url = `${this.url}${fullQuery}`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      }
      // Do something with error
      console.error(`Request ${url} failed with ${response.status}`);
    } catch (error) {
      console.error(`Request ${url} failed with error`, error);
    }
  }
}