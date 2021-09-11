import React, { memo } from "react";
import { ItemActions, Listitem } from "components";
import * as Fa from "react-icons/fa";
import * as Md from "react-icons/md";
import * as S from "./ArticleItem.style";
import { Badge, SuccessBadge } from "components/Badge";

export const ArticleItem = memo(
  ({ _id, cover, title, isPublic, createdAt, updatedAt, ...rest }) => {
    const actions = [
      { icon: Md.MdModeEdit, title: "Modificar", onClick: () => {} },
      {
        icon: isPublic ? Fa.FaToggleOn : Fa.FaToggleOff,
        title: isPublic ? "Hacer Borrador" : "Publicar",
        onClick: () => {},
      },
      { icon: Fa.FaTrash, title: "Eliminar", onClick: () => {} },
    ];

    return (
      <Listitem>
        <S.StyledArticleItem {...rest}>
          <S.ArticleCover>
            <img src={cover} alt={title} />
          </S.ArticleCover>

          <S.ArticleTitle>{title}</S.ArticleTitle>

          <S.ArticleTimestamps>
            <S.ArticleCreatedAt>Creado el {createdAt}</S.ArticleCreatedAt>
            <S.ArticleUpdatedAt>Modificado el {updatedAt}</S.ArticleUpdatedAt>
          </S.ArticleTimestamps>

          {isPublic ? (
            <SuccessBadge>Publicado</SuccessBadge>
          ) : (
            <Badge color="info">Borrador</Badge>
          )}

          <ItemActions actions={actions} />
        </S.StyledArticleItem>
      </Listitem>
    );
  }
);
