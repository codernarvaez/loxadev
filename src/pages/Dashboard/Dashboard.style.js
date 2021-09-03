import styled from "styled-components";
import { SCREENS } from "utils/constants";

export const DashboardContent = styled.div`
  outline: 1px solid red;
  padding: 25px 36px 20px;

  @media (min-width: ${SCREENS.md}) {
    padding: 18px 16px 26px;
  }

  @media (min-width: ${SCREENS.xl}) {
    padding: 18px 36px 26px;
  }
`;

export const DashboardBody = styled.div`
  outline: 1px solid green;
  margin: 25px 0 60px;
`;
