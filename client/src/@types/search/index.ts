export interface ISearchMoviesData {
  query: string;
  nationFlag: string | null;
  page: number;
  sort: string | null;
  genreFilter: string | null;
  showTimeFilter: string | null;
  openDateFilter: string | null;
}
