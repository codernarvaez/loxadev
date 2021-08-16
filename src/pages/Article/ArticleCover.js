import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import ArticleImg from "assets/images/article-2.jpg";
import { SCREENS } from "utils/constants";

const CoverContainer = styled.header`
  height: 150px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  ${tw`mt-5`}

  @media (min-width: ${SCREENS.md}) {
    height: 200px;
  }
`;

export const ArticleCover = () => {
  return (
    <CoverContainer>
      <img src={ArticleImg} alt="Articulo" />
    </CoverContainer>
  );
};
