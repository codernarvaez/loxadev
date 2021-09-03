import styled from "styled-components";

export const StyledBadge = styled.span`
  padding: 5px 20px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 5px;
  overflow: hidden;
  color: ${({ theme }) => theme.text.default};
`;

export const StyledDangerBadge = styled(StyledBadge)`
  background-color: ${({ theme }) => theme.bg.danger};
  color: ${({ theme }) => theme.text.alt};
`;

export const StyledSuccessBadge = styled(StyledBadge)`
  background-color: ${({ theme }) => theme.bg.success};
`;
