import { Link } from "components";
import styled from "styled-components";
import { SCREENS } from "utils/constants";

export const StyledSidebar = styled.aside`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  /* height: 100vh; */
  height: 100%;
  width: 200px;
  background-color: ${({ theme }) => theme.bg.card};
  z-index: 100;

  @media (min-width: ${SCREENS.md}) {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
`;

export const SidebarLogo = styled(Link)`
  align-self: center;
  margin-top: 25px;
  height: 40px;
  width: auto;

  img {
    height: 100%;
    width: 100%;
  }
`;
