import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {WelcomeComponent} from './components/welcome/component';

export const AppRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', component: WelcomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
