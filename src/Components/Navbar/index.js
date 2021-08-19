import React from "react";
import styled from "styled-components";
import { Logo } from "components/Logo";
import { NavItems } from "components/Navbar/NavItems";
import { Button } from "components/Button";
import { Wrapper } from "components/Wrapper";
import { SCREENS } from "utils/constants";
import { FlexRow } from "components/Flex";

const NavbarContainer = styled(FlexRow)`
  min-height: 80px;
  align-items: flex-end;
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
