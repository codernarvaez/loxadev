import React from "react";
import * as FA from "react-icons/fa";
import { SocialIconAlt, Link, Wrapper } from "components";
import {
  Content,
  Copyright,
  Nav,
  NavItem,
  NavItemLink,
  SocialContainer,
  StyledFooter,
  Logo,
  StyledDashboardFooter,
  DashboardCopyright,
} from "components/Footer/Footer.style";

import LogoWhite from "assets/images/logo-white.svg";

export const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <Content>
          <Nav>
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
          </Nav>

          <SocialContainer>
            <SocialIconAlt
              color="bg"
              href="https://www.facebook.com/LoxaDev"
              target="_blank"
            >
              <FA.FaFacebookF />
            </SocialIconAlt>

            <SocialIconAlt
              color="bg"
              href="https://twitter.com/LoxaDev"
              target="_blank"
            >
              <FA.FaTwitter />
            </SocialIconAlt>

            <SocialIconAlt
              color="bg"
              href="https://www.instagram.com/loxadev"
              target="_blank"
            >
              <FA.FaInstagram />
            </SocialIconAlt>

            <SocialIconAlt
              color="bg"
              href="https://t.me/LoxaDev"
              target="_blank"
            >
              <FA.FaTelegramPlane />
            </SocialIconAlt>
          </SocialContainer>

          <Logo>
            <Link to="/">
              <img src={LogoWhite} alt="Loxadev" />
            </Link>
          </Logo>

          <Copyright>&copy; {new Date().getFullYear()} Loxadev</Copyright>
        </Content>
      </Wrapper>
    </StyledFooter>
  );
};

export const DashboardFooter = () => (
  <StyledDashboardFooter>
    <DashboardCopyright>
      &copy; {new Date().getFullYear()} Loxadev
    </DashboardCopyright>

    <SocialContainer>
      <SocialIconAlt href="https://www.facebook.com/LoxaDev" target="_blank">
        <FA.FaFacebookF />
      </SocialIconAlt>

      <SocialIconAlt href="https://twitter.com/LoxaDev" target="_blank">
        <FA.FaTwitter />
      </SocialIconAlt>

      <SocialIconAlt href="https://www.instagram.com/loxadev" target="_blank">
        <FA.FaInstagram />
      </SocialIconAlt>
    </SocialContainer>
  </StyledDashboardFooter>
);
