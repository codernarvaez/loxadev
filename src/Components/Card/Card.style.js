import styled from "styled-components";

export const StyledCard = styled.div`
  box-shadow: 0px 3px 10px ${({ theme }) => theme.bg.shadow};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bg.card};
  background-clip: padding-box;
  flex: none;
`;
