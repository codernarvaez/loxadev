import React from "react";
import ArticleImg from "assets/images/article.jpg";
import * as S from "./Article.style";

export const ArticleRecent = () => {
  return (
    <S.ArticleRecentContainer>
      <S.ArticleRecentTitle>Artículos Recientes</S.ArticleRecentTitle>

      <S.ArticleRecentList>
        <S.ArticleRecentItem>
          <img src={ArticleImg} alt="" />
          <span>Lorem ipsum dolor sit amet, consetetur</span>
        </S.ArticleRecentItem>

        <S.ArticleRecentItem>
          <img src={ArticleImg} alt="" />
          <span>Lorem ipsum dolor sit amet, consetetur</span>
        </S.ArticleRecentItem>

        <S.ArticleRecentItem>
          <img src={ArticleImg} alt="" />
          <span>Lorem ipsum dolor sit amet, consetetur</span>
        </S.ArticleRecentItem>

        <S.ArticleRecentItem>
          <img src={ArticleImg} alt="" />
          <span>Lorem ipsum dolor sit amet, consetetur</span>
        </S.ArticleRecentItem>
      </S.ArticleRecentList>
    </S.ArticleRecentContainer>
  );
};
