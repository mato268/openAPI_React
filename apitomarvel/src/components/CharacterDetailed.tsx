import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";
import "./css/CharacterDetailed.css";

export default function CharacterDetailed() {
  const characters = UseFetch();

  const { id } = useParams();
  const characterList = characters.filter(itemid => itemid.id === Number(id));

  if (characters.length === 0) {
    return <span>캐릭터 정보를 불러오는 중입니다...</span>;
  }

  return (
    <>
      <table>
        <tbody>
          {characterList.map((item, id) => (
            <tr key={id}>
              <td>ID : {item.id}</td>
            </tr>
          ))}
          {characterList.map((item, id) => (
            <tr key={id}>
              <td>이름 : {item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
