import { createReducer, on } from "@ngrx/store";
import { setSidebarNavsData } from "./dashboard.action";
import { DashboardState } from "./dashboard.state";

export const initState: DashboardState = {
    sidebarNavs:[]
};

export const dashboardReducer = createReducer(
    initState,
    on(setSidebarNavsData, (state, {data}) => {
        let newState = {...state};
        newState.sidebarNavs = data;
        return newState;
    })
)
