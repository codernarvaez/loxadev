import styled from "styled-components";

export const StyledSocialIcon = styled.span`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.text.icon};
  border-width: 2px;
  border-color: ${({ theme }) => theme.text.icon};
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
