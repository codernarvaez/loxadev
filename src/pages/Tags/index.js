import React, { useMemo, useState } from "react";
import { List, ListActions, Pagination, TagItem } from "components";
import tags from "./data.json";
import * as Ai from "react-icons/ai";
import * as Io from "react-icons/io";

let PageSize = 10;

const actions = [
  { icon: Ai.AiOutlineSearch, title: "Buscar", onClick: () => {} },
  { icon: Io.IoMdAdd, title: "Añadir", onClick: () => {} },
];

export const Tags = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return tags.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <List>
      <ListActions actions={actions} />
      {currentTableData.map((tag, key) => (
        <TagItem key={key} {...tag} />
      ))}
      <Pagination
        currentPage={currentPage}
        totalCount={tags.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </List>
  );
};
