import React from "react";
import * as Styled from "../community.styled";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return; // 페이지 범위 체크
    onPageChange(page);
  };

  return (
    <Styled.PaginationContainer>
      <Styled.PaginationButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        이전
      </Styled.PaginationButton>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Styled.PaginationButton
          key={i}
          onClick={() => handlePageChange(i + 1)}
          active={i + 1 === currentPage}
        >
          {i + 1}
        </Styled.PaginationButton>
      ))}
      <Styled.PaginationButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        다음
      </Styled.PaginationButton>
    </Styled.PaginationContainer>
  );
};

export default Pagination;
