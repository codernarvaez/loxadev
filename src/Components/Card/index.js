import React from "react";
import * as S from "./Card.style";

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
