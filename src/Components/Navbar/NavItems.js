import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "utils/constants";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
  ${tw`
        flex
        list-none
        h-8 md:h-11
        items-center
        gap-14
    `}
`;

const NavItem = styled.li`
  ${tw`
        text-sm
        md:text-base
        text-loxadev-dark
        font-medium
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-loxadev-primary
    `}

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
      hover:text-loxadev-light-blue
    `}
    `}
`;

export const NavItems = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.lg });

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <a href="#app">Blog</a>
          </NavItem>

          <NavItem menu>
            <a href="#app">Nosotros</a>
          </NavItem>

          <NavItem menu>
            <a href="#app">Servicios</a>
          </NavItem>

          <NavItem menu>
            <a href="#app">Productos</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem>
        <a href="#app">Blog</a>
      </NavItem>

      <NavItem>
        <a href="#app">Nosotros</a>
      </NavItem>

      <NavItem>
        <a href="#app">Servicios</a>
      </NavItem>

      <NavItem>
        <a href="#app">Productos</a>
      </NavItem>
    </ListContainer>
  );
};
