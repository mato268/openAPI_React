import { Link } from "react-router-dom";
import "./css/CharacterList.module.css";
import { Pagenation } from "./Pagenation";
import { useMarvelList } from "../query/useMarvelList";

export default function CharacterList() {
  const { data, loading, page, setPage } = useMarvelList();
  const maxPage = data?.total ? Math.ceil(data?.total / 20) : 1;

  if (loading) {
    return <span>캐릭터 리스트를 불러오는 중입니다...</span>;
  }

  console.log(data);

  return (
    <>
      <ul>
        {data?.results.map(item => (
          <div key={item.id}>
            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="profile"/>
            <li>
              <Link
                to={`/characterdetailed/${item.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                캐릭터명 : {item.name}
              </Link>
            </li>
          </div>
        ))}
      </ul>
      <Pagenation maxPage={maxPage} page={page} onPageChange={setPage} />
    </>
  );
}
