import { P } from "components/Typography";
import styled from "styled-components";
import { SCREENS } from "utils/constants";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  button[type="submit"] {
    margin-top: 20px;
    @media (min-width: ${SCREENS.md}) {
      align-self: center;
    }
  }
`;

export const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-bottom: 15px;
  width: 100%;
`;

export const StyledFormFeedback = styled(P)`
  color: ${({ theme }) => theme.text.danger};
  font-size: 0.75rem;
  margin-top: 12px;
`;

export const StyledFormHelper = styled(StyledFormFeedback)`
  color: ${({ theme }) => theme.text.secondary};
`;

export const FormInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${FormGroup} {
    width: 100%;
  }

  @media (min-width: ${SCREENS.xl}) {
    ${FormGroup} {
      width: calc(100% / 2 - 1.25rem);
    }
  }
`;
