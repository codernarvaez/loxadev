import React from "react";
import {
  Description,
  StyledHeader,
  Title,
} from "components/Header/Header.style";

export const Header = ({ title, description, ...rest }) => {
  return (
    <StyledHeader {...rest}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </StyledHeader>
  );
};

export const DashboardHeader = () => {
  return <div>Dashboard Header</div>;
};
