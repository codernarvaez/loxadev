import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const OtherTagsRecentContainer = styled.div`
  border-radius: 10px;
  padding: 20px 35px;
  box-shadow: 0px 5px 10px #00000029;
  ${tw`
        bg-white
        text-loxadev-secondary
        md:col-span-1
    `}
`;

const OtherTagsRecentTitle = styled.h4`
  ${tw`
        text-loxadev-dark
        font-semibold
    `}
`;

const OtherTagsList = styled.div`
  ${tw` 
        mt-5
        flex
        flex-wrap
        gap-2.5
    `}
`;

const Tag = styled.div`
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

export const OtherTags = () => {
  return (
    <OtherTagsRecentContainer>
      <OtherTagsRecentTitle>Otras Etiquetas</OtherTagsRecentTitle>

      <OtherTagsList>
        <Tag>Software</Tag>
        <Tag>Inteligencia Artificial</Tag>
        <Tag>ReactJs</Tag>
        <Tag>TIC's</Tag>
        <Tag>Inteligencia Artificial</Tag>
        <Tag>ReactJs</Tag>
        <Tag>Software</Tag>
        <Tag>Seguridad Informática</Tag>
        <Tag>ReactJs</Tag>
        <Tag>IA</Tag>
      </OtherTagsList>
    </OtherTagsRecentContainer>
  );
};
