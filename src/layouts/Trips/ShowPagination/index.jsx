import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const ShowPagination = ({ handleOnChangePage, totalPages, currentPage }) => {
  const renderPageItem = () => {
    let temptArray = [];
    for (let i = 1; i <= totalPages; i++) {
      let paginationTemplate = (
        <PaginationItem
          active={currentPage === i ? true : false}
          key={i}
          onClick={() => handleOnChangePage(i)}
        >
          <PaginationLink>{i}</PaginationLink>
        </PaginationItem>
      );
      temptArray = [...temptArray, paginationTemplate];
    }
    return temptArray;
  };
  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink
          first
          onClick={() => handleOnChangePage(1)}
        ></PaginationLink>
      </PaginationItem>
      {renderPageItem()}
      <PaginationItem>
        <PaginationLink
          last
          onClick={() => handleOnChangePage(totalPages)}
        ></PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default ShowPagination;
