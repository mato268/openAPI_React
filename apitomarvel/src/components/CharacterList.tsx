import { Link } from "react-router-dom";
// import useFetch from "./UseFetch";
import "./css/CharacterList.css";
import { Pagenation } from "./Pagenation";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { MarvelListRes } from "../types/marvel";

export default function CharacterList() {
  const { data, loading } = useFetch<MarvelListRes>({
    request: async () => {
      const result = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters?apikey=aefc5f2cd24e5ccc94b27767e260b6d9`
      );
      const { data } = await result.json();

      return data;
    },
  });
  const [page, setPage] = useState(1);
  const maxPage = Math.ceil(data?.total ?? 1 / 20);

  if (loading) {
    return <span>캐릭터 리스트를 불러오는 중입니다...</span>;
  }

  return (
    <>
      <ul>
        {data?.results.map((item, id) => (
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
