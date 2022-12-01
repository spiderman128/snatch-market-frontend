import {createFeatureSelector, createSelector} from '@ngrx/store';
import { MarketPlaceState } from './marketplace.state';

export const selectMarketplaceState = createFeatureSelector<MarketPlaceState>('marketplacestate');

export const selectCollections = createSelector(
    selectMarketplaceState,
    state => state.collections
);

export const selectRewards = createSelector(
    selectMarketplaceState,
    state => state.rewards
);

export const selectBrands = createSelector(
    selectMarketplaceState,
    state => state.brands
);

export const selectIsFilterShow = createSelector(
    selectMarketplaceState,
    state => state.isFilterShow
);
export const selectIsShowSearchAction = createSelector(
    selectMarketplaceState,
    state => state.isShowSearchAction
);