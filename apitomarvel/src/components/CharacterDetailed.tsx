import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CharacterDetailed() {
  const [characters, setCharacters] = useState<any[]>([]);

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
        console.log(data1);
        return data1.data.results;
      } catch (error) {
        console.error(error);
      }
    }

    getCharacters().then(response => setCharacters(response));
  }, []);

  const list = useParams().id;
  console.log(list);
  const CharacterList = characters.filter(itemid => itemid.id === Number(list));

  return (
    <>
      <table>
        <tbody>
          {CharacterList.map((item, id) => (
              <tr key={id}>
                <td>번호 : {item.id}</td>
                <td>이름 : {item.name}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
