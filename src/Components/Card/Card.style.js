import styled from "styled-components";

export const StyledCard = styled.div`
  box-shadow: 0px 5px 10px ${({ theme }) => theme.bg.shadow};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bg.card};
  width: 100%;
  max-width: 100%;
  background-clip: padding-box;
  flex: none;
`;
