import React from "react";
import styled from "styled-components";
import LogoBlack from "assets/images/logo-black.svg";
import { Link } from "react-router-dom";

const Image = styled.div`
  width: auto;
  height: 40px;
  img {
    width: 100%;
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
