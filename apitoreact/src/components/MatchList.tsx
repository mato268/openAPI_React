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
      const response1 = await request(
        "match?matchtype=30&offset=0&limit=100&orderby=desc"
      );
      const data1 = await response1.json();
      console.log(data1);
      for (let index = 0; index < data1.length; index++) {
        const response2 = await request("match-detail?matchid=" + data1[index]);
        const data2 = response2.json();
        console.log(data1[index]);
        return data2;
      }
    } catch (error) {
      console.error(error);
    }
  }

  getMatchList();
  return <h1>d</h1>;
}
