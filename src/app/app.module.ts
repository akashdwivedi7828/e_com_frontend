import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListtodosComponent } from './component/listtodos/listtodos.component';
import { ErrorComponent } from './component/error/error.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { FooterComponent } from './component/footer/footer.component';
import { MenuComponent } from './component/menu/menu.component';
import { LogoutComponent } from './component/logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './component/signup/signup.component';
import { LandingpageComponent } from './component/landingpage/landingpage.component';
import { AddproductComponent } from './component/product/addproduct/addproduct.component';
import { ProductlistingComponent } from './component/product/productlisting/productlisting.component';
import { UserloginComponent } from './customer/userlogin/userlogin.component';
import { UsersignupComponent } from './customer/usersignup/usersignup.component';
import { ProductListComponent } from './customer/product-list/product-list.component';
import { PurchaseSuccessPopupComponent } from './component/purchase-success-popup/purchase-success-popup.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListtodosComponent,
    ErrorComponent,
    WelcomeComponent,
    UserdetailComponent,
    FooterComponent,
    MenuComponent,
    LogoutComponent,
    SignupComponent,
    LandingpageComponent,
    AddproductComponent,
    ProductlistingComponent,
    UserloginComponent,
    UsersignupComponent,
    ProductListComponent,
    PurchaseSuccessPopupComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
