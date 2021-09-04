import { Badge } from "components/Badge";
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

export const StyledSidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 70px;
  height: 100%;
`;

export const StyledNavItem = styled(Link)`
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  padding: 15px 5px 15px 20px;
  box-sizing: border-box;
  border-left: 2px solid
    ${({ theme, active }) =>
      active === "true" ? theme.bg.primary : "transparent"};
  background-color: ${({ theme, active }) =>
    active === "true" ? theme.bg.default : "transparent"};

  &:hover {
    background-color: ${({ theme }) => theme.bg.default};
    border-left: 2px solid ${({ theme }) => theme.bg.primary};
  }
`;

export const NavItemIcon = styled.span`
  display: flex;
  font-size: 25px;
  margin-right: 15px;
  color: ${({ theme }) => theme.text.secondary};
`;

export const NavItemName = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const NavItemBadge = styled(Badge)`
  padding: 1px 3px;
  font-size: 10px;
  margin-left: 5px;
`;
