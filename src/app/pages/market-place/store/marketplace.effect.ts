import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { CollectionService } from "@services/collection.service";
import { invokeCollectionsAPI, collectionsFetchAPISuccess } from "./marketplace.action";
import { selectCollections } from "./marketplace.selector";
import { CollectionModel } from "@interfaces/collection.model";

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
    loadAllCollections$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(invokeCollectionsAPI),
            mergeMap(({page, limit}) => {
                return this.collectionService.getAll(page, limit)
                    .pipe(
                        map((data: any) => collectionsFetchAPISuccess({ allCollections: data }))
                    );
            })
        );
    });
}
