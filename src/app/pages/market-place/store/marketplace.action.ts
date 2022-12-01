import { createAction, props } from '@ngrx/store';
import { MarketPlaceState } from './marketplace.state';

export const invokeCollectionsAPI = createAction(
    "[Collection API] Invoke Collections Fetch API",
    props<{page : number, limit: number}>()
);

export const collectionsFetchAPISuccess = createAction(
    "[Collection API] Fetch API Success",
    props<{allCollections : MarketPlaceState['collections']}>()
);

export const isFilterShowAction = createAction(
    "[IsFilterShow Action] Invoke isFilterShow Status",
    props<{isShowFilterShow: boolean}>()
);

export const isShowSearchAction = createAction(
    "[Toolbar Search] Invoke toolbar search panel Status",
    props<{isShowSearchAction: boolean}>()
);

export class MarketplaceAction {
}
