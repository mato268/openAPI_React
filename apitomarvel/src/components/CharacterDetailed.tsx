import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";

export default function CharacterDetailed() {
  const characters = UseFetch();

  const list = useParams().id;
  console.log(list);
  const characterList = characters.filter(itemid => itemid.id === Number(list));

  if (characters.length === 0) {
    return <span>캐릭터 정보를 불러오는 중입니다...</span>;
  }

  return (
    <>
      <table>
        <tbody>
          {characterList.map((item, id) => (
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
