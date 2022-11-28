import {createReducer, on} from '@ngrx/store';
import { collectionsFetchAPISuccess } from './marketplace.action';
import { MarketPlaceState } from './marketplace.state';

export const initCollectionState : MarketPlaceState = {
    collections: [],
    rewards: [],
    brands: []
};

export const marketplaceReducer = createReducer(
    initCollectionState,
    on(collectionsFetchAPISuccess, (state, { allCollections}) => {
        let newState = {...state};
        newState.collections = allCollections;
        return newState;
    })
);