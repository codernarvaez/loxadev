import React, { Fragment } from "react";
import { CoverHeader, Footer, Navbar } from "components";
import { PopularArticles } from "pages/Blog/PopularArticles";
import { LatestArticles } from "pages/Blog/LatestArticles";
import { MainTags } from "pages/Blog/MainTags";
import * as S from "./Blog.style";

import BlogCoverImg from "assets/images/team.jpg";

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
        <PopularArticles />
        <LatestArticles />
        <MainTags />
      </S.StyledBlog>

      <Footer />
    </Fragment>
  );
};
