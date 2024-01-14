import detailStyles from "./css/CharacterDetailed.module.css";
import { useMarvelDetail } from "../query/useMarvelDetail";

export default function CharacterDetailed() {
  const { data, loading } = useMarvelDetail();

  if (loading) {
    return <span>캐릭터 정보를 불러오는 중입니다...</span>;
  }

  return (
    <div className={detailStyles.div}>
      {data?.results.map(item => (
        <div key={item.id}>
          <div>
            <div>
              <img
                className={detailStyles.img}
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt="profile"
              />
            </div>
          </div>
          <div>
            <div>ID : {item.id}</div>
          </div>
          <div>
            <div>이름 : {item.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
