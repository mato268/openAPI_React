import { useEffect, useState } from "react";

export default function useFetch() {
  const [characters, setCharacters] = useState<any[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  function request(path: string) {
    return fetch(`https://gateway.marvel.com:443/v1/public/characters?${path}`);
  }

  useEffect(() => {
    async function getCharacters() {
      try {
        const response1 = await request(
          "apikey=aefc5f2cd24e5ccc94b27767e260b6d9"
        );
        const data1 = await response1.json();
        setTotalCount(data1.data.total);

        return data1.data.results;
      } catch (error) {
        console.error(error);
      }
    }

    getCharacters().then((response) => setCharacters(response));
  }, []);

  return { characters, totalCount };
}
