export default function MatchList() {
  const API_KEY: string =
    "test_efb42ba6f037a09fa65e28125f10993901f1b04a6a72fa38874476df6649b33021322271e4aa69d519c1f1c287a7bf59";

  function request(path: string) {
    return fetch(`https://open.api.nexon.com/fconline/v1/${path}`, {
      headers: {
        "x-nxopen-api-key": API_KEY,
      },
    });
  }

  async function getMatchList() {
    try {
      // 모든 매치 기록 조회
      const response1 = await request(
        "match?matchtype=30&offset=0&limit=100&orderby=desc"
      );
      const data1 = await response1.json();
      console.log(data1);
      for (let list of data1) {
        // 매치 상세 기록 조회
        const response2 = await request("match-detail?matchid=" + list);
        const data2 = await response2.json();
        console.log(data2);
        return data2;
      }
    } catch (error) {
      console.error(error);
    }
  }

  getMatchList();
  
  return <h1>d</h1>;
}
