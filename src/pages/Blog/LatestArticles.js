import React from "react";
import { LatestArticleCard } from "components";
import * as S from "./Blog.style";

import { latestArticles } from "pages/Blog/articles";

export const LatestArticles = () => {
  return (
    <S.LatestArticlesSection>
      <S.SectionBlogTitle>Artículos Recientes</S.SectionBlogTitle>

      <S.LatestArticleCards>
        {latestArticles.map((latestArticle, key) => (
          <LatestArticleCard key={key} {...latestArticle} />
        ))}
      </S.LatestArticleCards>
    </S.LatestArticlesSection>
  );
};
