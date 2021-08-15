import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";

const BaseButton = styled.button`
  border-radius: 10px;
  ${tw`
        px-5
        py-3.5
        outline-none
        text-white
        text-sm
        font-medium
        border-transparent
        border-2
        border-solid
        focus:outline-none
        transition-all
        duration-200
        ease-in-out
        lg:w-auto
    `}

  ${({ block }) =>
    block &&
    css`
      width: 100%;
    `}
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`
        border-loxadev-primary
        text-loxadev-primary
        bg-transparent
        hover:bg-loxadev-primary
        hover:text-white
        hover:border-transparent
    `}
`;

const FilledButton = styled(BaseButton)`
  ${tw`
        bg-loxadev-primary
        hover:bg-transparent
        hover:text-loxadev-primary
        hover:border-loxadev-primary
    `}
`;

export const Button = ({
  outlined = false,
  children,
  block = false,
  className,
}) => {
  if (outlined)
    return (
      <OutlinedButton className={className} block={block}>
        {children}
      </OutlinedButton>
    );
  else
    return (
      <FilledButton className={className} block={block}>
        {children}
      </FilledButton>
    );
};
