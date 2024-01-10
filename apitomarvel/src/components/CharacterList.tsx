import { Link } from "react-router-dom";
import UseFetch from "./UseFetch";

export default function CharacterList() {
  const characters = UseFetch();

  if (characters.length === 0) {
    return <span>캐릭터 리스트를 불러오는 중입니다...</span>;
  }

  return (
    <ul>
      {characters.map((item, id) => (
        <li key={id}>
          <Link to={`/characterdetailed/${item.id}`}>이름 : {item.name}</Link>
        </li>
      ))}
    </ul>
  );
}
