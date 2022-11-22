// Angular modules
import { NgModule }          from '@angular/core';
import { Routes }            from '@angular/router';
import { RouterModule }      from '@angular/router';

// Components
import { NotFoundComponent } from './static/not-found/not-found.component';

const routes : Routes = [
  {
    path         : 'auth',
    loadChildren : () => import('./pages/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path         : 'home',
    loadChildren : () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path         : 'game/snatch',
    loadChildren : () => import('./pages/game/snatch/snatch.module').then(m => m.SnatchModule),
  },
  {
    path         : 'game/spin',
    loadChildren : () => import('./pages/game/spin/spin.module').then(m => m.SpinModule),
  },
  { path : '',   redirectTo : '/home', pathMatch : 'full' },
  { path : '**', component : NotFoundComponent }
];

@NgModule({
  imports : [RouterModule.forRoot(routes, { relativeLinkResolution : 'legacy', onSameUrlNavigation : 'reload' })],
  exports : [RouterModule]
})
export class AppRoutingModule { }
