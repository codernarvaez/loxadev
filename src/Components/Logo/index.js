import React from "react";
import styled from "styled-components";
import LogoBlack from "assets/images/logo-black.svg";
import tw from "twin.macro";
import { Link } from "react-router-dom";

// const LogoContainer = styled.div`
//   ${tw`
//    flex
//    items-center
//   `}
// `;

const Image = styled.div`
  width: auto;
  ${tw`
    h-8 md:h-11
  `};

  img {
    width: auto;
    height: 100%;
  }
`;

export const Logo = () => {
  return (
    <Image>
      <Link to="/">
        <img src={LogoBlack} alt="Loxadev" />
      </Link>
    </Image>
  );
};
