import React from "react";
import * as Fa from "react-icons/fa";
import * as S from "./Home.style";
import { OutlineButton, Wrapper } from "components";
import TeamImage from "assets/images/team.png";

export const TopSection = () => {
  return (
    <Wrapper>
      <S.TopSectionContainer>
        <S.Hero>
          <S.Content>
            <S.Title>
              Lorem ipsum dolor sit amet <span>consectetuer</span>
            </S.Title>

            <S.Description>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet.
            </S.Description>

            <OutlineButton>Conoce todo sobre nosotros</OutlineButton>

            <S.SocialContainer>
              <S.SocialIcon>
                <Fa.FaFacebookF />
              </S.SocialIcon>
              <S.SocialIcon>
                <Fa.FaTwitter />
              </S.SocialIcon>
              <S.SocialIcon>
                <Fa.FaInstagram />
              </S.SocialIcon>
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
