import { Bold, Card, FlexCol, FlexRow, Span } from "components";
import styled from "styled-components";
import { SCREENS } from "utils/constants";

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 42px;

  @media (min-width: ${SCREENS.md}) {
    flex-direction: row;
  }

  @media (min-width: ${SCREENS.xl}) {
    margin-left: 5.75rem;
    margin-right: 5.75rem;
  }
`;

export const FormCard = styled(Card)`
  box-sizing: border-box;
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px 10px 0 0;

  @media (min-width: ${SCREENS.md}) {
    width: 55%;
    justify-content: center;
    padding: 28px 40px;
    border-radius: 10px 0 0 10px;
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 60%;
  }
`;

export const FormCardHeader = styled(FlexRow)`
  margin-bottom: 38px;
  justify-content: space-between;
`;

export const FormCardTitle = styled(Bold)`
  color: ${({ theme }) => theme.text.main};
`;

export const FormCardIcon = styled.span`
  height: 20px;
  color: ${({ theme }) => theme.text.secondary};
`;

export const InfoCard = styled(Card)`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bg.main};
  padding: 28px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  border-radius: 0 0 10px 10px;

  @media (min-width: ${SCREENS.md}) {
    width: 45%;
    border-radius: 0 10px 10px 0;
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 40%;
    align-items: flex-start;
    padding: 1.75rem 2.5rem 2.5rem 2.5rem;
    gap: 44px;
  }
`;

export const InfoCardTitle = styled(Bold)`
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.text.bg};

  @media (min-width: ${SCREENS.xl}) {
    font-size: 16px;
  }
`;

export const InfoCardDetails = styled(FlexCol)`
  gap: 28px;
`;

export const InfoCardItem = styled(FlexRow)`
  justify-content: flex-start;
  gap: 10px;

  @media (min-width: ${SCREENS.xl}) {
    gap: 20px;
  }
`;

export const InfoCardIcon = styled.span`
  color: ${({ theme }) => theme.text.icon};
  height: 16px;
`;

export const InfoCardItemText = styled(Span)`
  color: ${({ theme }) => theme.text.bg};
  font-size: 14px;
  font-weight: 300;

  small {
    display: block;
    font-size: 12px;
  }

  @media (min-width: ${SCREENS.xl}) {
    font-size: 16px;
  }
`;

export const Social = styled(FlexRow)`
  gap: 20px;
  align-self: center;
`;
