import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HardcodedauthenticatedServiceService } from './hardcodedauthenticated-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserRouteGuardService {

  constructor(private hardcodedAuthentication:HardcodedauthenticatedServiceService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(this.hardcodedAuthentication.isUserLoggedIn() && this.hardcodedAuthentication.getUserRole() == "user")
      return true;
    return false;
  }
}

