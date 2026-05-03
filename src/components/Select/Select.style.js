import styled from "styled-components";
import Select from "react-select";

export const StyledSelect = styled(Select).withConfig({
  shouldForwardProp: (prop) => !['invalid'].includes(prop),
})`
  font-size: 0.75rem;

  .react-select__control {
    height: 40px;
    width: 100%;
    border: 0;
    border-bottom: 1px solid
      ${({ theme, invalid }) =>
        invalid ? theme.text.danger : theme.text.secondary};
    border-radius: 0;
    cursor: pointer;
  }

  .react-select__control:hover {
    border-image: linear-gradient(
      to right,
      ${({ theme, invalid }) =>
        invalid ? theme.text.danger : theme.text.primary},
      ${({ theme }) => theme.text.secondary}
    );
    border-image-slice: 1;
  }

  .react-select__control--is-focused {
    border: 0;
    outline: none;
  }

  .react-select__menu {
    color: ${({ theme }) => theme.text.main};
  }
`;
