import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CollectionService } from "@services/collection.service";

import { Store } from "@ngrx/store";
import * as homeActions from "./home.actions";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()

export class HomeEffect {
    constructor(
        private actions$: Actions,
        private collectionService: CollectionService,
        private store: Store
    ) {
    }

    loadNewRewardCollections$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(homeActions.InvokeNewRewardCollection),
            switchMap(action => {
                return this.collectionService.getNewRewardCollection().pipe(
                    map((response:any) => {
                        console.log(response);
                        return homeActions.NewRewardCollectionFetchAPISuccess({newRewardCollections: response.data})
                    })
                );
            })
        );
    });

    loadNewRewardDropped$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(homeActions.InvokeNewRewardDropped),
            switchMap(action => {
                return this.collectionService.getNewRewardDropped().pipe(
                    map((response:any) => {
                        console.log(response);
                        return homeActions.NewRewardDroppedFetchAPISuccess({newRewardDropped: response.data})
                    })
                );
            })
        );
    });
}