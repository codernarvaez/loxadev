import { Card, FlexRow } from "components";
import styled from "styled-components";

export const StyledList = styled.div`
  outline: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledListItem = styled(Card)`
  padding: 15px 10px;
  box-shadow: 0px 1px 5px ${({ theme }) => theme.bg.shadow};
`;

export const StyledItemActions = styled(FlexRow)`
  gap: 15px;
`;
