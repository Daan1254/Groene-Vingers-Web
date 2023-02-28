import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WipPageComponent} from "./pages/wip-page/wip-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {VerifyComponent} from "./components/auth/verify/verify.component";
import {AuthGuard} from "./components/auth/auth.guard";

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'auth',
    canActivateChild: [AuthGuard],
    canActivate: [AuthGuard],
    children: [
      {
        path: 'verify',
        component: VerifyComponent
      },
      {
        path: 'account',

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
