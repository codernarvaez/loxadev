import { Link, P } from "components/Typography";
import styled from "styled-components";
import { SCREENS } from "utils/constants";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.bg.main};
  color: ${({ theme }) => theme.text.bg};
  padding: 20px 0;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 35px;
  align-items: center;

  @media (min-width: ${SCREENS.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  gap: 30px;
  padding: 0;
  margin: 0;

  @media (min-width: ${SCREENS.md}) {
    flex-direction: row;
  }
`;

export const NavItem = styled.li`
  font-size: 14px;
`;

export const NavItemLink = styled(Link)`
  color: ${({ theme }) => theme.text.bg};

  &:hover {
    color: ${({ theme }) => theme.text.icon};
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;

  @media (min-width: ${SCREENS.md}) {
    justify-self: flex-end;
  }
`;

export const Logo = styled.div`
  height: 50px;
  justify-self: center;
  width: auto;
  user-select: none;

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    justify-self: start;
  }
`;

export const Copyright = styled(P)`
  color: ${({ theme }) => theme.text.bg};
  text-align: center;
  font-size: 0.875rem;
  font-weight: 300;

  @media (min-width: ${SCREENS.md}) {
    justify-self: flex-end;
  }
`;

export const StyledDashboardFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: auto;

  @media (min-width: ${SCREENS.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DashboardCopyright = styled(Copyright)`
  font-size: 16px;
  color: ${({ theme }) => theme.text.secondary};
`;
