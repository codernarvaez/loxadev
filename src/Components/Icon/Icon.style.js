import styled from "styled-components";

export const StyledSocialIcon = styled.span`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.text.icon};
  border: 2px solid ${({ theme }) => theme.text.icon};
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.bg.icon};
    color: ${({ theme }) => theme.text.default};
  }
`;
