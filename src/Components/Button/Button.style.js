import { Link } from "react-router-dom";
import styled from "styled-components";

export const A = styled.a`
  display: flex;
  align-items: center;
  flex: none;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex: none;
  align-items: center;
`;

export const StyledButton = styled.button`
  border-radius: 10px;
  font-size: ${({ size }) => (size === "small" ? "14px" : "16px")};
  padding: ${({ size }) => (size === "small" ? "10px 16px" : "14px 20px")};
  color: ${({ theme }) => theme.text.alt};
  background: ${({ theme }) => theme.bg.primary};
  font-weight: 500;
  transition: all 200ms ease-in-out;
  border-color: transparent;
  border-width: 2px;
  cursor: pointer;
  border-style: solid;
  width: ${({ block }) => (block ? "100%" : "auto")};

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.text.primary};
    border-color: ${({ theme }) => theme.text.primary};
  }
`;

export const StyledOutlineButton = styled(StyledButton)`
  border-color: ${({ theme }) => theme.text.primary};
  color: ${({ theme }) => theme.text.primary};
  background: transparent;

  &:hover {
    background: ${({ theme }) => theme.bg.primary};
    color: ${({ theme }) => theme.text.alt};
    border-color: transparent;
  }
`;

export const StyledIconButton = styled(StyledButton)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text.default};
  background-color: transparent;
  border: 0;
  padding: 0;
  font-size: ${({ size }) => (size === "small" ? "18px" : "22px")};

  &:hover {
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const StyledFilledIconButton = styled(StyledIconButton)`
  padding: 6px;
  background-color: ${({ theme }) => theme.bg.white};
  color: ${({ theme }) => theme.text.secondary};
  box-shadow: 0px 3px 5px ${({ theme }) => theme.bg.shadow};

  &:hover {
    color: ${({ theme }) => theme.text.default};
    background-color: ${({ theme }) => theme.bg.icon};
  }
`;
