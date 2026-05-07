import React, { Fragment } from "react";
import {
  A,
  StyledButton,
  StyledFilledButton,
  StyledLink,
  StyledOutlineButton,
  StyledIconButton,
  StyledFilledIconButton,
  StyledIconTextButton,
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

export const FilledButton = (props) =>
  handleLinkWrapping(StyledFilledButton, props);

export const OutlineButton = (props) =>
  handleLinkWrapping(StyledOutlineButton, props);

export const IconButton = (props) =>
  handleLinkWrapping(StyledIconButton, props);

export const FilledIconButton = (props) =>
  handleLinkWrapping(StyledFilledIconButton, props);

export const IconTextButton = (props) => {
  const children = (
    <Fragment>
      <props.icon />
      {props.children}
    </Fragment>
  );
  return handleLinkWrapping(StyledIconTextButton, { ...props, children });
};
