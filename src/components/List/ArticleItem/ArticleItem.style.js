import { Bold, FlexCol, Span } from "components";
import styled from "styled-components";
import { SCREENS } from "utils/constants";

export const StyledArticleItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, auto);
  grid-template-areas:
    "article-cover"
    "article-title"
    "article-timestamps"
    "badge"
    "item-actions";
  justify-items: center;
  gap: 15px;

  @media (min-width: ${SCREENS.md}) {
    grid-template-columns: 340px auto;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
      "article-cover badge"
      "article-title item-actions"
      "article-timestamps item-actions";
    align-items: center;
    row-gap: 6px;
  }

  @media (min-width: ${SCREENS.xl}) {
    grid-template-columns: 200px 350px repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      "article-cover article-title badge item-actions"
      "article-cover article-timestamps badge item-actions";
    align-items: center;
    column-gap: 30px;
  }
`;

export const ArticleCover = styled.div`
  grid-area: article-cover;
  height: 80px;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const ArticleTitle = styled(Bold)`
  grid-area: article-title;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ArticleTimestamps = styled(FlexCol)`
  grid-area: article-timestamps;
  width: 100%;
  margin-top: -15px;

  @media (min-width: ${SCREENS.md}) {
    margin-top: -6px;
  }

  @media (min-width: ${SCREENS.xl}) {
    margin-top: 0;
  }
`;

export const ArticleCreatedAt = styled(Span)`
  font-size: 12px;
  font-weight: 300;
`;

export const ArticleUpdatedAt = styled(ArticleCreatedAt)``;
