import React from "react";
import * as S from "./Card.style";
import * as Ai from "react-icons/ai";
import { IconTextButton } from "components";

export const Card = (props) => {
  return <S.StyledCard {...props}>{props.children}</S.StyledCard>;
};

export const FeatureCard = ({ icon: Icon, title, text, ...rest }) => {
  return (
    <S.StyledFeatureCard {...rest}>
      <S.FeatureCardIcon>
        <Icon />
      </S.FeatureCardIcon>
      <S.FeatureCardTitle>{title}</S.FeatureCardTitle>
      <S.FeatureCardText>{text}</S.FeatureCardText>
    </S.StyledFeatureCard>
  );
};

export const TeamCard = ({ image, name, occupation, ...rest }) => {
  return (
    <S.StyledTeamCard {...rest}>
      <S.TeamCardImage>
        <img src={image} alt={name} />
      </S.TeamCardImage>
      <S.TeamCardContent>
        <S.TeamCardName>{name}</S.TeamCardName>
        <S.TeamCardOccupation>{occupation}</S.TeamCardOccupation>
      </S.TeamCardContent>
    </S.StyledTeamCard>
  );
};

export const ProductCard = ({ image, title, text, buttonProps, ...rest }) => {
  return (
    <S.StyledProductCard {...rest}>
      <S.ProductCardImage>
        <img src={image} alt={title} />
      </S.ProductCardImage>

      <S.ProductCardContent>
        <S.ProductCardTitle>{title}</S.ProductCardTitle>
        <S.ProductCardText>{text}</S.ProductCardText>
        <IconTextButton {...buttonProps} />
      </S.ProductCardContent>
    </S.StyledProductCard>
  );
};

export const ArticleCard = ({
  _id,
  cover,
  createdAt,
  title,
  content,
  visits,
  likes,
  ...rest
}) => (
  <S.StyledArticleCard {...rest}>
    <S.ArticleCardImage>
      <img src={cover} alt={title} />
    </S.ArticleCardImage>

    <S.ArticleCardContent>
      <S.ArticleCardDate>{createdAt}</S.ArticleCardDate>
      <S.ArticleCardTitle>{title}</S.ArticleCardTitle>
      <S.ArticleCardAbstract>{content}</S.ArticleCardAbstract>
      <S.ArticleCardStatistics>
        <S.ArticleCardStatisticItem>
          <Ai.AiFillEye />
          <span>{visits}</span>
        </S.ArticleCardStatisticItem>
        <S.ArticleCardStatisticItem>
          <Ai.AiFillHeart />
          <span>{likes}</span>
        </S.ArticleCardStatisticItem>
      </S.ArticleCardStatistics>

      <S.ArticleCardActionButton to={`/articulo/${_id}`}>
        Leer
      </S.ArticleCardActionButton>
    </S.ArticleCardContent>
  </S.StyledArticleCard>
);

export const LatestArticleCard = ({ _id, cover, title, content, ...rest }) => (
  <S.StyledLatestArticleCard {...rest}>
    <S.LatestArticleCardImage>
      <img src={cover} alt={title} />
    </S.LatestArticleCardImage>

    <S.LatestArticleTitle>{title}</S.LatestArticleTitle>
    <S.LatestArticleAbstract>{content}</S.LatestArticleAbstract>

    <S.LatestArticleActionButton size="small" to={`/articulo/${_id}`} block>
      Leer Más
    </S.LatestArticleActionButton>
  </S.StyledLatestArticleCard>
);
