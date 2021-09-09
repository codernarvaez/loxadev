import { H1, Lead } from "components/Typography";
import { Wrapper } from "components/Wrapper";
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

export const StyledCoverHeader = styled.header`
  height: 250px;
  width: 100%;
  margin-top: 70px;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: brightness(50%);
  }

  @media (min-width: ${SCREENS.md}) {
    margin-top: 50px;
  }
`;

export const CoverHeaderContent = styled(Wrapper)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100%;

  @media (min-width: ${SCREENS.md}) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const CoverHeaderTitle = styled(H1)`
  color: ${({ theme }) => theme.text.alt};
  font-size: 36px;
  font-weight: 500;
`;

export const CoverHeaderLead = styled(Lead)`
  color: ${({ theme }) => theme.text.bg};
  font-size: 1rem;
  font-weight: 300;
  margin-top: -10px;
  max-width: 460px;
`;
