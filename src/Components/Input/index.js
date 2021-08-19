import React from "react";
import _ from "lodash";
import {
  FormGroup,
  StyledFormFeedback,
  StyledFormHelper,
} from "components/Form";
import { StyledInput, StyledLabel } from "components/Input/Input.style";
import { useFormContext, useFormState } from "react-hook-form";

export const Input = ({ name, label, helpText, ...rest }) => {
  const { register } = useFormContext();
  const { errors } = useFormState();

  const inputError = _.get(errors, name);

  return (
    <FormGroup>
      <StyledInput
        type="text"
        name={name}
        id={name}
        autoComplete="off"
        {...register(name)}
        {...rest}
        placeholder={label}
        invalid={!!inputError}
      />
      <StyledLabel htmlFor={name} invalid={!!inputError}>
        {label}
      </StyledLabel>

      {!!inputError && (
        <StyledFormFeedback>{inputError.message}</StyledFormFeedback>
      )}

      {helpText && <StyledFormHelper>{helpText}</StyledFormHelper>}
    </FormGroup>
  );
};
