import React from "react";
import ArticleImg from "assets/images/article-2.jpg";
import * as S from "./Article.style";

export const ArticleCover = () => {
  return (
    <S.CoverContainer>
      <img src={ArticleImg} alt="Articulo" />
    </S.CoverContainer>
  );
};
