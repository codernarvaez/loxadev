import React from "react";
import * as S from "./Sidebar.style";
import LogoBlackImg from "assets/images/logo-black.svg";
import { NavItem, SidebarNav } from "components";
import { NavItemIcon, NavItemName } from "components/Navbar/Navbar.style";
import * as Bi from "react-icons/bi";

export const Sidebar = ({ navigation = [] }) => {
  return (
    <S.StyledSidebar>
      <S.SidebarLogo to="/panel">
        <img src={LogoBlackImg} alt="Loxadev" />
      </S.SidebarLogo>

      <SidebarNav navigation={navigation} />

      <NavItem to="/">
        <NavItemIcon>
          <Bi.BiLogOut />
        </NavItemIcon>
        <NavItemName>Salir</NavItemName>
      </NavItem>
    </S.StyledSidebar>
  );
};
