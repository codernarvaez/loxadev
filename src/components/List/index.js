import React from "react";
import * as S from "./List.style";
import { IconButton, FilledIconButton } from "components";

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

export const ListActions = ({ actions = [], ...rest }) => {
  return (
    <S.StyledListActions {...rest}>
      {actions.map((action, key) => (
        <FilledIconButton
          key={key}
          onClick={action.onClick}
          title={action.title}
        >
          <action.icon />
        </FilledIconButton>
      ))}
    </S.StyledListActions>
  );
};
export * from "./TagItem";
export * from "./ArticleItem";
