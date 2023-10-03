import { LandingpageComponent } from './component/landingpage/landingpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ListtodosComponent } from './component/listtodos/listtodos.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ErrorComponent } from './component/error/error.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { LogoutComponent } from './component/logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { ProductlistingComponent } from './component/product/productlisting/productlisting.component';
import { ProductListComponent } from './customer/product-list/product-list.component';

import { AddproductComponent } from './component/product/addproduct/addproduct.component';
import { UsersignupComponent } from './customer/usersignup/usersignup.component';
import { UserloginComponent } from './customer/userlogin/userlogin.component';
import { UserRouteGuardServiceService } from './service/user-route-guard-service.service';
import { SellerLoginRoleService } from './service/seller-login-role.service';
import { UserRouteGuardService } from './service/user-route-guard.service';

const routes: Routes = [
  {path:'',component:LandingpageComponent},
  {path:'seller/signup',component:SignupComponent, canActivate: [SellerLoginRoleService]},
  {path:'seller/login',component:LoginComponent, canActivate: [SellerLoginRoleService]},
  {path:'user/signup',component:UsersignupComponent, canActivate: [UserRouteGuardServiceService]},
  {path:'user/login',component:UserloginComponent, canActivate: [UserRouteGuardServiceService]},
  {path:'logout',component:LogoutComponent, canActivate: [RouteGuardService]},
  {path:'productlist/:sellerid',component:ProductlistingComponent, canActivate: [RouteGuardService]},
  {path:'user/productlist/:userid',component:ProductListComponent, canActivate: [UserRouteGuardService]},
  {path:'addproduct/:sellerid',component:AddproductComponent, canActivate: [RouteGuardService]},
  {path:'listtodos',component:ListtodosComponent, canActivate: [RouteGuardService]},
  {path:'**',component:ErrorComponent, canActivate: [RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
