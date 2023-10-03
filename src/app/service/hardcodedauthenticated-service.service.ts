import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedauthenticatedServiceService {

  constructor() { }

  authenticate(username: string, userpassword: string) {
    //console.log("Before logged in "+this.isUserLoggedIn());
    if(username==='admin' && userpassword==='admin123'){
    //  console.log("inside authenticate");
    sessionStorage.setItem('authenticateUser',username);
    //console.log("inside after storage authenticate");
    //console.log("after logged in "+this.isUserLoggedIn());
       return true;
  }
    else
        return false;
  }

  //isuserLoggedIn

  getUserRole() {
    return sessionStorage.getItem('role');
  }
  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticateUser');
   // console.log("user="+user);
    return !(user==null);
  }
  isUserLoggedOut(){
    let user=sessionStorage.getItem('authenticateUser');
   // console.log("user="+user);
    return user==null;
  }

getLoggedInUserInfo(){
  let user=sessionStorage.getItem('authenticateUser');
  return user;
}

isUserSignedIn() {
  let user=sessionStorage.getItem('signedUser');
   // console.log("user="+user);
    return !(user==null);
}

  logOut():void{
    sessionStorage.removeItem('authenticateUser');
    sessionStorage.removeItem('role');
    // sessionStorage.removeItem('signedUser');
  }
}
