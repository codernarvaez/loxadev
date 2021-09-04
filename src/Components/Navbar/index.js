import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "components/Logo";
import { NavItems } from "components/Navbar/NavItems";
import { Button } from "components/Button";
import { Wrapper } from "components/Wrapper";
import { SCREENS } from "utils/constants";
import { FlexRow } from "components/Flex";
import {
  NavItemBadge,
  NavItemIcon,
  NavItemName,
  StyledNavItem,
  StyledSidebarNav,
} from "components/Navbar/Navbar.style";

const NavbarContainer = styled(FlexRow)`
  min-height: 80px;
  align-items: flex-end;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: none;

  @media (min-width: ${SCREENS.lg}) {
    display: inline;
    order: 1;
    margin-right: 3.75rem;
  }
`;

export const Navbar = () => {
  return (
    <Wrapper>
      <NavbarContainer>
        <Logo />
        <ButtonContainer>
          <Button>¡Contáctanos!</Button>
        </ButtonContainer>
        <NavItems />
      </NavbarContainer>
    </Wrapper>
  );
};

export const SidebarNav = ({ navigation = [], ...rest }) => {
  const navLink = (name, icon, badge) => {
    const Icon = icon;
    return (
      <>
        {icon && (
          <NavItemIcon>
            <Icon />
          </NavItemIcon>
        )}
        {name && <NavItemName>{name}</NavItemName>}
        {badge && <NavItemBadge color={badge.color}>{badge.text}</NavItemBadge>}
      </>
    );
  };

  const navItem = (item, index) => {
    const { component, name, badge, icon, ...rest } = item;
    const Component = component;
    return (
      <Component
        // {...(rest.to &&
        //   !rest.items && {
        //     component: NavLink,
        //     activeClassName: "active",
        //   })}
        key={index}
        {...rest}
      >
        {navLink(name, icon, badge)}
      </Component>
    );
  };

  const navGroup = (item, index) => {
    const { component, name, icon, to, ...rest } = item;
    const Component = component;
    return (
      <Component
        idx={String(index)}
        key={index}
        toggler={navLink(name, icon)}
        // visible={location.pathname.startsWith(to)}
        {...rest}
      >
        {item.items?.map((item, index) =>
          // item.items ? navGroup(item, index) : navItem(item, index)
          navItem(item, index)
        )}
      </Component>
    );
  };

  return (
    <StyledSidebarNav {...rest}>
      {navigation.map((item, key) =>
        item.items ? navGroup(item, key) : navItem(item, key)
      )}
    </StyledSidebarNav>
  );
};

export const NavItem = ({ children, ...rest }) => {
  const pathname = useLocation().pathname;

  return (
    <StyledNavItem {...rest} active={pathname === rest.to ? "true" : "false"}>
      {children}
    </StyledNavItem>
  );
};
