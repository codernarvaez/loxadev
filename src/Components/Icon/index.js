import React from "react";
import * as S from "./Icon.style";

export const SocialIcon = (props) => (
  <S.StyledSocialIcon {...props}>{props.children}</S.StyledSocialIcon>
);

export const SocialIconAlt = (props) => (
  <S.StyledSocialIconAlt {...props}>{props.children}</S.StyledSocialIconAlt>
);

export const SocialIconFilled = (props) => (
  <S.StyledSocialIconFilled {...props}>
    {props.children}
  </S.StyledSocialIconFilled>
);
