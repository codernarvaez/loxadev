import styled from "styled-components";
import { SCREENS } from "utils/constants";

export const OurProductsSection = styled.section`
  margin: 30px 0px;

  @media (min-width: ${SCREENS.md}) {
    margin-top: 40px;
  }
`;

export const ProductCards = styled.div`
  max-width: 700px;
  margin: 30px auto 0px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 30px;

  @media (min-width: ${SCREENS.xl}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 44px;
    row-gap: 20px;
  }
`;
