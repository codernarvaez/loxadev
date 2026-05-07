import React, { memo } from "react";
import { useLocation } from "react-router-dom";
import * as S from "components/Header/Header.style";
import { BreadCrumb } from "components/Breadcrumb";
import { dashboardRoutes } from "router/routes";
import { FilledButton } from "components";

export const Header = ({ title, description, ...rest }) => {
  return (
    <S.StyledHeader {...rest}>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.StyledHeader>
  );
};

export const DashboardHeader = () => {
  return (
    <S.StyledDashboardHeader>
      <DashboardTitle />
      <BreadCrumb />
    </S.StyledDashboardHeader>
  );
};

const DashboardTitle = memo(() => {
  const currentLocation = useLocation().pathname;

  const getRouteName = (pathname, routes) => {
    let formatRoute = pathname.replace(/\/{2,}/g, "");
    const currentRoute = routes.find((route) => route.path === formatRoute);
    return currentRoute.name;
  };

  return (
    <S.DashboardTitle>
      {getRouteName(currentLocation, dashboardRoutes)}
    </S.DashboardTitle>
  );
});

export const CoverHeader = ({
  coverImg,
  title,
  lead,
  alt,
  buttonProps,
  buttonText,
  ...rest
}) => {
  return (
    <S.StyledCoverHeader {...rest}>
      <img src={coverImg} alt={alt} />
      {title || lead || buttonText ? (
        <S.CoverHeaderContent>
          <S.CoverHeaderTitle>{title}</S.CoverHeaderTitle>
          <S.CoverHeaderLead>{lead}</S.CoverHeaderLead>
          <FilledButton {...buttonProps}>{buttonText}</FilledButton>
        </S.CoverHeaderContent>
      ) : null}
    </S.StyledCoverHeader>
  );
};
