import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const WrapperStyled = styled.div`
  ${tw`
        max-w-screen-xl
        m-auto
        py-0
        px-9
        md:px-20.5
        xl:px-24
    `}
`;

export const Wrapper = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};
