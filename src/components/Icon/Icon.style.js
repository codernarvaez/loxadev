import styled from "styled-components";

export const StyledSocialIcon = styled.a`
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

export const StyledSocialIconAlt = styled.a`
  cursor: pointer;
  color: ${({ theme, color }) =>
    color ? theme.text[color] : theme.text.default};
  transition: color 300ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.text.icon};
  }
`;

export const StyledSocialIconFilled = styled.a`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.bg.secondary};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 200ms ease-in-out;
  color: ${({ theme }) => theme.text.bg};

  &:hover {
    background-color: ${({ theme }) => theme.bg.main};
  }

  svg {
    font-size: 16px;
  }
`;
