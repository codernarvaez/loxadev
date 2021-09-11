import React from "react";
import { DashboardFooter, DashboardHeader, Sidebar } from "components";
import { DashboardRouter } from "router/DashboardRouter";
import { navigation } from "pages/Dashboard/navigation";

import * as S from "./Dashboard.style";

export const Dashboard = () => {
  return (
    <S.StyledDashboard>
      <Sidebar navigation={navigation} />

      <S.DashboardContent>
        <DashboardHeader />
        <S.DashboardBody>
          <DashboardRouter />
        </S.DashboardBody>
        <DashboardFooter />
      </S.DashboardContent>
    </S.StyledDashboard>
  );
};
