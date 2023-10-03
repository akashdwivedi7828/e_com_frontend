import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthenticatedServiceService } from 'src/app/service/hardcodedauthenticated-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public hardcodedauthenticatedservice:HardcodedauthenticatedServiceService, private router: Router){}
  

  redirectToHomePage(): void{
    sessionStorage.removeItem('authenticateUser');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('signedUser');
    this.router.navigate([""])

  }
}
