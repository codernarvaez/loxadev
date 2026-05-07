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
            <NavItemLink to="/blog" menu={"true"}>
              Blog
            </NavItemLink>
          </NavItem>

          <NavItem>
            <NavItemLink to="/nosotros" menu={"true"}>
              Nosotros
            </NavItemLink>
          </NavItem>

          <NavItem>
            <NavItemLink to="/servicios" menu={"true"}>
              Servicios
            </NavItemLink>
          </NavItem>

          <NavItem>
            <NavItemLink to="/productos" menu={"true"}>
              Productos
            </NavItemLink>
          </NavItem>

          <NavItem>
            <NavItemLink to="/contactanos" menu={"true"}>
              Contáctanos
            </NavItemLink>
          </NavItem>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem>
        <NavItemLink to="/blog">Blog</NavItemLink>
      </NavItem>

      <NavItem>
        <NavItemLink to="/nosotros">Nosotros</NavItemLink>
      </NavItem>

      <NavItem>
        <NavItemLink to="/servicios">Servicios</NavItemLink>
      </NavItem>

      <NavItem>
        <NavItemLink to="/productos">Productos</NavItemLink>
      </NavItem>
    </ListContainer>
  );
};
