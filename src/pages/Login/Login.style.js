import { Card, H5, Lead, Wrapper } from "components";
import styled from "styled-components";
import { SCREENS } from "utils/constants";

export const LoginContainer = styled(Wrapper)`
  position: relative;
  margin-top: 90px;
  margin-bottom: 90px;

  @media (min-width: ${SCREENS.md}) {
    margin-top: 70px;
    margin-bottom: 70px;
  }
`;

export const LoginCard = styled(Card)`
  padding: 20px 36px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 486px;
  margin: auto;

  @media (min-width: ${SCREENS.md}) {
    padding: 20px 65px 30px;
  }
`;

export const CardLogo = styled.div`
  height: 25px;
  width: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CardTitle = styled(H5)`
  margin-top: 16px;
`;

export const CardLead = styled(Lead)`
  font-weight: 300;
  font-size: 14px;
  text-align: center;
  margin-bottom: 30px;
`;

export const LoginShapeLarge = styled.span`
  overflow: hidden;
  background-color: ${({ theme }) => theme.bg.icon};
  border-radius: 1.25rem;
  position: absolute;
  height: 100px;
  width: 100px;
  bottom: -3.8rem;
  left: 0rem;
  z-index: -100;

  @media (min-width: ${SCREENS.md}) {
    left: 4.5rem;
    bottom: -2rem;
  }
  @media (min-width: ${SCREENS.xl}) {
    left: 19rem;
  }
`;

export const LoginShapeSmall = styled(LoginShapeLarge)`
  left: initial;
  top: -2.6rem;
  right: 0;
  z-index: -100;
  height: 65px;
  width: 65px;

  @media (min-width: ${SCREENS.md}) {
    top: -1.5rem;
    right: 4.5rem;
  }

  @media (min-width: ${SCREENS.xl}) {
    right: 19.5rem;
  }
`;
