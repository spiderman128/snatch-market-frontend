// Angular modules
import { HttpClient }           from '@angular/common/http';
import { HttpClientModule }     from '@angular/common/http';
import { APP_INITIALIZER }      from '@angular/core';
import { NgModule }             from '@angular/core';
import { Injector }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { DatePipe }             from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// External modules
import { TranslateService }     from '@ngx-translate/core';
import { TranslateModule }      from '@ngx-translate/core';
import { TranslateLoader }      from '@ngx-translate/core';
import { TranslateHttpLoader }  from '@ngx-translate/http-loader';
import { AngularSvgIconModule } from 'angular-svg-icon';

// Internal modules
import { AppRoutingModule }     from './app-routing.module';
import { SharedModule }         from './shared/shared.module';
import { StaticModule }         from './static/static.module';


// Components
import { AppComponent }         from './app.component';

// Factories
import { appInitFactory }       from '@factories/app-init.factory';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// storemodule 
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { appReducer } from './shared/store/app.reducer';

// import reducer
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppService } from '@services/app.service';
import { TokenStorageService } from '@services/token-storage.service';
import { authInterceptorProviders } from '@helpers/auth.interceptor';
import { AuthGuard } from '@services/auth.guard';
import { SecureInnerPageGuard } from '@services/secure-inner-page.guard';


@NgModule({
  imports: [
    // Angular modules
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,

    // External modules
    TranslateModule.forRoot({
      loader :
      {
        provide    : TranslateLoader,
        useFactory : (createTranslateLoader),
        deps       : [HttpClient]
      }
    }),
    AngularSvgIconModule.forRoot(),

    // Internal modules
    SharedModule,
    StaticModule,
    AppRoutingModule,
    FontAwesomeModule,

    StoreModule.forRoot({appState: appReducer}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    // External modules
    {
      provide    : APP_INITIALIZER,
      useFactory : appInitFactory,
      deps       : [ TranslateService, Injector ],
      multi      : true
    },

    // Services
    AppService,
    TokenStorageService,
    AuthGuard,
    SecureInnerPageGuard,

    // Pipes
    DatePipe,

    // Guards

    // Interceptors
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http : HttpClient)
{
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
