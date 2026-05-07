import styled from "styled-components";
import { SCREENS } from "utils/constants";

export const OurServicesSection = styled.section`
  margin: 30px 0px;

  @media (min-width: ${SCREENS.md}) {
    margin-top: 40px;
  }
`;

export const ServicesCards = styled.div`
  max-width: 700px;
  margin: 30px auto 0px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;

  @media (min-width: ${SCREENS.md}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 44px;
    row-gap: 30px;
  }

  @media (min-width: ${SCREENS.xl}) {
    column-gap: 90px;
  }
`;
