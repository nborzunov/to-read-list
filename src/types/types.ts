export interface book {
  key: string,
  title: string,
  language?: string[],
  subtitle?: string,
  author_name: string[],
  read?: boolean,
  has_full_text?: true,
  first_publish_year: string,
  publish_date?: string[]
}


export type bookList = book[];
