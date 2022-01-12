import React from "react";
import * as Fa from "react-icons/fa";
import * as S from "./Home.style";
import { OutlineButton, SocialIconFilled, Wrapper } from "components";
import TeamImage from "assets/images/team.png";

export const TopSection = () => {
  return (
    <Wrapper>
      <S.TopSectionContainer>
        <S.Hero>
          <S.Content>
            <S.Title>
              Te ofrecemos Soluciones <span>que Evolucionan</span>
            </S.Title>

            <S.Description>
              Soluciones tecnológicas a medida y adaptables a las necesidades de
              la comunidad mundial, cerca de ti.
            </S.Description>

            <OutlineButton to="/nosotros" block>
              Conoce todo sobre nosotros
            </OutlineButton>

            <S.SocialContainer>
              <SocialIconFilled
                href="https://www.facebook.com/LoxaDev"
                target="_blank"
              >
                <Fa.FaFacebookF />
              </SocialIconFilled>

              <SocialIconFilled
                href="https://twitter.com/LoxaDev"
                target="_blank"
              >
                <Fa.FaTwitter />
              </SocialIconFilled>

              <SocialIconFilled
                href="https://www.instagram.com/loxadev"
                target="_blank"
              >
                <Fa.FaInstagram />
              </SocialIconFilled>

              <SocialIconFilled href="https://t.me/LoxaDev" target="_blank">
                <Fa.FaTelegramPlane />
              </SocialIconFilled>
            </S.SocialContainer>
          </S.Content>

          <S.ImageContainer>
            <S.Image src={TeamImage} alt="Loxadev" />
          </S.ImageContainer>
        </S.Hero>
        <S.RoundedShape />
        <S.RoundedShapeSmall />
      </S.TopSectionContainer>
    </Wrapper>
  );
};
