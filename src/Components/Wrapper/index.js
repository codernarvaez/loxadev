import React from "react";
import styled from "styled-components";
import { SCREENS } from "utils/constants";

const StyledWrapper = styled.div`
  max-width: ${SCREENS.xl};
  padding: 0 ${({ fluid }) => (fluid ? "0" : "36px")};
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto !important;
  margin-right: auto !important;

  @media (min-width: ${SCREENS.md}) {
    padding: 0 82px !important;
  }

  @media (min-width: ${SCREENS.md}) {
    padding: 0 96px !important;
  }
`;

export const Wrapper = ({ children, ...rest }) => {
  return <StyledWrapper {...rest}>{children}</StyledWrapper>;
};
