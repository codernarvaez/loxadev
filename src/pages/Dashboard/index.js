import React from "react";
import { DashboardFooter, DashboardHeader, Sidebar } from "components";
import { DashboardRouter } from "router/DashboardRouter";
import * as S from "./Dashboard.style";

export const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <S.DashboardContent>
        <DashboardHeader />
        <S.DashboardBody>
          <DashboardRouter />
        </S.DashboardBody>
        <DashboardFooter />
      </S.DashboardContent>
    </div>
  );
};
