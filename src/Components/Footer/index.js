import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Wrapper } from "components/Wrapper";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import LogoWhite from "assets/images/logo-white.svg";
import { SCREENS } from "utils/constants";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  ${tw`
        bg-loxadev-dark
        text-loxadev-ligth-gray
        py-6
    `}
`;

const Content = styled.div`
  ${tw`
        grid
        grid-cols-1
        gap-8
        md:grid-cols-2
    `}
`;

const Nav = styled.ul`
  ${tw`
        flex
        flex-col
        list-none
        items-center
        gap-7
        md:flex-row
    `}
`;

const NavItem = styled.li`
  ${tw`
        text-sm
        md:text-sm
        font-light
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-loxadev-light-blue
    `}
`;

const SocialContainer = styled.div`
  ${tw`
        flex
        gap-5
        items-center
        justify-center
        md:justify-end
    `}
`;

const SocialIcon = styled.span`
  ${tw`
    cursor-pointer
    hover:text-loxadev-light-blue
    `}
`;

const Logo = styled.div`
  width: auto;
  ${tw`
    h-8 md:h-11
  `};

  img {
    margin: auto;
    width: auto;
    height: 100%;

    @media (min-width: ${SCREENS.md}) {
      margin: 0;
    }
  }
`;

const Copyright = styled.p`
  ${tw`
        text-center
        text-sm
        md:my-auto
        md:text-right
    `}
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <Content>
          <Nav>
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
          </Nav>

          <SocialContainer>
            <SocialIcon>
              <FontAwesomeIcon icon={faFacebookF} />
            </SocialIcon>
            <SocialIcon>
              <FontAwesomeIcon icon={faTwitter} />
            </SocialIcon>
            <SocialIcon>
              <FontAwesomeIcon icon={faInstagram} />
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
    </FooterContainer>
  );
};
