import React from "react";
import {
  A,
  StyledButton,
  StyledLink,
  StyledOutlineButton,
  StyledIconButton,
  StyledFilledIconButton,
} from "./Button.style";

const handleLinkWrapping = (Component, props) => {
  const { href, to, target, children, disabled, isLoading, ...rest } = props;
  const button = (
    <Component disabled={disabled || isLoading} {...rest}>
      {children}
    </Component>
  );

  if (href)
    return (
      <A
        href={href}
        target={target || "_blank"}
        rel={!target ? "noopener noreferrer" : undefined}
      >
        {button}
      </A>
    );
  if (to) return <StyledLink to={to}>{button}</StyledLink>;
  return button;
};

export const Button = (props) => handleLinkWrapping(StyledButton, props);

export const OutlineButton = (props) =>
  handleLinkWrapping(StyledOutlineButton, props);

export const IconButton = (props) =>
  handleLinkWrapping(StyledIconButton, props);

export const FilledIconButton = (props) =>
  handleLinkWrapping(StyledFilledIconButton, props);
