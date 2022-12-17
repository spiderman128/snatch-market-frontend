import { createAction, props } from '@ngrx/store';
import { MarketPlaceState } from './marketplace.state';


export const InvokeRewardCollectionAPI = createAction(
    "[Reward Collection API] Invoke Reward Collection API",
);

export const RewardCollectionFetchAPISuccess = createAction(
    "[Reward Collection API] Fetch API Success",
    props<{rewardCollections: MarketPlaceState['collections']}>()
);

// export const invokeCollectionsAPI = createAction(
//     "[Collection API] Invoke Collections Fetch API",
//     props<{page : number, limit: number}>()
// );
// export const collectionsFetchAPISuccess = createAction(
//     "[Collection API] Fetch API Success",
//     props<{allCollections : MarketPlaceState['collections']}>()
// );

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
