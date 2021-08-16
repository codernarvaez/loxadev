import { Navbar } from "components";
import { Footer } from "components/Footer";
import { ArticleContent } from "pages/Article/ArticleContent";
import { ArticleCover } from "pages/Article/ArticleCover";
import { ArticleRecent } from "pages/Article/ArticleRecent";
import { OtherTags } from "pages/Article/OtherTags";
import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ArticleContainer = styled.div`
  ${tw`
    max-w-screen-xl
    grid
    m-auto
    py-0
    px-0
    md:px-20.5
    xl:px-24
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3
    xl:grid-rows-2
    gap-5
    mb-4
    md:place-items-start
  `}
`;

export const Article = () => {
  return (
    <Fragment>
      <Navbar />
      <ArticleCover />
      <ArticleContainer>
        <ArticleContent />
        <ArticleRecent />
        <OtherTags />
      </ArticleContainer>
      <Footer />
    </Fragment>
  );
};
