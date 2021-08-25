import { Link } from "components/Typography";
import styled, { css } from "styled-components";

export const ListContainer = styled.ul`
  display: flex;
  list-style: none;
  height: 32px;
  align-items: center;
  gap: 56px;
`;

export const NavItem = styled.li`
  font-size: 14px;
  cursor: pointer;
`;

export const NavItemLink = styled(Link)`
  font-weight: 500;

  ${({ menu }) =>
    !!menu &&
    css`
      color: ${({ theme }) => theme.text.alt};
      font-size: 18px;
      margin-bottom: 12px;

      &:focus {
        color: ${({ theme }) => theme.text.icon};
      }

      &:hover {
        color: ${({ theme }) => theme.text.primary};
      }
    `}
`;
