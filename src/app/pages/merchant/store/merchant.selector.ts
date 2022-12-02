import {createFeatureSelector, createSelector} from '@ngrx/store';
import { MerchantState } from './merchant.state';

export const selectMerchantState = createFeatureSelector<MerchantState>('merchantstate');

export const selectStepIndex = createSelector(selectMerchantState, state => state.stepIndex);
export const selectRewardStepIndex = createSelector(selectMerchantState, state => state.rewardStepIndex);
export const selectArtistStepIndex = createSelector(selectMerchantState, state => state.artistStepIndex);

