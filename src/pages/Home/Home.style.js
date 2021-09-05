import styled from "styled-components";
import { FlexCol, FlexRow, H1, Lead } from "components";
import { SCREENS } from "utils/constants";

export const TopSectionContainer = styled.div`
  position: relative;
  margin-bottom: 60px;
`;

export const Hero = styled(FlexCol)`
  flex-direction: column-reverse;

  @media (min-width: ${SCREENS.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Content = styled(FlexCol)`
  flex: 1 1 0%;

  @media (min-width: ${SCREENS.md}) {
    flex: none;
    width: 70%;
    align-items: flex-start;
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 50%;
  }
`;

export const Title = styled(H1)`
  font-size: 40px;
  text-align: center;
  color: ${({ theme }) => theme.text.main};

  @media (min-width: ${SCREENS.md}) {
    font-size: 48px;
    text-align: left;
  }

  span {
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const Description = styled(Lead)`
  text-align: center;
  margin: 28px 0 36px 0;

  @media (min-width: ${SCREENS.md}) {
    text-align: left;
  }

  @media (min-width: ${SCREENS.xl}) {
    margin: 32px 0 48px 0;
  }
`;

export const SocialContainer = styled(FlexRow)`
  justify-content: center;
  margin-top: 32px;
  gap: 1rem;

  @media (min-width: ${SCREENS.xl}) {
    margin-top: 96px;
  }
`;

export const ImageContainer = styled(FlexRow)`
  padding: 25px 0;
  justify-content: center;
  flex: 1 1 0%;
  z-index: 100;
  width: 100%;

  @media (min-width: ${SCREENS.md}) {
    margin: 0 1rem;
  }

  @media (min-width: ${SCREENS.xl}) {
    margin: 0 40px;
  }
`;

export const Image = styled.img`
  height: 150px;
  width: 100%;
  border-radius: 20px;
  object-fit: cover;

  @media (min-width: ${SCREENS.md}) {
    height: 500px;
  }

  @media (min-width: ${SCREENS.xl}) {
    height: 490px;
    width: 440px;
  }
`;

export const RoundedShape = styled.div`
  display: none;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bg.icon};
  border-radius: 1.5rem;
  position: absolute;
  height: 8rem;
  width: 8rem;
  bottom: -2.5rem;
  right: 28rem;
  z-index: 200;

  @media (min-width: ${SCREENS.xl}) {
    display: block;
  }
`;

export const RoundedShapeSmall = styled(RoundedShape)`
  height: 6rem;
  width: 6rem;
  top: 0;
  right: 50px;
  z-index: 0;
`;
