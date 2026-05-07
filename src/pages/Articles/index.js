import React, { useMemo, useState } from "react";
import { ArticleItem, List, ListActions, Pagination } from "components";
import * as Ai from "react-icons/ai";
import * as Io from "react-icons/io";

import articles from "./data.js";

let PageSize = 5;

const actions = [
  { icon: Ai.AiOutlineSearch, title: "Buscar", onClick: () => {} },
  { icon: Io.IoMdAdd, title: "Añadir", onClick: () => {} },
];

export const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return articles.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <List>
      <ListActions actions={actions} />
      {currentTableData.map((article, key) => (
        <ArticleItem key={key} {...article} />
      ))}

      <Pagination
        currentPage={currentPage}
        totalCount={articles.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </List>
  );
};
