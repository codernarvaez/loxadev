import styled from "styled-components";
import { styledInputBase } from "components/globals";
import { Label } from "components/Form";

export const StyledTextArea = styled.textarea`
  ${styledInputBase}

  &:placeholder-shown ~ ${Label} {
    color: ${({ theme, invalid }) => invalid && theme.text.danger};
  }
`;
