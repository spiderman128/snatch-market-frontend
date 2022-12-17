import { createReducer, on } from '@ngrx/store';
import { setAPIStatus} from './app.action';
import { Appstate } from './app.state';
 
export const initialState: Readonly<Appstate> = {
  apiResponseMessage: '',
  apiStatus: '',
};
 
export const appReducer = createReducer(
  initialState,
  on(setAPIStatus, (state, { apiStatus }) => ({...state, ...apiStatus})),
);