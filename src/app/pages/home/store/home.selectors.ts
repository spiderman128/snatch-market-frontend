import {createFeatureSelector, createSelector} from '@ngrx/store';
import { HomeStates } from './home.state';

export const selectHomeState = createFeatureSelector<HomeStates>('homestates');

export const selectNewRewardCollection = createSelector(
    selectHomeState, state => state.newRewardCollections
);

export const selectNewRewardDropped = createSelector(
    selectHomeState, state => state.newRewardDropped
);