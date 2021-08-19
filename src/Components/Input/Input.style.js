import styled from "styled-components";

export const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 0.75rem;
  color: ${({ theme, invalid }) =>
    invalid ? theme.text.danger : theme.text.secondary};
`;

export const StyledInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid
    ${({ theme, invalid }) =>
      invalid ? theme.text.danger : theme.text.secondary};
  outline: 0;
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.text.main};
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${StyledLabel} {
    font-size: 0.75rem;
    cursor: text;
    top: 25px;
  }

  &:focus {
    & ~ ${StyledLabel} {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 0.75rem;
      color: ${({ theme, invalid }) =>
        invalid ? theme.text.danger : theme.text.primary};
    }
    padding-bottom: 6px;
    font-weight: 300;
    border-width: 2px;
    border-image: linear-gradient(
      to right,
      ${({ theme, invalid }) =>
        invalid ? theme.text.danger : theme.text.primary},
      ${({ theme }) => theme.text.secondary}
    );
    border-image-slice: 1;
  }
`;
