import React from "react";
import * as S from "./Pagination.style";
import { DOTS, usePagination } from "hooks";

export const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  ...rest
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <S.StyledPagination {...rest}>
      <S.PaginationItem disabled={currentPage === 1} onClick={onPrevious}>
        <S.ArrowLeft />
      </S.PaginationItem>

      {paginationRange.map((pageNumber, key) => {
        if (pageNumber === DOTS) {
          return (
            <S.PaginationItem key={key} className="dots">
              &#8230;
            </S.PaginationItem>
          );
        }

        return (
          <S.PaginationItem
            key={key}
            selected={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </S.PaginationItem>
        );
      })}

      <S.PaginationItem disabled={currentPage === lastPage} onClick={onNext}>
        <S.ArrowRight />
      </S.PaginationItem>
    </S.StyledPagination>
  );
};
