import React from "react";
import * as S from "./List.style";
import { IconButton } from "components";

export const List = ({ children, ...rest }) => {
  return <S.StyledList {...rest}>{children}</S.StyledList>;
};

export const Listitem = ({ children, ...rest }) => (
  <S.StyledListItem {...{ ...rest }}>{children}</S.StyledListItem>
);

export const ItemActions = ({ actions = [], ...rest }) => {
  return (
    <S.StyledItemActions {...rest}>
      {actions.map((action, key) => (
        <IconButton key={key} onClick={action.onClick} title={action.title}>
          <action.icon />
        </IconButton>
      ))}
    </S.StyledItemActions>
  );
};

export * from "./TagItem";
