import { createAction, props } from "@ngrx/store";
 
export const setAPIStatus = createAction(
    '[API] success or failure status',
    props<{apiStatus: any}>()
);

// user balance
export const setUserBalance = createAction(
    '[User Balance] Set user balance',
    props<{userBalance: number}>()
)

export const getUserBalance = createAction(
    '[User Balance] Invoke User Balance API'
) 

export const InvokeUserBalanceFailed = createAction(
    '[User Balance] Invoke User Balance API Failed'
)
