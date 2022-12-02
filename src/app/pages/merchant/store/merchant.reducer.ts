import {createReducer, on} from '@ngrx/store';
import { MerchantState } from './merchant.state';
import { setArtistStepIndexAction, setRewardStepIndexAction, setStepIndexAction } from './merchant.action';

export const initialState : MerchantState = {
    stepIndex : 5,
    rewardStepIndex : 0,
    artistStepIndex : 0
}

export const merchantReducer = createReducer(
    initialState,
    on(setStepIndexAction, (state, {stepIndex}) => {
        let newState = {...state};
        newState.stepIndex = stepIndex;
        return newState;
    }),
    on(setRewardStepIndexAction, (state, {stepIndex}) => {
        let newState = {...state};
        newState.rewardStepIndex = stepIndex;
        return newState;
    }),
    on(setArtistStepIndexAction, (state , { stepIndex}) => {
        let newState = {...state};
        newState.artistStepIndex = stepIndex;
        return newState;
    })
)