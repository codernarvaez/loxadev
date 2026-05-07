import styled from "styled-components";
import { styledInputBase } from "components/globals";
import { FormGroup, Label } from "components/Form";

export const StyledInput = styled.input`
  ${styledInputBase}
`;

export const StyledToggleWrapper = styled(FormGroup)`
  padding: 0;
`;

export const StyledToggleLabel = styled(Label)`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${({ theme }) => theme.bg.secondary};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: ${({ theme }) => theme.bg.switch};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const StyledToggle = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${StyledToggleLabel} {
    background: ${({ theme }) => theme.bg.primary};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
