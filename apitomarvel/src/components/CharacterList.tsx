import { Link } from "react-router-dom";
import UseFetch from "./UseFetch";

export default function CharacterList() {
  const characters = UseFetch();

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
