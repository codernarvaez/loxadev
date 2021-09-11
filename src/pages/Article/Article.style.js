import { Card, FlexCol, FlexRow, H2, H4, Span, Wrapper } from "components";
import styled from "styled-components";
import { SCREENS } from "utils/constants";

export const CoverContainer = styled.header`
  height: 150px;
  margin-top: 20px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 200px;
  }
`;

export const ArticleContainer = styled(Wrapper)`
  display: grid;
  grid-template-columns: 100%;
  gap: 20px;
  margin-bottom: 1rem;

  @media (min-width: ${SCREENS.md}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    place-items: start;
  }

  @media (min-width: ${SCREENS.xl}) {
    grid-template-columns: 70% 30%;
  }
`;

// Article Content
export const ArticleContentContainer = styled(Card)`
  position: relative;
  padding: 16px 35px 35px 35px;
  color: ${({ theme }) => theme.text.secondary};
  margin-top: -50px;

  @media (min-width: ${SCREENS.md}) {
    padding: 16px 40px 40px 40px;
    grid-column: 1 / 3;
  }

  @media (min-width: ${SCREENS.xl}) {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
`;

export const ArticleTitle = styled(H2)`
  font-size: 20px;
  color: ${({ theme }) => theme.text.main};
  font-weight: 500;
  max-width: 256px;
  line-height: 36px;

  @media (min-width: ${SCREENS.md}) {
    font-size: 30px;
    max-width: 400px;
  }
`;

export const ArticleAuthorContainer = styled(FlexRow)`
  margin: 20px 0 16px 0;
`;

export const ArticleAuthorAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ArticleAuthorDetails = styled(FlexCol)`
  align-items: start;
  margin-left: 8px;
`;

export const ArticleAuthorName = styled(Span)`
  color: ${({ theme }) => theme.text.primary};
  font-weight: 500;
`;

export const ArticleAuthorOccupation = styled(Span)``;

export const ArticleAuthorViewMore = styled.a`
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.text.main};
  }
`;

export const ArticleDate = styled(Span)`
  margin-bottom: 20px;
  display: inline-block;

  @media (min-width: ${SCREENS.md}) {
    margin-bottom: 0px;
  }
`;

export const ArticleStatsContainer = styled(FlexRow)`
  gap: 10px;

  @media (min-width: ${SCREENS.md}) {
    justify-content: flex-end;
  }
`;

export const ArticleStat = styled(FlexRow)`
  gap: 6px;
  font-size: 14px;
`;

export const ArticleBody = styled.div`
  margin: 1rem 0;
`;

export const ArticleTagsContainer = styled(FlexRow)`
  gap: 10px;
  overflow-x: auto;
`;

export const ArticleTag = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bg.default};
  padding: 10px;
  white-space: nowrap;
  cursor: pointer;
  transition: background 150ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.bg.icon};
  }
`;

export const ArticleInteractContainer = styled(FlexRow)`
  gap: 10px;
  margin-top: 1rem;
`;

export const ArticleInteractButton = styled.span`
  display: flex;
  align-items: center;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.text.primary};
  }
`;

// Recent Articles
export const ArticleRecentContainer = styled(Card)`
  padding: 20px 36px;
  color: ${({ theme }) => theme.text.secondary};
  font-weight: 400;

  @media (min-width: ${SCREENS.md}) {
    padding: 20px;
  }

  @media (min-width: ${SCREENS.xl}) {
    margin-top: 50px;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;

export const ArticleRecentTitle = styled(H4)`
  font-size: 1rem;
  font-weight: 500;
`;

export const ArticleRecentList = styled(FlexCol)`
  margin-top: 20px;
  gap: 10px;

  @media (min-width: ${SCREENS.xl}) {
    gap: 16px;
  }
`;

export const ArticleRecentItem = styled(FlexRow)`
  gap: 10px;
  transition: background 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.bg.default};
  }

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
  }
`;

// Other Tags
export const OtherTagsRecentContainer = styled(Card)`
  padding: 20px 36px;
  color: ${({ theme }) => theme.text.secondary};

  @media (min-width: ${SCREENS.md}) {
    padding: 20px;
  }

  @media (min-width: ${SCREENS.xl}) {
    padding: 20px;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;

export const OtherTagsRecentTitle = styled(ArticleRecentTitle)``;

export const OtherTagsList = styled(FlexRow)`
  margin-top: 20px;
  gap: 10px;
  flex-wrap: wrap;
`;
