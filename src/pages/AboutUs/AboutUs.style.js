import styled from "styled-components";
import { Card, P, SectionLead } from "components";
import { SCREENS } from "utils/constants";

export const AboutUsTopCard = styled(Card)`
  padding: 30px 20px 40px;
  margin-top: -150px;
  position: relative;

  @media (min-width: ${SCREENS.xl}) {
    margin-top: -50px;
    padding: 40px 76px;
  }
`;

export const TopCardLead = styled(SectionLead)`
  color: ${({ theme }) => theme.text.main};
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  font-weight: 400;

  @media (min-width: ${SCREENS.md}) {
    width: 388px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 680px;
  }
`;

export const TopCardAbstract = styled(P)`
  margin-top: 28px;
  text-align: center;
  font-weight: 300;

  @media (min-width: ${SCREENS.xl}) {
    width: 460px;
    display: inline-block;
    margin-top: 0px;
    text-align: left;
  }
`;

export const TopCardTeamImage = styled.div`
  margin-top: 16px;
  height: 165px;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 460px;
    display: inline-block;
    margin-left: 16px;
  }
`;

export const MissionVisionSection = styled.section`
  margin: 40px auto;
  max-width: 700px;
`;

export const MissionVisionCards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;

  @media (min-width: ${SCREENS.md}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 44px;
  }
`;

export const TeamSection = styled.section`
  background-color: ${({ theme }) => theme.bg.card};
  padding: 40px 0px;
`;

export const TeamCards = styled.div`
  max-width: 936px;
  margin: 0 auto;
  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;

  @media (min-width: ${SCREENS.md}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 50px;
  }

  @media (min-width: ${SCREENS.xl}) {
    grid-template-columns: 1fr 1fr 1fr;
  } */
`;
