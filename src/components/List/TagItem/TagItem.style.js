import { Bold, FlexCol, P, Span } from "components";
import styled from "styled-components";
import { SCREENS } from "utils/constants";

export const StyledTagItem = styled.div`
  display: grid;
  row-gap: 10px;
  grid-template-areas:
    "tag-name"
    "tag-description"
    "tag-timestamps"
    "badge"
    "item-actions";
  justify-items: center;

  @media (min-width: ${SCREENS.md}) {
    align-items: center;
    row-gap: 0;
    column-gap: 10px;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "tag-name tag-timestamps badge item-actions"
      "tag-description tag-timestamps badge item-actions";
  }
`;

export const TagName = styled(Bold)`
  grid-area: tag-name;

  @media (min-width: ${SCREENS.md}) {
    justify-self: flex-start;
  }
`;

export const TagDescription = styled(P)`
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  grid-area: tag-description;

  @media (min-width: ${SCREENS.md}) {
    -webkit-line-clamp: 3;
  }
`;

export const Timestamps = styled(FlexCol)`
  width: 100%;
  gap: 2px;
  grid-area: tag-timestamps;
`;

export const CreatedAtDate = styled(Span)`
  font-size: 12px;
  font-weight: 300;

  span {
    font-weight: 400;
  }
`;

export const UpdatedAtDate = styled(CreatedAtDate)``;
