import React from "react";
import * as S from "./Badge.style";

export const Badge = ({ children, ...rest }) => {
  return <S.StyledBadge {...rest}>{children}</S.StyledBadge>;
};

export const DangerBadge = ({ children, ...rest }) => {
  return <S.StyledDangerBadge {...rest}>{children}</S.StyledDangerBadge>;
};

export const SuccessBadge = ({ children, ...rest }) => {
  return <S.StyledSuccessBadge {...rest}>{children}</S.StyledSuccessBadge>;
};
