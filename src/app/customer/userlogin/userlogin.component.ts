import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthenticatedServiceService } from 'src/app/service/hardcodedauthenticated-service.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  model:any = {
    usermailid: '',
    userpassword: ''
  }
  username:string="admin";
  userpassword:string="";
  //result:string="";
  result:boolean=false;
  errorMessage:string="";

  //depemdency injection
  constructor(private router:Router,private hardcodedauthencate:HardcodedauthenticatedServiceService, private http: HttpClient){}
  ngOnInit() {
    if(sessionStorage.getItem('authenticateUser') != null){
      sessionStorage.removeItem('authenticateUser')
     }
     if(sessionStorage.getItem('signedUser') != null) {
      sessionStorage.removeItem('signedUser')
     }
  }
  //isuserLoggedIn
  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticateUser');
   // console.log("user="+user);
    return !(user==null);
  }


  onSubmit() {
    // Make an HTTP POST request to your signup API
   
    this.http.post('http://localhost:8909/loginUser', this.model).subscribe(
      (response: any) => {
        // Check if the response status is 200 (OK)
        console.log("@@response", response)
        if (response.statusCode === 200) {
          // Redirect to the login page upon successful signup
          this.model ={usermailid: '',
          userpassword: ''
         };
         
         sessionStorage.setItem('authenticateUser',JSON.stringify(response.data));
         sessionStorage.setItem('signedUser',JSON.stringify(response.data));
          console.log("@@", response.data)
          this.result=true;
        //navigate to welcome page
        this.router.navigate(['user/productlist',response.data.userid]);
        } else {
          // Handle other status codes or errors if needed
          this.errorMessage = 'An error occurred during login.';
        }
      },
      (error) => {
        // Handle HTTP error, e.g., network issues
        console.log("error", error)
        this.errorMessage = 'An error occurred while communicating with the server.';
      }
    );
  }
}




