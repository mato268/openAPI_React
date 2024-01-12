import { Link } from "react-router-dom";
import "./css/CharacterList.css";
import { Pagenation } from "./Pagenation";
import { useMarvelList } from "../query/useMarvelList";

export default function CharacterList() {
  const { data, loading, page, setPage } = useMarvelList();
  const maxPage = data?.total ? Math.ceil(data?.total / 20) : 1;

  if (loading) {
    return <span>캐릭터 리스트를 불러오는 중입니다...</span>;
  }

  return (
    <>
      <ul>
        {data?.results.map((item) => (
          <li key={item.id}>
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