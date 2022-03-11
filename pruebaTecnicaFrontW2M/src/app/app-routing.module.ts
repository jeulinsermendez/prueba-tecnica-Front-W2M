import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/views/login/login.component';
import { ROUTES_CONSTANTS } from './core/constants/routes.const';
import { AuthenticationGuard } from './core/guards/authentication/authentication.guard';
import { LayoutBasicComponent } from './layout/layout-basic.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES_CONSTANTS.HOME.route,
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutBasicComponent,
    children: [
      {
        path: ROUTES_CONSTANTS.HOME.path,
        loadChildren: () => import('./components/views/home/home.module').then(m => m.HomeModule),
        canActivate: [AuthenticationGuard]
      },
      {
        path: ROUTES_CONSTANTS.ABOUT.path,
        loadChildren: () => import('./components/views/about/about.module').then(m => m.AboutModule),
        canActivate: [AuthenticationGuard]
      },
    ]
  },
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: ROUTES_CONSTANTS.LOGIN.path,
        loadChildren: () => import('./components/views/login/login.module').then(m => m.LoginModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
