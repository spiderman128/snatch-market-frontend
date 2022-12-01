import { createReducer, on } from '@ngrx/store';
import { setAPIStatus, setUser } from './app.action';
import { Appstate } from './app.state';
 
export const initialState: Readonly<Appstate> = {
  apiResponseMessage: '',
  apiStatus: '',
  user : null
};
 
export const appReducer = createReducer(
  initialState,
  on(setAPIStatus, (state, { apiStatus }) => {
    return {
      ...state,
      ...apiStatus
    };
  }),
  on(setUser, (state, {user}) => {
    let newState = {...state};
    newState.user = user;
    return newState;
  })
);