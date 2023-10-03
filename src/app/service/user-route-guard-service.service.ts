import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardcodedauthenticatedServiceService } from './hardcodedauthenticated-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserRouteGuardServiceService implements CanActivate{

  constructor(private hardcodedAuthentication:HardcodedauthenticatedServiceService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.hardcodedAuthentication.getUserRole() == "user";  
  }
}
