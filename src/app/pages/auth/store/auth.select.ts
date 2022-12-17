import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const selectAuthState = createFeatureSelector<AuthState>('authstate');

export const selectUserSingupStepIndex = createSelector(selectAuthState, state => state.wizardStepIndex);
export const selectMerchantSignupStepIndex = createSelector(selectAuthState, state => state.merchantStepIndex);

export const selectLoggedInUser = createSelector(selectAuthState, state => ({user: state.user}));
