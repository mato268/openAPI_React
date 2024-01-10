import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function WrongApproachPage() {
  const { id } = useParams();
  console.log(id)

  if (id && id.length >= 8) {
    return (
      <>
        <h1>유효하지 않은 접근입니다.</h1>
        <h2>
          <Link to={"/"}>돌아가기</Link>
        </h2>
      </>
    );
  }
  return <></>;
}
