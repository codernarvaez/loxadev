import React, { useState } from "react";
import { ArticleCard, Pagination } from "components";
import * as S from "./Blog.style";

import { articles } from "pages/Blog/articles";

let PageSize = 3;

export const PopularArticles = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <S.PopularArticlesSection>
      <S.SectionBlogTitle>Artículos Populares</S.SectionBlogTitle>

      <S.PopularArticleCards>
        {articles.map((article, key) => (
          <ArticleCard key={key} {...article} />
        ))}
      </S.PopularArticleCards>

      <Pagination
        currentPage={currentPage}
        totalCount={articles.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </S.PopularArticlesSection>
  );
};
