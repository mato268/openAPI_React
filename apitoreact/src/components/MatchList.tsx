export default function MatchList() {
  const API_KEY: string = "0a08e951d42222a6664422fa2e7a32f30d94b290";

  function request(path: string) {
    return fetch(`http://gateway.marvel.com/v1/public/characters`, {
      headers: {
        "x-nxopen-api-key": API_KEY,
      },
    });
  }

  const getMatchList = async () => {
    try {
      const response1 = await request(
        "match?matchtype=30&offset=0&limit=100&orderby=desc"
      );
      const data1 = await response1.json();
      console.log(data1);
      return data1;
    } catch (error) {
      console.error(error);
    }
  };

  getMatchList()

  return (
    <ul>
      <li></li>
    </ul>
  );
}
