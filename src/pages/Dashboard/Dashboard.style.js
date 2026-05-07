import styled from "styled-components";
import { SCREENS } from "utils/constants";

export const StyledDashboard = styled.div`
  position: relative;
`;

export const DashboardContent = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  padding: 25px 36px 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${SCREENS.md}) {
    padding: 18px 16px 26px 216px;
  }

  @media (min-width: ${SCREENS.xl}) {
    padding: 18px 36px 26px 236px;
  }
`;

export const DashboardBody = styled.div`
  margin: 25px 0 60px;
`;
