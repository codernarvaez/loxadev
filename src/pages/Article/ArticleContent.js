import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import AvatarImg from "assets/images/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";

const ArticleContentContainer = styled.div`
  border-radius: 10px;
  padding: 16px 35px 35px 35px;
  box-shadow: 0px 5px 10px #00000029;
  ${tw`
        relative
        bg-white
        text-loxadev-secondary
        -mt-12
        z-20
        md:col-span-2
        md:row-span-2
    `}
`;

const ArticleTitle = styled.h2`
  ${tw`
        text-xl
        text-loxadev-black
        font-medium
        w-64
        leading-9
    `}
`;

const ArticleAuthorContainer = styled.div`
  ${tw`
        flex
        mt-5
        mb-4
        items-center
    `}
`;

const ArticleAuthorAvatar = styled.img`
  width: 69px;
  height: 69px;
  ${tw`
    rounded-full
    object-cover
    `}
`;

const ArticleAuthorDetails = styled.div`
  ${tw`
    ml-2
    flex
    flex-col
    items-start
  `}
`;

const ArticleAuthorName = styled.div`
  ${tw`
    text-loxadev-primary
    font-medium
    `}
`;

const ArticleAuthorOccupation = styled.span``;

const ArticleAuthorViewMore = styled.a`
  ${tw`
    opacity-70
    cursor-pointer
    hover:text-loxadev-black
    `}
`;

const ArticleDate = styled.span`
  ${tw`mb-5 inline-block`}
`;

const ArticleStatsContainer = styled.div`
  ${tw`flex gap-2.5`}
`;

const ArticleStat = styled.div`
  ${tw`
    flex
    gap-1.5
    items-center
    text-sm
  `}
`;

const ArticleBody = styled.div`
  ${tw`
    my-4
  `}
`;

const ArticleTagsContainer = styled.div`
  ${tw`
    flex
    gap-2.5
    overflow-x-auto
  `}
`;

const ArticleTag = styled.div`
  border-radius: 10px;
  ${tw`
    bg-loxadev-ligth-gray
    p-2.5
    whitespace-nowrap
    cursor-pointer
    transition
    ease-in-out
    hover:bg-loxadev-light-blue
  `}
`;

const ArticleInteractContainer = styled.div`
  ${tw`flex gap-2.5 mt-4`}
`;

const ArticleInteractButton = styled.button`
  ${tw`
    flex
    gap-1.5
    items-center
    text-lg
    hover:text-loxadev-primary
  `}
`;

export const ArticleContent = () => {
  return (
    <ArticleContentContainer>
      <ArticleTitle>How A Dietician Can Help You in Losing Weight</ArticleTitle>
      <ArticleAuthorContainer>
        <ArticleAuthorAvatar src={AvatarImg} alt="Avatar" />

        <ArticleAuthorDetails>
          <ArticleAuthorName>Víctor Andrés Rojas Curimilma</ArticleAuthorName>
          <ArticleAuthorOccupation>
            Author/Desarrollador
          </ArticleAuthorOccupation>
          <ArticleAuthorViewMore>Ver Perfil</ArticleAuthorViewMore>
        </ArticleAuthorDetails>
      </ArticleAuthorContainer>
      <ArticleDate>19 de Octubre de 2021</ArticleDate>
      <ArticleStatsContainer>
        <ArticleStat>
          <FontAwesomeIcon icon={faEye} />
          <span>970</span>
        </ArticleStat>
        <ArticleStat>
          <FontAwesomeIcon icon={faHeart} />
          <span>499</span>
        </ArticleStat>
      </ArticleStatsContainer>

      <ArticleBody>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore.v Lorem ipsum
        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore. Lorem ipsum
        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore.
      </ArticleBody>

      <ArticleTagsContainer>
        <ArticleTag>Software</ArticleTag>
        <ArticleTag>Inteligencia Artificial</ArticleTag>
        <ArticleTag>ReactJs</ArticleTag>
      </ArticleTagsContainer>

      <ArticleInteractContainer>
        <ArticleInteractButton>
          <FontAwesomeIcon icon={faHeart} />
        </ArticleInteractButton>
        <ArticleInteractButton>
          <FontAwesomeIcon icon={faShareAlt} />
        </ArticleInteractButton>
      </ArticleInteractContainer>
    </ArticleContentContainer>
  );
};
