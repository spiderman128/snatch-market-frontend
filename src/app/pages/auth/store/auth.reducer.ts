import { createReducer, on } from "@ngrx/store";
import * as authActions from "./auth.action";
import { AuthState } from "./auth.state";
import { TokenStorageService } from "@services/token-storage.service";

const tokenStorageService = new TokenStorageService();

export const initState:AuthState = {
    wizardStepIndex: 0,
    merchantStepIndex: 0,
    result: undefined,
    user: tokenStorageService.getUser(),
}
export const authReducer = createReducer(
    initState,
    on(
        authActions.setUserSignupStepIndex,
        (state, {stepIndex}) => {
            let newState = {...state};
            newState.wizardStepIndex = stepIndex;
            return newState;
        }
    ),
    on(authActions.setMerchantSignupStepIndex, (state, {stepIndex}) => {
        let newState = {...state};
        newState.merchantStepIndex = stepIndex;
        return newState;
    }),
    on(authActions.login, (state, {user}) => ({...state, user: user})),
    on(authActions.loginSuccess, (state, result) => ({...state, user: result.userInfo, result})),
);