import { HardcodedauthenticatedServiceService } from 'src/app/service/hardcodedauthenticated-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(public hardcodedauthenticate:HardcodedauthenticatedServiceService) {}
  ngOnInit(){
    this.hardcodedauthenticate.logOut()
  }
}
