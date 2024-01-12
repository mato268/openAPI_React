interface Marvel {
  name: string;
  id: number;
  thumbnail: Img[];
}

interface Img {
  extension: string;
  path: string;
}

export interface MarvelListRes {
  results: Marvel[];
  total: number;
  id: number;
}
