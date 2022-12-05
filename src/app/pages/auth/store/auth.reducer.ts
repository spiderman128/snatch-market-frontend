import { createReducer, on } from "@ngrx/store";
import { setMerchantSignupStepIndex, setUserSignupStepIndex } from "./auth.action";
import { AuthState } from "./auth.state";

export const initState:AuthState = {
    wizardStepIndex: 0,
    merchantStepIndex: 0
}
export const authReducer = createReducer(
    initState,
    on(
        setUserSignupStepIndex,
        (state, {stepIndex}) => {
            let newState = {...state};
            newState.wizardStepIndex = stepIndex;
            return newState;
        }
    ),
    on(setMerchantSignupStepIndex, (state, {stepIndex}) => {
        let newState = {...state};
        newState.merchantStepIndex = stepIndex;
        return newState;
    })
);