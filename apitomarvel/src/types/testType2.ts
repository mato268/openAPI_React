interface Item {
  resourceURI: string;
  name: string;
}

interface Collection {
  available: number;
  collectionURI: string;
}

interface MarvelCharacterResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: {
      id: number;
      name: string;
      description: string;
      modified: string;
      thumbnail: {
        path: string;
        extension: string;
      };
      resourceURI: string;
      comics: {
        items: Item[];
        returned: number;
      } & Collection;
    }[];
    series: {
      items: Item[];
      returned: number;
    } & Collection;
    stories: {
      items: (Item & { type: string })[];
    } & Collection;
  }[];
}

export {};
