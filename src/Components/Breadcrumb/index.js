import React, { memo } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./BreadCrumb.style";
import { dashboardRoutes } from "router/routes";

export const BreadCrumb = memo((props) => {
  const currentLocation = useLocation().pathname;

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname);
    return currentRoute.name;
  };

  const getBreadcrumbs = (location) => {
    const breadcrumbs = [];
    let formatLocation = location.replace(/\/{2,}/g, "");
    formatLocation.split("/").reduce((prev, curr) => {
      const currentPathname = `${prev}/${curr}`;
      if (curr)
        breadcrumbs.push({
          pathname: currentPathname,
          name: getRouteName(currentPathname, dashboardRoutes),
        });
      return currentPathname;
    });
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs(currentLocation);

  return (
    <S.StyledBreadcrumb {...props}>
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <S.BreadcrumbItem key={index}>
            <S.BreadcrumbLink
              {...(index + 1 === breadcrumbs.length
                ? { to: "#", active: "true" }
                : { to: breadcrumb.pathname, active: "false" })}
            >
              {breadcrumb.name}
            </S.BreadcrumbLink>
          </S.BreadcrumbItem>
        );
      })}
    </S.StyledBreadcrumb>
  );
});
