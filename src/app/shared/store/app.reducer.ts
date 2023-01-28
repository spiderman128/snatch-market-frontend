import { createReducer, on } from '@ngrx/store';
import * as appActions from './app.action';
import { Appstate } from './app.state';
 
export const initialState: Readonly<Appstate> = {
  apiResponseMessage: '',
  apiStatus: '',
  userBalance: 0
};
 
export const appReducer = createReducer(
  initialState,
  on(appActions.setAPIStatus, (state, { apiStatus }) => ({...state, ...apiStatus})),
  on(appActions.setUserBalance, (state, {userBalance}) => ({...state, userBalance}))
);