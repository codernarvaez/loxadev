import styled from "styled-components";

export const StyledBadge = styled.span`
  grid-area: badge;
  padding: 5px 20px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 3px 5px ${({ theme }) => theme.bg.shadow};
  color: ${({ theme }) => theme.text.default};
  background-color: ${({ color, theme }) => theme.bg[color]};
`;

export const StyledDangerBadge = styled(StyledBadge)`
  background-color: ${({ theme }) => theme.bg.danger};
  color: ${({ theme }) => theme.text.alt};
`;

export const StyledSuccessBadge = styled(StyledBadge)`
  background-color: ${({ theme }) => theme.bg.success};
`;
