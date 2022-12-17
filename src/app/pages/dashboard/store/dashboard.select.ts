import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DashboardState } from "./dashboard.state";

export const selectDashboardState = createFeatureSelector<DashboardState>('dashboardstate');

export const selectSidebarNavState = createSelector(selectDashboardState, state => state.sidebarNavs);
