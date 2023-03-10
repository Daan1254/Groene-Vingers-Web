import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WipPageComponent } from './pages/wip-page/wip-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "./components/auth/auth.guard";
import {NavBarComponent} from "./components/shared/nav-bar/nav-bar.component";
import {AccountPageComponent} from "./pages/account-page/account-page.component";
import { LoaderComponent } from './components/shared/loader/loader.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { OrderHistoryComponent } from './components/auth/account/order-history/order-history.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { CatalogusPageComponent } from './pages/catalogus-page/catalogus-page.component';
import { PaginatorComponent } from './components/product/paginator/paginator.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ShoppingCartComponent } from './components/shared/icons/shopping-cart/shopping-cart.component';
import {AccountIconComponent} from "./components/shared/icons/account-icon/account-icon.component";
import { ProductItemComponent } from './components/shared/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    WipPageComponent,
    ContactPageComponent,
    LoginPageComponent,
    LoginComponent,
    SignupComponent,
    AccountPageComponent,
    LoaderComponent,
    OrderHistoryComponent,
    ProductListComponent,
    CatalogusPageComponent,
    PaginatorComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    AccountIconComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
