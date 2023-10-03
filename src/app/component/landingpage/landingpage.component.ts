
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthenticatedServiceService } from 'src/app/service/hardcodedauthenticated-service.service';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {

  constructor(private router:Router,private hardcodedauthencate:HardcodedauthenticatedServiceService, private http: HttpClient){}

  loginAsSeller() {
    sessionStorage.setItem("role","seller");
    this.router.navigate(['seller/login']);
  }
  loginAsUser() {
    sessionStorage.setItem("role","user");
    this.router.navigate(['user/login']);
  }
}
