import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "components/Logo";
import { NavItems } from "components/Navbar/NavItems";
import { Button } from "components/Button";
import { Wrapper } from "components/Wrapper";

const NavbarContainer = styled.div`
  min-height: 80px;
  ${tw`
    flex
    flex-row
    items-end
    justify-between
  `}
`;

const ButtonContainer = styled.div`
  ${tw`
    hidden
    md:inline mr-2.5
    lg:order-1
    xl:mr-14
  `}
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
