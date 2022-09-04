import React, { useState } from "react";

function usePagination(EventL, itemsPerPage, search) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(EventL.length / itemsPerPage);

  function currentData() {
    const SearchParams = (rows) =>{
      const columns = rows[0] && Object.keys(rows[0])
      return rows.filter((row)=>columns.some((column)=>row[column].toString().toLowerCase().indexOf(search.toLowerCase())>-1))
    }
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return SearchParams(EventL.slice(begin, end));
  }

  function next() {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}

export default usePagination;