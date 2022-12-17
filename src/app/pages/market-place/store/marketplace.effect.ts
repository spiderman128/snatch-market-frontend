import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { CollectionService } from "@services/collection.service";
import * as marketActions from "./marketplace.action";
import { selectCollections } from "./marketplace.selector";
import { RewardCollection } from "@interfaces/collection.model";

@Injectable()
export class MarketplaceEffect {

    constructor(
        private actions$: Actions,
        private collectionService: CollectionService,
        private store: Store
    ) { }

    // loadAllCollections$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(invokeCollectionsAPI),
    //         withLatestFrom(this.store.pipe(select(selectCollections))),
    //         mergeMap(([, collectionsFromStore]) => {
    //             if (collectionsFromStore.length > 0) {
    //                 return EMPTY;
    //             }
    //             return this.collectionService.getAll(1, 12)
    //                 .pipe(
    //                     map((data: any) => collectionsFetchAPISuccess({ allCollections: data }))
    //                 );
    //         })
    //     );
    // });
    // loadAllCollections$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(invokeCollectionsAPI),
    //         mergeMap(({page, limit}) => {
    //             return this.collectionService.getAll(page, limit)
    //                 .pipe(
    //                     map((data: any) => collectionsFetchAPISuccess({ allCollections: data }))
    //                 );
    //         })
    //     );
    // });
    loadRewardCollections$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(marketActions.InvokeRewardCollectionAPI),
            switchMap(action => {
                return this.collectionService.getRewardCollections().pipe(
                    map((response: any) => {
                        console.log(response);
                        return marketActions.RewardCollectionFetchAPISuccess({rewardCollections: response.data});
                    })
                );
            })
        );
    });
}
