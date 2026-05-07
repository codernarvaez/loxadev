import { Card, FlexRow } from "components";
import styled from "styled-components";
import { SCREENS } from "utils/constants";

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledListItem = styled(Card)`
  padding: 15px 10px;
  box-shadow: 0px 1px 5px ${({ theme }) => theme.bg.shadow};

  @media (min-width: ${SCREENS.md}) {
    padding: 15px;
  }

  @media (min-width: ${SCREENS.xl}) {
    padding: 15px 25px;
  }
`;

export const StyledItemActions = styled(FlexRow)`
  gap: 15px;
  grid-area: item-actions;
`;

export const StyledListActions = styled(FlexRow)`
  gap: 10px;
  justify-content: flex-end;
`;
