import React from "react";
import { StyledSelect } from "components/Select/Select.style";
import { useController, useFormContext } from "react-hook-form";
import {
  FormGroup,
  StyledFormFeedback,
  StyledFormHelper,
} from "components/Form";

export const Select = ({ name, defaultValue, helpText, ...rest }) => {
  const { control } = useFormContext();
  const {
    field: { ref, ...props },
    fieldState: { invalid, error },
  } = useController({
    control,
    name,
    defaultValue: defaultValue || (!!rest.isMulti ? [] : null),
  });

  return (
    <FormGroup>
      <StyledSelect
        name={name}
        id={name}
        innerRef={ref}
        {...rest}
        {...props}
        invalid={invalid}
        className="react-select"
        classNamePrefix="react-select"
      />

      {invalid && <StyledFormFeedback>{error.message}</StyledFormFeedback>}

      {helpText && <StyledFormHelper>{helpText}</StyledFormHelper>}
    </FormGroup>
  );
};
