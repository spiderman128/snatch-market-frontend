import { createReducer, on } from '@ngrx/store';
import { NewRewardCollectionFetchAPISuccess, NewRewardDroppedFetchAPISuccess } from './home.actions';
import { HomeStates } from './home.state';

export const initState: HomeStates = {
    newRewardCollections: [],
    newRewardDropped: []
}
export const homeReducer = createReducer(
    initState,
    on(NewRewardCollectionFetchAPISuccess, (state, {newRewardCollections}) => ({...state, newRewardCollections: newRewardCollections})),
    on(NewRewardDroppedFetchAPISuccess, (state, {newRewardDropped}) => ({...state, newRewardDropped: newRewardDropped}))
);