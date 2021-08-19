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
  border-style: solid;
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
