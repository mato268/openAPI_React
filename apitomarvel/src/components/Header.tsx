import { Link } from "react-router-dom";
import headerStyles from "./css/Header.module.css";

export default function Header() {
  return (
    <h1 className={headerStyles.h1}>
      <Link to={"/"} style={{ textDecoration: "none", color: "red" }}>
        마블 캐릭터
      </Link>
    </h1>
  );
}
