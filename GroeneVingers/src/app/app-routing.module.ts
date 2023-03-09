import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WipPageComponent} from "./pages/wip-page/wip-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {AuthGuard} from "./components/auth/auth.guard";
import {AccountPageComponent} from "./pages/account-page/account-page.component";
import {CatalogusPageComponent} from "./pages/catalogus-page/catalogus-page.component";

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'catalogus',
    component: CatalogusPageComponent
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'account',
        component: AccountPageComponent
      }
    ]
  },
  { path: '**', component: WipPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
