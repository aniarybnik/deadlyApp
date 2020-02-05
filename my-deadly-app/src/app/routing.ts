import { LoginComponent } from './login/login.component';
import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: true,
  enableTracing: false
});
