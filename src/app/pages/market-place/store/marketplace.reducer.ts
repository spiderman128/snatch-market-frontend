import {createReducer, on} from '@ngrx/store';
import * as marketActions from './marketplace.action';
import { MarketPlaceState } from './marketplace.state';

export const initCollectionState : MarketPlaceState = {
    collections: [],
    rewards: [],
    brands: [],
    isFilterShow: false,
    isShowSearchAction : true
};

export const marketplaceReducer = createReducer(
    initCollectionState,
    on(marketActions.RewardCollectionFetchAPISuccess, (state, { rewardCollections}) => {
        let newState = {...state};
        newState.collections = rewardCollections;
        return newState;
    }),
    on(marketActions.isFilterShowAction, (state, {isShowFilterShow}) => {
        let newState = {...state};
        newState.isFilterShow = isShowFilterShow;
        return newState;
    }),
    on(marketActions.isShowSearchAction, (state, {isShowSearchAction}) => {
        let newState = {...state};
        newState.isShowSearchAction = isShowSearchAction;
        return newState;
    })
);