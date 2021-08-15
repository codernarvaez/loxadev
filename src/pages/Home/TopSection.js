import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button, Wrapper } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import TeamImage from "assets/images/team.png";
import { SCREENS } from "utils/constants";

const TopSectionContainer = styled.div`
  position: relative;
`;

const Hero = styled.div`
  ${tw`
    flex
    flex-col-reverse
    md:flex-row
    md:items-center
  `}
`;

const Content = styled.div`
  ${tw`
    flex 
    flex-1
    flex-col
    md:flex-none
    md:w-8/12
    xl:w-1/2
    md:items-start
  `}
`;

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  font-weight: 800;

  @media (min-width: ${SCREENS.md}) {
    font-size: 46px;
    text-align: left;
  }

  span {
    ${tw`text-loxadev-primary`}
  }
`;

const Description = styled.p`
  ${tw`
    text-loxadev-dark
    text-lg
    text-center
    mt-7
    xl:mt-8
    mb-9
    xl:mb-12
    md:text-left
    `}
`;

const SocialContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    mt-8
    xl:mt-24
    gap-4
  `}
`;

const SocialIcon = styled.span`
  width: 25px;
  height: 25px;

  ${tw`
    bg-loxadev-secondary
    rounded-md
    text-white
    flex
    items-center
    justify-center
    cursor-pointer
    hover:bg-loxadev-dark
  `}
`;

const ImageContainer = styled.div`
  padding: 25px 0;
  ${tw`
    flex
    justify-center
    flex-1
    md:px-4
    xl:px-10
    z-10
  `}
`;

const Image = styled.img`
  height: 150px;
  border-radius: 20px;

  @media (min-width: ${SCREENS.md}) {
    height: 500px;
  }

  @media (min-width: ${SCREENS.xl}) {
    height: 490px;
  }

  ${tw`
    w-full
    object-cover
  `}
`;

const RoundedShape = styled.div`
  ${tw`
    hidden
    xl:block
    overflow-hidden
    bg-loxadev-light-blue
    rounded-3xl
    absolute
    h-32
    w-32
    -bottom-10
    right-96
    z-20
  `}
`;

const RoundedShapeSmall = styled.div`
  ${tw`
    hidden
    xl:block
    overflow-hidden
    bg-loxadev-light-blue
    rounded-3xl
    absolute
    h-24
    w-24
    top-0
    right-0
  `}
`;

export const TopSection = () => {
  return (
    <Wrapper>
      <TopSectionContainer>
        <Hero>
          <Content>
            <Title>
              Lorem ipsum dolor sit amet <span>consectetuer</span>
            </Title>

            <Description>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet.
            </Description>

            <Button outlined>Conoce todo sobre nosotros</Button>

            <SocialContainer>
              <SocialIcon>
                <FontAwesomeIcon icon={faFacebookF} />
              </SocialIcon>
              <SocialIcon>
                <FontAwesomeIcon icon={faTwitter} />
              </SocialIcon>
              <SocialIcon>
                <FontAwesomeIcon icon={faInstagram} />
              </SocialIcon>
            </SocialContainer>
          </Content>

          <ImageContainer>
            <Image src={TeamImage} alt="Loxadev" />
          </ImageContainer>
        </Hero>

        <RoundedShape />
        <RoundedShapeSmall />
      </TopSectionContainer>
    </Wrapper>
  );
};
