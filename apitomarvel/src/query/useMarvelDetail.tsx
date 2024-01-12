import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { MarvelListRes } from "../types/marvel";

export const useMarvelDetail = () => {
  const { id } = useParams();

  return useFetch<MarvelListRes>({
    fetchUrl: `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=aefc5f2cd24e5ccc94b27767e260b6d9`,
  });
};