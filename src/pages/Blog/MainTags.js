import React from "react";
import * as S from "./Blog.style";

export const MainTags = () => {
  return (
    <S.MainTagsSection>
      <S.SectionBlogTitle>Principales Etiquetas</S.SectionBlogTitle>

      <S.MainTags>
        <S.MainTag to="#">Inteligencia Artificial</S.MainTag>
        <S.MainTag to="#">ReactJS</S.MainTag>
        <S.MainTag to="#">Design</S.MainTag>
        <S.MainTag to="#">ML</S.MainTag>
        <S.MainTag to="#">ReactJS</S.MainTag>
        <S.MainTag to="#">Javascript</S.MainTag>
      </S.MainTags>
    </S.MainTagsSection>
  );
};
