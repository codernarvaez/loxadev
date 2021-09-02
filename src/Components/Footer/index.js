import React from "react";
import * as FA from "react-icons/fa";

import { Wrapper } from "components/Wrapper";
import LogoWhite from "assets/images/logo-white.svg";
import {
  Content,
  Copyright,
  Nav,
  NavItem,
  NavItemLink,
  SocialContainer,
  SocialIcon,
  StyledFooter,
  Logo,
  StyledDashboardFooter,
  DashboardCopyright,
} from "components/Footer/Footer.style";

import { Link } from "components/Typography";

export const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <Content>
          <Nav>
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
          </Nav>

          <SocialContainer>
            <SocialIcon>
              <FA.FaFacebookF />
            </SocialIcon>
            <SocialIcon>
              <FA.FaTwitter />
            </SocialIcon>
            <SocialIcon>
              <FA.FaInstagram />
            </SocialIcon>
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
      <SocialIcon>
        <FA.FaFacebookF />
      </SocialIcon>
      <SocialIcon>
        <FA.FaTwitter />
      </SocialIcon>
      <SocialIcon>
        <FA.FaInstagram />
      </SocialIcon>
    </SocialContainer>
  </StyledDashboardFooter>
);
