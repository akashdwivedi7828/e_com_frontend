import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent {
  model: any = {usermailid: '',
  userpassword: '',
  username:'',
  phonenumber:'',
  useraddress:''}; // This should match your signup form model
  signupError: string = ''; // To display signup errors
  constructor(private http: HttpClient, public router: Router) {}

  onSubmit() {
    // Make an HTTP POST request to your signup API
   
    this.http.post('http://localhost:8909/signupUser', this.model).subscribe(
      (response: any) => {
        // Check if the response status is 200 (OK)
        console.log("@@response", response)
        if (response.statusCode === 200) {
          // Redirect to the login page upon successful signup
          this.model ={usermailid: '',
          userpassword: '',
          username:'',
          phonenumber:'',
          useraddress:''};
          console.log("@@modl", this.model)
          sessionStorage.setItem('signedUser',JSON.stringify(response.data));
          this.router.navigate(['user/login']);
        } else {
          // Handle other status codes or errors if needed
          this.signupError = 'An error occurred during signup.';
        }
      },
      (error) => {
        // Handle HTTP error, e.g., network issues
        console.log("error", error)
        this.signupError = 'An error occurred while communicating with the server.';
      }
    );
  }
}





