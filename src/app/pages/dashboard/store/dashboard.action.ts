import { SidebarItem } from "@interfaces/sidebar-item";
import { createAction, props } from "@ngrx/store";

export const setSidebarNavsData = createAction(
    "[Set Sidebar Items] Invoke setting sidebar items",
    props<{data: SidebarItem[]}>()
);