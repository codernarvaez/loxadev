import React from "react";
import _ from "lodash";
import {
  FormGroup,
  Label,
  StyledFormFeedback,
  StyledFormHelper,
} from "components/Form";
import {
  StyledInput,
  StyledToggle,
  StyledToggleLabel,
  StyledToggleWrapper,
} from "components/Input/Input.style";
import { useFormContext, useFormState } from "react-hook-form";

export const Input = ({ name, label, helpText, ...rest }) => {
  const { register } = useFormContext();
  const { errors } = useFormState();

  const inputError = _.get(errors, name);

  if (rest.type === "checkbox") {
    return (
      <StyledToggleWrapper>
        <StyledToggle name={name} id={name} {...register(name)} {...rest} />
        <StyledToggleLabel htmlFor={name} />
      </StyledToggleWrapper>
    );
  }

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
      <Label htmlFor={name} invalid={!!inputError}>
        {label}
      </Label>

      {!!inputError && (
        <StyledFormFeedback>{inputError.message}</StyledFormFeedback>
      )}

      {helpText && <StyledFormHelper>{helpText}</StyledFormHelper>}
    </FormGroup>
  );
};
