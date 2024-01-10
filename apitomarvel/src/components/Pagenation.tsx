interface PagenationProps {
  page: number;
  onPageChange: (page: number) => void;
  maxPage: number;
}

export const Pagenation = ({
  onPageChange,
  page,
  maxPage,
}: PagenationProps) => {
  const getPageNumberList = () => {
    // 시작할때 처리
    if (page < 3) {
      return [1, 2, 3, 4, 5];
    }
    if (page >= 3 && page < maxPage - 1) {
      return [page - 2, page - 1, page, page + 1, page + 2];
    }

    // 끝날때 처리
    if (page === maxPage - 1) {
      return [page - 3, page - 2, page - 1, page, page + 1];
    }
    if (page === maxPage) {
      return [page - 4, page - 3, page - 2, page - 1, page];
    }

    return [];
  };

  return (
    <div>
      <button onClick={() => onPageChange(1)}>{"<<"}</button>
      <button
        onClick={() => {
          onPageChange(page - 5 <= 0 ? 1 : page - 5);
        }}
      >
        {"<"}
      </button>
      {getPageNumberList().map((item) => (
        <button
          key={item}
          onClick={() => onPageChange(item < maxPage ? item : maxPage)}
        >
          {item}
        </button>
      ))}
      <button
        onClick={() => onPageChange(page + 5 >= maxPage ? maxPage : page + 5)}
      >
        {">"}
      </button>
      <button onClick={() => onPageChange(maxPage)}>{">>"}</button>
    </div>
  );
};
