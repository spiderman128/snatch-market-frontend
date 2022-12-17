import { createAction, props } from "@ngrx/store";
import { NewRewardCollection } from "@interfaces/newrewardcollection";
import { NewRewardDropped } from "@interfaces/newrewardcollection";

export const InvokeNewRewardCollection = createAction(
    "[New Reward Collection API] Invoke get new reward collection api"
);

export const NewRewardCollectionFetchAPISuccess = createAction(
    "[New Reward Collection API] Fetch API Success",
    props<{ newRewardCollections: NewRewardCollection[] }>()
);

export const InvokeNewRewardDropped = createAction(
    "[New Reward Dropped API] Invoke New Reward Collection API"
);

export const NewRewardDroppedFetchAPISuccess = createAction(
    "[New Reward Dropped API] Fetch API Success",
    props<{newRewardDropped: NewRewardDropped[]}>()
)