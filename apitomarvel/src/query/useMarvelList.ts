import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { MarvelListRes } from "../types/marvel";

export const useMarvelList = () => {
  const [page, setPage] = useState(1);

  const fetchUrl = `https://gateway.marvel.com:443/v1/public/characters?apikey=${
    process.env.REACT_APP_API_KEY
  }&limit=20&offset=${(page - 1) * 20}`;

  const { data, loading } = useFetch<MarvelListRes>({
    fetchUrl,
  });

  return {
    data,
    loading,
    page,
    setPage,
  };
};
