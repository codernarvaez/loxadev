import styled from "styled-components";
import { Button, H6, OutlineButton, P, Span } from "components";
import { SCREENS } from "utils/constants";

export const StyledCard = styled.div`
  box-shadow: 0px 3px 10px ${({ theme }) => theme.bg.shadow};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bg.card};
  background-clip: padding-box;
  flex: none;
  overflow: hidden;
`;

export const StyledFeatureCard = styled(StyledCard)`
  border-radius: 0;
  padding: 24px 22px 30px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
`;

export const FeatureCardIcon = styled.span`
  color: ${({ theme }) => theme.text.primary};

  svg {
    font-size: 60px;
  }
`;

export const FeatureCardTitle = styled(H6)`
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const FeatureCardText = styled(P)`
  font-weight: 300;
`;

export const StyledTeamCard = styled(StyledFeatureCard)`
  background-color: ${({ theme }) => theme.bg.default};
  padding: 0px;
  margin-top: 30px;
`;

export const TeamCardImage = styled.div`
  width: 100%;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TeamCardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px 20px;
  gap: 5px;
`;

export const TeamCardName = styled(Span)`
  font-weight: 500;
`;

export const TeamCardOccupation = styled(Span)`
  font-weight: 300;
`;

export const StyledProductCard = styled(StyledCard)``;

export const ProductCardImage = styled.div`
  height: 150px;
  width: auto;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const ProductCardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px 30px;
  gap: 20px;
  text-align: center;

  @media (min-width: ${SCREENS.md}) {
    align-items: center;
  }
`;

export const ProductCardTitle = styled(H6)`
  font-size: 16px;
  color: ${({ theme }) => theme.text.main};
`;

export const ProductCardText = styled(P)`
  font-weight: 300;
  margin-top: -10px;
`;

export const StyledArticleCard = styled(StyledCard)`
  width: 100%;
  box-sizing: border-box;
`;

export const ArticleCardImage = styled.div`
  height: 135px;
  width: auto;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const ArticleCardContent = styled.div`
  display: grid;
  padding: 15px 15px 20px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, auto);
  grid-template-areas:
    "article-date"
    "article-title"
    "article-abstract"
    "article-statistics"
    "article-action-button";

  @media (min-width: ${SCREENS.md}) {
    padding: 15px 25px 20px;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(4, auto);
    grid-template-areas:
      "article-date article-date"
      "article-title article-title"
      "article-abstract article-abstract"
      "article-action-button article-statistics";
    justify-items: start;
  }
`;

export const ArticleCardDate = styled(Span)`
  grid-area: article-date;
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 5px;
`;

export const ArticleCardTitle = styled(H6)`
  grid-area: article-title;
  font-size: 1rem;
  color: ${({ theme }) => theme.text.main};
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const ArticleCardAbstract = styled(P)`
  grid-area: article-abstract;
  color: ${({ theme }) => theme.text.secondary};
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  margin-bottom: 10px;
`;

export const ArticleCardStatistics = styled.div`
  display: flex;
  grid-area: article-statistics;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;

  @media (min-width: ${SCREENS.md}) {
    margin-bottom: 0;
    justify-content: flex-end;
    justify-self: flex-end;
  }
`;

export const ArticleCardStatisticItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.text.secondary};
`;

export const ArticleCardActionButton = styled(Button)`
  grid-area: article-action-button;
  width: 100%;

  @media (min-width: ${SCREENS.md}) {
    padding: 14px 40px;
  }
`;
export const StyledLatestArticleCard = styled(StyledArticleCard)`
  background-color: transparent;
  border-radius: 0px;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media (min-width: ${SCREENS.md}) {
    align-items: start;
  }
`;

export const LatestArticleCardImage = styled(ArticleCardImage)`
  align-self: stretch;
  height: 100px;
`;

export const LatestArticleTitle = styled(ArticleCardTitle)`
  font-size: 14px;
  -webkit-line-clamp: 2;
  margin-bottom: 0px;
`;

export const LatestArticleAbstract = styled(ArticleCardAbstract)`
  font-size: 14px;
  -webkit-line-clamp: 3;
  margin-bottom: 5px;
`;

export const LatestArticleActionButton = styled(OutlineButton)`
  border-color: ${({ theme }) => theme.text.secondary};
  color: ${({ theme }) => theme.text.secondary};
`;
