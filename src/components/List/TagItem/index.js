import React, { memo } from "react";
import { ItemActions, Listitem } from "components";
import * as S from "./TagItem.style";
import { DangerBadge, SuccessBadge } from "components/Badge";
import * as Fa from "react-icons/fa";
import * as Md from "react-icons/md";

const actions = [
  { icon: Md.MdModeEdit, title: "Modificar", onClick: () => {} },
  { icon: Fa.FaTrash, title: "Eliminar", onClick: () => {} },
];

export const TagItem = memo(
  ({ name, description, status, createdAt, updatedAt, ...rest }) => {
    return (
      <Listitem>
        <S.StyledTagItem {...rest}>
          <S.TagName>{name}</S.TagName>

          <S.TagDescription>{description}</S.TagDescription>

          <S.Timestamps>
            <S.CreatedAtDate>
              <span>Creado el</span> {createdAt}
            </S.CreatedAtDate>
            <S.UpdatedAtDate>
              <span>Modificado el</span> {updatedAt}
            </S.UpdatedAtDate>
          </S.Timestamps>

          {status ? (
            <SuccessBadge>Activa</SuccessBadge>
          ) : (
            <DangerBadge>Inactiva</DangerBadge>
          )}

          <ItemActions actions={actions} />
        </S.StyledTagItem>
      </Listitem>
    );
  }
);
