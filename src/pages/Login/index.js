import React, { Fragment } from "react";
import { Footer, Navbar } from "components";
import * as S from "./Login.style";
import LogoBlackImg from "assets/images/logo-black.svg";
import { LoginForm } from "pages/Login/LoginForm";

export const Login = () => {
  return (
    <Fragment>
      <Navbar />
      <S.LoginContainer fluid>
        <S.LoginCard>
          <S.CardLogo>
            <img src={LogoBlackImg} alt="Loxadev" />
          </S.CardLogo>

          <S.CardTitle>¡Bienvenido!</S.CardTitle>

          <S.CardLead>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </S.CardLead>

          <LoginForm />
        </S.LoginCard>

        <S.LoginShapeLarge />
        <S.LoginShapeSmall />
      </S.LoginContainer>
      <Footer />
    </Fragment>
  );
};
