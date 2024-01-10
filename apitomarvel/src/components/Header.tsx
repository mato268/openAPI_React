import { Link } from "react-router-dom";
import "./css/Header.css";

export default function Header() {
  return (
    <h1>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        마블 캐릭터 조회
      </Link>
    </h1>
  );
}
