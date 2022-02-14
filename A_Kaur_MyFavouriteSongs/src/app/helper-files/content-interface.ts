export interface Content {
  id: string;
  title: string;
  description: string;
  creator: string;
  imgURL?: string;
  type?: string;
  tags?: string[];
  lyrics?: unknown;
  music: String;
  label: String;
  color: String;
  searchFilter: boolean;
  undefined?: undefined;
  null?: null;
  price?: number;
}
