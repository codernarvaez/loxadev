import React, { Fragment } from "react";
import { Footer, Navbar } from "components";
import { ArticleContent } from "pages/Article/ArticleContent";
import { ArticleCover } from "pages/Article/ArticleCover";
import { ArticleRecent } from "pages/Article/ArticleRecent";
import { OtherTags } from "pages/Article/OtherTags";
import { ArticleContainer } from "pages/Article/Article.style";

export const Article = () => {
  return (
    <Fragment>
      <Navbar />
      <ArticleCover />
      <ArticleContainer fluid>
        <ArticleContent />
        <ArticleRecent />
        <OtherTags />
      </ArticleContainer>
      <Footer />
    </Fragment>
  );
};
