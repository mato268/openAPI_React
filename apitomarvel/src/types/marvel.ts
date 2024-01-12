interface Marvel {
  name: string;
  id: number;
}

export interface MarvelListRes {
  results: Marvel[];
  total: number;
  id: number;
}
