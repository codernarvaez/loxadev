import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import ArticleImg from "assets/images/article.jpg";

const ArticleRecentContainer = styled.div`
  border-radius: 10px;
  padding: 20px 35px;
  box-shadow: 0px 5px 10px #00000029;
  ${tw`
        bg-white
        text-loxadev-secondary
        font-semibold
        md:col-span-1
        xl:mt-12
    `}
`;

const ArticleRecentTitle = styled.h4`
  ${tw`
        text-loxadev-dark
    `}
`;

const ArticleRecentList = styled.div`
  ${tw` 
        mt-5
        flex
        flex-col
        gap-2.5
    `}
`;

const ArticleRecentItem = styled.div`
  ${tw`
        flex
        items-center
        gap-2.5
        transition
        duration-300
        ease-in-out
        hover:bg-loxadev-ligth-gray
        cursor-pointer
    `}

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
  }
`;

export const ArticleRecent = () => {
  return (
    <ArticleRecentContainer>
      <ArticleRecentTitle>Artículos Recientes</ArticleRecentTitle>

      <ArticleRecentList>
        <ArticleRecentItem>
          <img src={ArticleImg} alt="" />
          <span>Lorem ipsum dolor sit amet, consetetur</span>
        </ArticleRecentItem>

        <ArticleRecentItem>
          <img src={ArticleImg} alt="" />
          <span>Lorem ipsum dolor sit amet, consetetur</span>
        </ArticleRecentItem>

        <ArticleRecentItem>
          <img src={ArticleImg} alt="" />
          <span>Lorem ipsum dolor sit amet, consetetur</span>
        </ArticleRecentItem>

        <ArticleRecentItem>
          <img src={ArticleImg} alt="" />
          <span>Lorem ipsum dolor sit amet, consetetur</span>
        </ArticleRecentItem>
      </ArticleRecentList>
    </ArticleRecentContainer>
  );
};
