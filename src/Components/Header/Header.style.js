import { H1, Lead } from "components/Typography";
import styled from "styled-components";
import { SCREENS } from "utils/constants";

export const StyledHeader = styled.header`
  margin-top: 4.25rem;
  margin-bottom: 2.875rem;

  @media (min-width: ${SCREENS.md}) {
    margin-top: 3rem;
  }

  @media (min-width: ${SCREENS.xl}) {
    margin-left: 5.75rem;
    margin-right: 5.75rem;
  }
`;

export const Title = styled(H1)`
  font-size: 2.25rem;
  color: ${({ theme }) => theme.text.main};

  @media (min-width: ${SCREENS.md}) {
    font-size: 3rem;
  }
`;

export const Description = styled(Lead)`
  margin-top: 0.875rem;

  @media (min-width: ${SCREENS.md}) {
    max-width: 34.5rem;
  }
`;

export const StyledDashboardHeader = styled.header``;

export const DashboardTitle = styled(H1)`
  font-size: 24px;
  font-weight: 500;
`;
