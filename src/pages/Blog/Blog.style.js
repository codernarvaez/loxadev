import { FlexRow, Link, SectionTitle, Wrapper } from "components";
import styled from "styled-components";
import { SCREENS } from "utils/constants";

export const StyledBlog = styled(Wrapper)`
  margin-top: 40px;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "popular-articles"
    "latest-articles"
    "main-tags";
  gap: 30px;

  @media (min-width: ${SCREENS.xl}) {
    grid-template-columns: 260px auto;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      "latest-articles popular-articles"
      "main-tags popular-articles";
    column-gap: 16px;
    row-gap: 30px;
  }
`;

export const PopularArticlesSection = styled.section`
  grid-area: popular-articles;
`;

export const LatestArticlesSection = styled.section`
  grid-area: latest-articles;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bg.card};
  box-shadow: 0px 5px 10px ${({ theme }) => theme.bg.shadow};
  padding: 10px 15px 20px;
`;

export const MainTagsSection = styled(LatestArticlesSection)`
  grid-area: main-tags;
`;

export const SectionBlogTitle = styled(SectionTitle)`
  font-size: 16px;
  text-align: left;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.secondary};
`;

export const PopularArticleCards = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
  gap: 10px;

  @media (min-width: ${SCREENS.xl}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    row-gap: 30px;
    column-gap: 12px;
  }
`;

export const LatestArticleCards = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  gap: 10px;

  @media (min-width: ${SCREENS.md}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    row-gap: 15px;
    column-gap: 30px;
  }

  @media (min-width: ${SCREENS.xl}) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, auto);
    gap: 15px;
  }
`;

export const MainTags = styled(FlexRow)`
  margin-top: 15px;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 15px;
`;

export const MainTag = styled(Link)`
  padding: 10px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bg.default};
  color: ${({ theme }) => theme.text.secondary};
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.bg.icon};
    color: ${({ theme }) => theme.text.default};
  }
`;
