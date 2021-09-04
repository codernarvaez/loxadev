import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";

import { SCREENS } from "utils/constants";
import {
  ListContainer,
  NavItem,
  NavItemLink,
} from "components/Navbar/Navbar.style";
import menuStyles from "./menuStyles";

export const NavItems = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.lg });

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem>
            <NavItemLink to="#app" menu={"true"}>
              Blog
            </NavItemLink>
          </NavItem>

          <NavItem>
            <NavItemLink to="/nosotros" menu={"true"}>
              Nosotros
            </NavItemLink>
          </NavItem>

          <NavItem>
            <NavItemLink to="#app" menu={"true"}>
              Servicios
            </NavItemLink>
          </NavItem>

          <NavItem>
            <NavItemLink to="#app" menu={"true"}>
              Productos
            </NavItemLink>
          </NavItem>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem>
        <NavItemLink to="#app">Blog</NavItemLink>
      </NavItem>

      <NavItem>
        <NavItemLink to="#app">Nosotros</NavItemLink>
      </NavItem>

      <NavItem>
        <NavItemLink to="#app">Servicios</NavItemLink>
      </NavItem>

      <NavItem>
        <NavItemLink to="#app">Productos</NavItemLink>
      </NavItem>
    </ListContainer>
  );
};
