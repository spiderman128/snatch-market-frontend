import { createAction, props } from '@ngrx/store';

export const setStepIndexAction = createAction(
    "[Step Index] Invoke step index Setting Action",
    props<{stepIndex : number}>()
);
export const setRewardStepIndexAction = createAction(
    "[Reward Step Index] Invoke reward step index Setting Action",
    props<{stepIndex : number}>()
);

export const setArtistStepIndexAction = createAction(
    "[Artwork Step Index] Invoke Artist step index setting Action",
    props<{ stepIndex : number}>()
);