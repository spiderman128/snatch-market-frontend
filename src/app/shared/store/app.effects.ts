import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppService } from "@services/app.service";

import { Store } from "@ngrx/store";
import * as appActions from "./app.action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()

export class AppEffect {
    constructor(
        private actions$: Actions,
        private appService: AppService,
        private store: Store
    ) {
    }

    getUserBalance$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(appActions.getUserBalance),
            switchMap(action => {
                return this.appService.getBalance().pipe(
                    map((response: any) => {
                        console.log(response);
                        if (response.statusDescription == "Success") {
                            return appActions.setUserBalance({ userBalance: response.data })
                        } else {
                            return appActions.InvokeUserBalanceFailed();
                        }
                    }),
                    catchError(err => {
                        return of(appActions.InvokeUserBalanceFailed());
                    })
                );
            })
        );
    });
}