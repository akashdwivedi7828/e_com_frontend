import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { HardcodedauthenticatedServiceService } from './hardcodedauthenticated-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardcodedAuthentication:HardcodedauthenticatedServiceService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(this.hardcodedAuthentication.isUserLoggedIn() && this.hardcodedAuthentication.getUserRole() == "seller")
      return true;
    return false;
  }
}
