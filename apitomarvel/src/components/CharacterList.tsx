import { Link } from "react-router-dom";
import UseFetch from "./UseFetch";
import "./css/CharacterList.css";
import { Pagenation } from "./Pagenation";
import { useState } from "react";

export default function CharacterList() {
  const { characters, totalCount } = UseFetch();
  const [page, setPage] = useState(1);

  if (characters.length === 0) {
    return <span>캐릭터 리스트를 불러오는 중입니다...</span>;
  }

  const maxPage = Math.ceil(totalCount / 20);

  return (
    <>
      <ul>
        {characters.map((item, id) => (
          <li key={id}>
            <Link
              to={`/characterdetailed/${item.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              캐릭터명 : {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <Pagenation maxPage={maxPage} page={page} onPageChange={setPage} />
    </>
  );
}
