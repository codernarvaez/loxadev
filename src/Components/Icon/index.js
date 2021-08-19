import { StyledSocialIcon } from "components/Icon/Icon.style";
import React from "react";

export const SocialIcon = (props) => (
  <StyledSocialIcon {...props}>{props.children}</StyledSocialIcon>
);
