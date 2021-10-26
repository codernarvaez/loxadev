import React from "react";
import { useFormContext, useFormState } from "react-hook-form";
import _ from "lodash";

import { StyledTextArea } from "components/TextArea/TextArea.style";
import {
  FormGroup,
  Label,
  StyledFormFeedback,
  StyledFormHelper,
} from "components/Form";

export const TextArea = ({ name, label, helpText, ...rest }) => {
  const { register } = useFormContext();
  const { errors } = useFormState();
  const inputError = _.get(errors, name);

  return (
    <FormGroup>
      <StyledTextArea
        id={name}
        name={name}
        autoComplete="off"
        {...register(name)}
        {...rest}
        placeholder={label}
        invalid={!!inputError}
      />
      <Label htmlFor={name} invalid={!!false}>
        {label}
      </Label>

      {!!inputError && (
        <StyledFormFeedback>{inputError.message}</StyledFormFeedback>
      )}

      {helpText && <StyledFormHelper>{helpText}</StyledFormHelper>}
    </FormGroup>
  );
};
