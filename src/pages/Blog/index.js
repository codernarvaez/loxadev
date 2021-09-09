import React, { Fragment } from "react";
import {
  ArticleCard,
  CoverHeader,
  Footer,
  LatestArticleCard,
  Navbar,
} from "components";
import * as S from "./Blog.style";

import BlogCoverImg from "assets/images/team.jpg";
import { articles, latestArticles } from "pages/Blog/articles";

export const Blog = () => {
  return (
    <Fragment>
      <Navbar />
      <CoverHeader
        coverImg={BlogCoverImg}
        alt="Blog"
        title="Blog"
        lead="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
        buttonText="Sobre Nosotros"
        buttonProps={{ to: "/nosotros", size: "small" }}
      />

      <S.StyledBlog>
        <S.PopularArticlesSection>
          <S.SectionBlogTitle>Artículos Populares</S.SectionBlogTitle>

          <S.PopularArticleCards>
            {articles.map((article, key) => (
              <ArticleCard key={key} {...article} />
            ))}
          </S.PopularArticleCards>
        </S.PopularArticlesSection>

        <S.LatestArticlesSection>
          <S.SectionBlogTitle>Artículos Recientes</S.SectionBlogTitle>

          <S.LatestArticleCards>
            {latestArticles.map((latestArticle, key) => (
              <LatestArticleCard key={key} {...latestArticle} />
            ))}
          </S.LatestArticleCards>
        </S.LatestArticlesSection>

        <S.MainTagsSection>
          <S.SectionBlogTitle>Principales Etiquetas</S.SectionBlogTitle>

          <S.MainTags>
            <S.MainTag to="#">Inteligencia Artificial</S.MainTag>
            <S.MainTag to="#">ReactJS</S.MainTag>
            <S.MainTag to="#">Design</S.MainTag>
            <S.MainTag to="#">ML</S.MainTag>
            <S.MainTag to="#">ReactJS</S.MainTag>
            <S.MainTag to="#">Javascript</S.MainTag>
          </S.MainTags>
        </S.MainTagsSection>
      </S.StyledBlog>

      <Footer />
    </Fragment>
  );
};
