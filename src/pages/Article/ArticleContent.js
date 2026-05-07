import React from "react";
import AvatarImg from "assets/images/avatar.jpg";

import * as Ai from "react-icons/ai";
import * as S from "./Article.style";

export const ArticleContent = () => {
  return (
    <S.ArticleContentContainer>
      <S.ArticleTitle>
        How A Dietician Can Help You in Losing Weight
      </S.ArticleTitle>
      <S.ArticleAuthorContainer>
        <S.ArticleAuthorAvatar src={AvatarImg} alt="Avatar" />

        <S.ArticleAuthorDetails>
          <S.ArticleAuthorName>
            Víctor Andrés Rojas Curimilma
          </S.ArticleAuthorName>
          <S.ArticleAuthorOccupation>
            Author/Desarrollador
          </S.ArticleAuthorOccupation>
          <S.ArticleAuthorViewMore>Ver Perfil</S.ArticleAuthorViewMore>
        </S.ArticleAuthorDetails>
      </S.ArticleAuthorContainer>
      <S.ArticleDate>19 de Octubre de 2021</S.ArticleDate>
      <S.ArticleStatsContainer>
        <S.ArticleStat>
          <Ai.AiFillEye />
          <span>970</span>
        </S.ArticleStat>
        <S.ArticleStat>
          <Ai.AiFillHeart />
          <span>499</span>
        </S.ArticleStat>
      </S.ArticleStatsContainer>

      <S.ArticleBody>
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
      </S.ArticleBody>

      <S.ArticleTagsContainer>
        <S.ArticleTag>Software</S.ArticleTag>
        <S.ArticleTag>Inteligencia Artificial</S.ArticleTag>
        <S.ArticleTag>ReactJs</S.ArticleTag>
      </S.ArticleTagsContainer>

      <S.ArticleInteractContainer>
        <S.ArticleInteractButton>
          <Ai.AiOutlineHeart />
        </S.ArticleInteractButton>
        <S.ArticleInteractButton>
          <Ai.AiOutlineShareAlt />
        </S.ArticleInteractButton>
      </S.ArticleInteractContainer>
    </S.ArticleContentContainer>
  );
};
