import { Link } from "react-router-dom";

export default function Header() {
  return (
    <h1>
      <Link to={"/"}> 마블 캐릭터 정보</Link>
    </h1>
  );
}
