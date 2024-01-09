import { useEffect, useState } from "react";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

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
        const characters = data1.data.results
        console.log(characters)
        return characters;
      } catch (error) {
        console.error(error);
      }
    }

    getCharacters().then(response => setCharacters(characters));
  }, []);

  return (
    <ul>
      <li></li>
    </ul>
  );
}
