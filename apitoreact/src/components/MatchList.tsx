import { useState } from "react";
import { useEffect } from "react";

export default function MatchList() {
  const [list, setList] = useState("");

  const API_KEY: string =
    "test_efb42ba6f037a09fa65e28125f10993901f1b04a6a72fa38874476df6649b33021322271e4aa69d519c1f1c287a7bf59";

  function request(path: string) {
    return fetch(`https://open.api.nexon.com/fconline/v1/${path}`, {
      headers: {
        "x-nxopen-api-key": API_KEY,
      },
    });
  }

  useEffect(() => {
    const getMatchList = async () => {
      try {
        const response1 = await request(
          "match?matchtype=30&offset=0&limit=100&orderby=desc"
        );
        const data1 = await response1.json();
        console.log(data1);
        const response2 = await request("match-detail?matchid=" + data1[0]);
        const data2 = await response2.json();
        console.log(data2);
        return data2;
      } catch (error) {
        console.error(error);
      }
    };

    getMatchList().then(response => setList(response));
  }, []);

  interface Item {
    matctDate: string;
    matcgId:string;
  }

  return (
    <ul>
      <li></li>
    </ul>
  );
}
