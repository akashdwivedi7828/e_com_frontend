import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HardcodedauthenticatedServiceService } from './hardcodedauthenticated-service.service';

@Injectable({
  providedIn: 'root'
})
export class SellerLoginRoleService {

  constructor(private hardcodedAuthentication:HardcodedauthenticatedServiceService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.hardcodedAuthentication.getUserRole() == "seller";  
  }
}
