import { H6, P, Span } from "components";
import styled from "styled-components";

export const StyledCard = styled.div`
  box-shadow: 0px 3px 10px ${({ theme }) => theme.bg.shadow};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bg.card};
  background-clip: padding-box;
  flex: none;
`;

export const StyledFeatureCard = styled(StyledCard)`
  border-radius: 0;
  padding: 24px 22px 30px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
`;

export const FeatureCardIcon = styled.span`
  color: ${({ theme }) => theme.text.primary};

  svg {
    font-size: 60px;
  }
`;

export const FeatureCardTitle = styled(H6)`
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const FeatureCardText = styled(P)`
  font-weight: 300;
`;

export const StyledTeamCard = styled(StyledFeatureCard)`
  background-color: ${({ theme }) => theme.bg.default};
  padding: 0px;
  margin-top: 30px;
`;

export const TeamCardImage = styled.div`
  width: 100%;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TeamCardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px 20px;
  gap: 5px;
`;

export const TeamCardName = styled(Span)`
  font-weight: 500;
`;

export const TeamCardOccupation = styled(Span)`
  font-weight: 300;
`;
