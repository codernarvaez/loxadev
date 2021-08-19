import React from "react";
import { StyledCard } from "components/Card/Card.style";

export const Card = (props) => {
  return <StyledCard {...props}>{props.children}</StyledCard>;
};
