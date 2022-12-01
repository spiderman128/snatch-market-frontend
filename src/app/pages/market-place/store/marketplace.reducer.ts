import {createReducer, on} from '@ngrx/store';
import { collectionsFetchAPISuccess, isFilterShowAction, isShowSearchAction} from './marketplace.action';
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
    on(collectionsFetchAPISuccess, (state, { allCollections}) => {
        let newState = {...state};
        newState.collections = allCollections;
        return newState;
    }),
    on(isFilterShowAction, (state, {isShowFilterShow}) => {
        let newState = {...state};
        newState.isFilterShow = isShowFilterShow;
        return newState;
    }),
    on(isShowSearchAction, (state, {isShowSearchAction}) => {
        let newState = {...state};
        newState.isShowSearchAction = isShowSearchAction;
        return newState;
    })
);