import { Bold, FlexCol, P, Span } from "components";
import styled from "styled-components";

export const StyledTagItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const TagName = styled(Bold)``;

export const TagDescription = styled(P)`
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Timestams = styled(FlexCol)`
  justify-content: flex-start;
  gap: 2px;
`;

export const CreatedAtDate = styled(Span)`
  font-size: 12px;
  font-weight: 300;
`;

export const UpdatedAtDate = styled(CreatedAtDate)``;
