import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, exhaustMap, catchError, switchMap, tap } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';

import * as authActions from './auth.action';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { Appstate } from 'src/app/shared/store/app.state';

import { AppService } from '@services/app.service';
import { TokenStorageService } from '@services/token-storage.service';
import { Store } from '@ngrx/store';

@Injectable()

export class AuthEffect {
    constructor(private actions$: Actions, private appService: AppService, private tokenStorageService: TokenStorageService, private appStore: Store<Appstate>) {
    }

    userLogin$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(authActions.login),
            exhaustMap(action => {
                this.appStore.dispatch(
                    setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
                );
                return this.appService.login(action.user).pipe(
                    map(response => {
                        console.log("login response", response);
                        if (response.statusDescription == "Success") {
                            this.tokenStorageService.saveToken(response.data.access_token);
                            this.tokenStorageService.saveUser(response.data.userInfo);
                            this.appStore.dispatch(
                                setAPIStatus({
                                    apiStatus: { apiResponseMessage: '', apiStatus: "Success" },
                                })
                            );
                            return authActions.loginSuccess(response);
                        } else {
                            this.tokenStorageService.saveToken(null!);
                            this.tokenStorageService.saveUser(null);
                            this.appStore.dispatch(
                                setAPIStatus({
                                    apiStatus: { apiResponseMessage: response.message, apiStatus: "Error" },
                                })
                            );
                            return authActions.loginFailure();
                        }
                    }),
                    catchError(err => {
                        this.tokenStorageService.saveToken(null!);
                        this.tokenStorageService.saveUser(null);
                        this.appStore.dispatch(
                            setAPIStatus({
                                apiStatus: { apiResponseMessage: "Unkonwn Error", apiStatus: "Error" },
                            })
                        );
                        return of(authActions.loginFailure());
                    })
                );
            })
        );
    });

    //user signup
    userSignup$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(authActions.signupUser),
            exhaustMap(action => {
                this.appStore.dispatch(
                    setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
                );

                return this.appService.signupUser(action.user).pipe(
                    map(response => {
                        console.log("signup response", response);
                        // if (response.statusDescription == "Success") {
                        //     this.tokenStorageService.saveToken(response.data.access_token);
                        //     this.tokenStorageService.saveUser(response.data.userInfo);
                        //     this.appStore.dispatch(
                        //         setAPIStatus({
                        //             apiStatus: { apiResponseMessage: '', apiStatus: "Success" },
                        //         })
                        //     );
                        //     return authActions.signupSuccess(response);
                        // } else {
                        //     this.tokenStorageService.saveToken(null!);
                        //     this.tokenStorageService.saveUser(null);
                        //     this.appStore.dispatch(
                        //         setAPIStatus({
                        //             apiStatus: { apiResponseMessage: response.message, apiStatus: "Error" },
                        //         })
                        //     );
                        //     return authActions.signupFailure();
                        // }
                        this.appStore.dispatch(
                            setAPIStatus({
                                apiStatus: { apiResponseMessage: '', apiStatus: "Success" },
                            })
                        );
                        return authActions.signupSuccess(response);
                    }),
                    catchError(err => {
                        console.log('error on reducer', err);
                        this.appStore.dispatch(
                            setAPIStatus({
                                apiStatus: { apiResponseMessage: "Unkonwn Error", apiStatus: "Error" },
                            })
                        );
                        return of(authActions.signupFailure());
                    })
                );
            })
        );
    });
}